export const getGHRepositoryQuery = (userName: string): string => {
    return `
    query {
    user(login:"${userName}"){
         repositories(
         first: 100,
         orderBy:{
           field:CREATED_AT,
           direction:DESC
         }
       ){
           totalCount
           nodes{
            name
            url
           }
         }
       }
   }
`;
}