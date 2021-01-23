module.exports = {
  ignorePatterns: ['**/mockData/*.mock.js'],
  extends: 'airbnb',
  plugins: [
    'react-hooks'
  ],
  env: {
    browser: true
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-bitwise': 'off',
    'no-param-reassign': ['warn'],
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-unused-vars': ['error', { vars: 'local', args: 'none' }],
    'object-shorthand': ['warn', 'consistent-as-needed'],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': ['off', 'never'],
    'prefer-destructuring': ['error', {
      AssignmentExpression: {
        array: false,
        object: false
      }
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never' }],
    'vars-on-top': 'warn',

    'import/extensions': ['off', 'always'],
    'import/prefer-default-export': 'off',

    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'warn',
    'react/style-prop-object': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.spec.js']
    }],
    'max-len': ['error', {
      code: 130,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }],

    // ----- Since React 17 these are not necessary
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // -----------------------------------------------------
    // ---- our custom preferences which we like to use ----
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'react/jsx-curly-brace-presence': [1, { props: 'always', children: 'never' }],
    'no-console': [1, { allow: ['warn', 'error', 'info', 'dir'] }],
    'no-use-before-define': 0,

    // ---------------------------------------------

    // we like these rules but we prefer to switch them to error instead of warning
    'react/no-array-index-key': 2,

    // STORE MODE doesn't have to be optimised and a11y friendly
    // -> so we ignore it
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-is-valid': 0,

    // ---------------------------------------------
    // ---- we don't want to follow these rules ----
    'implicit-arrow-linebreak': 0,
    'import/no-cycle': 0,

    // ---------------------------------------------
    // ------ We don't like these formatting -------
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,

    // developers on windows would struggle during linting
    // on windows be sure u did 'git config --global core.autocrlf true'
    'linebreak-style': 0,

    // ---------------------------------------------
    // ------ Recommended rules for react hooks ----
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'

  }
};
