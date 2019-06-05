# react-adal-demo
Demostrate Active Directory Authentication Library (ADAL) for React
Use [azure-activedirectory-library-for-js](https://github.com/AzureAD/azure-activedirectory-library-for-js) and [react-adal](https://github.com/salvoravida/react-adal) to get user name and JWT. 

Check out how to include  token in the Authorization header from [react-adal tutorials](https://github.com/salvoravida/react-adal) 

Azure AD JWT Decoder: https://adfshelp.microsoft.com/JwtDecoder/GetToken

# Prerequisite
Before using ADAL JS, follow the instructions to [register your application](https://docs.microsoft.com/en-gb/azure/active-directory/develop/quickstart-register-app) on the Azure portal. Also, make sure to enable the OAuth 2.0 implicit flow by setting the property oauth2AllowImplicitFlow to true by editing your application manifest on the portal. Implicit flow is used by ADAL JS to get tokens.

# Setup
[create-react-app](https://github.com/facebook/create-react-app)
```
npm init react-app react-adal-demo
npm install react-adal
```

# Using HTTPS in Development
[Using HTTPS in Development](https://facebook.github.io/create-react-app/docs/using-https-in-development)
Windows (cmd.exe)
```
set HTTPS=true&&npm start
```

Linux, macOS (Bash)
```
HTTPS=true npm start
```