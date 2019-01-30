export const environment = {
  production: true,
  apiUrl: 'https://oak-lancamentos-api.herokuapp.com',
  tokenWhitelistedDomains: [ new RegExp('oak-lancamentos-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
