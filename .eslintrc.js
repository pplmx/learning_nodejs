module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        // 0 is "off", 1 is "warn", 2 is "error"
        indent: [
            2,
            4
        ],
        quotes: [
            2,
            'single'
        ],
        semi: [
            2,
            'never'
        ],
        camelcase: 0,
        'linebreak-style': [
            2,
            'unix'
        ],
        'space-before-function-paren': [
            2,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'prefer-arrow-callback': 1,
        'eol-last': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 2,
        'no-extra-semi': 2,
        'no-mixed-spaces-and-tabs': [
            2,
            false
        ],
        'no-multi-spaces': 2,
        'no-func-assign': 2,
        'no-class-assign': 2,
        'no-const-assign': 2
    }
}
