import GHRepositoryProvider from '../../Provider/GHRepository.provider';

const ghRepositoryProvider: GHRepositoryProvider = new GHRepositoryProvider();
export const ghRepositoryRoot = {
    getGHRepositories: async (data: any) =>
        await ghRepositoryProvider.getGHRepositories(data.userName),
    setFavorite: (data: any) =>
        ghRepositoryProvider.setFavorite(data.name, data.userName, data.isFavorite)
};