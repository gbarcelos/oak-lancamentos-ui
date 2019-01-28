export const environment = {
  production: true,
  apiUrl: 'https://oak-lancamentos-api.herokuapp.com',
  tokenWhitelistedDomains: [ /oak-lancamentos-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
