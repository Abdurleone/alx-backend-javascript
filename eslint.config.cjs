// eslint.config.cjs
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = [
    ...compat.config({
        extends: [
            'airbnb-base',
            'plugin:jest/all',
        ],
        plugins: ['jest'],
        rules: {
            'max-classes-per-file': 'off',
            'no-underscore-dangle': 'off',
            'no-console': 'off',
            'no-shadow': 'off',
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'LabeledStatement',
                    message: 'Labeled statements are not allowed.',
                },
                {
                    selector: 'WithStatement',
                    message: 'With statements are not allowed.',
                },
            ],
        },
        overrides: [
            {
                files: ['*.js'],
                excludedFiles: 'babel.config.js',
            }
        ],
    }),
    {
        languageOptions: {
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
            },
        },
        files: ['*.js'],
    }
];
