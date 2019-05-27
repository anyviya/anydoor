
module.exports = {
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "globals": {
        //"window": true
    },
    "env": {
        //"browser": false,
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    }
}