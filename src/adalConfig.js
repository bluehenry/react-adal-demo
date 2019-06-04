import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
tenant: '4f6e1565-c2c7-43cb-8a4c-0981d022ce20',
clientId: 'b27ddda1-cf38-444f-981f-8ed04b8cb145',
endpoints: {
    api: 'https://graph.microsoft.com' // <-- The Azure AD-protected API
},
cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);