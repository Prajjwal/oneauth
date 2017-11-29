
config = {
  "FACEBOOK_CALLBACK": "/login/facebook/callback",
  "FACEBOOK_LOGIN_SCOPES": ["email", "public_profile"],
  "TWITTER_CALLBACK": "/login/twitter/callback",
  "GITHUB_CALLBACK": "/login/github/callback",
  "GRANT_TOKEN_SIZE": 32,
  "AUTH_TOKEN_SIZE": 64,
  "BCRYPT_SALT_ROUNDS": 8,
  "DEBUG": false,
};

config.DEPLOY_CONFIG = process.env.ONEAUTH_DEV || 'production';

switch (config.DEPLOY_CONFIG) {
  case 'localhost':
    config.SERVER_URL = 'http://localhost:3838'
    config.DEBUG = true
    config.SECRETS = require('./secrets-sample.json')
    break;
  case 'heroku':
    config.SERVER_URL = 'https://oneauth.herokuapp.com'
    config.DEBUG = true
    config.SECRETS = require('./secrets-sample.json')
    break;
  case 'production': default:
  config.SERVER_URL = 'https://account.codingblocks.com'
  config.SECRETS = require('./secrets.json')
  break;

}

module.exports = config;
