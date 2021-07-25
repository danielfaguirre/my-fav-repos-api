import GHRepository from "../Model/GHRepository";

export interface IGHRepository {
    /**
     * get all repositories
     * @param userName owner of the repositories
     */
    getGHRepositories(userName: string): Promise<GHRepository[]>;

    /**
     * name of the repository to set on favorite list
     * @param name repository name
     * @param userName name of user
     * @param isFavorite set if is favorite or not
     */
    setFavorite(name: string, userName: string, isFavorite: boolean): GHRepository;
}
