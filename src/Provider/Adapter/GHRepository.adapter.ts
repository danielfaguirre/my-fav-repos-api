import GHRepository from '../../Model/GHRepository';

export const transformGHData = (data: any, ghRepositories: GHRepository[], userName: string): GHRepository[] => {
    const repositories: [{ name: string, url: string }] = data.data.user.repositories.nodes;
    return repositories.map(repo => {
        const isFavorite = ghRepositories.find(ghRepository =>
            ghRepository.name === repo.name
            && ghRepository.userName === userName
        ) ? true : false;
        return new GHRepository(repo.name, repo.url, userName, isFavorite);
    });
}

