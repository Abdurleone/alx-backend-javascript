module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/all',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        AudioWorkletGlobalScope: 'readonly',  // Removed any leading or trailing whitespace
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
            'no-underscore-dangle', ['error', { 'allow': ['_maxStudentsSize'] }],
        ],
    },
    overrides:[
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js',
        }
    ]
};
