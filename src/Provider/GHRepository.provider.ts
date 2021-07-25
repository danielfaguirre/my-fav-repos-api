import GHRepository from '../Model/GHRepository';
import fetch from 'node-fetch';
import { BD_DIRECTORY, GITHUB_ACCESS_TOKEN, GITHUB_END_POINT } from "../Constants";
import { transformGHData } from './Adapter/GHRepository.adapter';
import { LocalStorage } from 'node-localstorage';
import { IGHRepository } from '../Repository/IGHRepository';
import { getGHRepositoryQuery } from '../GraphQL/Queries/getGHRepositoryQuery';

const localStorage: any = new LocalStorage(BD_DIRECTORY);
let ghRepositories: GHRepository[] = localStorage.ghRepositories
    ? JSON.parse(localStorage.ghRepositories) : [];

export default class GHRepositoryProvider implements IGHRepository {

    async getGHRepositories(userName: string): Promise<GHRepository[]> {
        const query = getGHRepositoryQuery(userName);
        try {
            const response = await fetch(GITHUB_END_POINT, {
                method: 'POST',
                body: JSON.stringify({ query }),
                headers: {
                    'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
                },
            })
            const body = await response.json();
            return transformGHData(body, ghRepositories, userName);
        } catch (error) {
            return [];
        }
    }

    setFavorite(name: string, userName: string, isFavorite: boolean): GHRepository {
        const ghRepository = new GHRepository(name, '', userName, isFavorite);
        if (isFavorite)
            ghRepositories.push(ghRepository);
        else
            ghRepositories = ghRepositories.filter(item => {
                if (item.userName === ghRepository.userName)
                    return item.name !== ghRepository.name;
                else{
                    return item;
                }
            });
        localStorage.setItem('ghRepository', JSON.stringify(ghRepositories));
        return ghRepository;
    }
}