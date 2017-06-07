module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: false,
    },
    globals: {
        process: true,
        __dirname: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['graphql', 'react', 'prettier'],
    rules: {
        'react/prop-types': 1, // fix these later
        'react/display-name': 1, // fix these later, see
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md

        'graphql/template-strings': [
            2,
            {
                // Import default settings for your GraphQL client. Supported values:
                // 'apollo', 'relay', 'lokka'
                env: 'relay',
                // Import your schema JSON here
                schemaJson: require('./data/schema.json'),
                // tagName is set for you to Relay.QL ...
            },
        ],
        'no-undef': 1,
        'no-console': 0,
        'linebreak-style': ['error', 'unix'],

        // might both conflict with prettier, see https://github.com/prettier/eslint-config-prettier
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                tabWidth: 4,
                bracketSpacing: true,
                jsxBracketSameLine: true,
                printWidth: 160,
            },
        ],
    },
};
