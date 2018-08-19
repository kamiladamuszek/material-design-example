export interface AuthVariables {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthVariables = {
  CLIENT_ID: 'NKp24n2ZufPl61vvOX8fkvDz3HI2GS9k',
  CLIENT_DOMAIN: 'materialdesignexample.eu.auth0.com',
  REDIRECT: 'http://localhost:4200',
  SCOPE: 'openid profile email'
};
