// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '206529829817093', // your App ID
        'clientSecret'  : 'c58aecb5c88bc687f2f9b9fd42caf3a1', // your App Secret
        'callbackURL'   : 'http://localhost:3000/desp/v1/auth/facebook/callback',
        'callbackURLPrd': 'https://www.despachalo.com/desp/v1/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '599947091875-0fcg5jbhr30aan1aivkhp9lhcthoqop9.apps.googleusercontent.com', // your App ID
        'clientSecret'  : 'g2O-Ke17LRKwU9NRFWZ387Qy', // your App Secret
        'callbackURL'   : 'http://localhost:3000/desp/v1/auth/google/callback',
        'callbackURLPrd': 'http://www.despachalo.com/desp/v1/auth/google/callback'
    }

};
