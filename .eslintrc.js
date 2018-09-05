const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'import', 'lodash-fp'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'no-console': isProduction ? error : off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-underscore-dangle': off,
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'import/no-extraneous-dependencies': [error, { packageDir: './' }],
    'function-paren-newline': [error, 'consistent'],
    'import/no-deprecated': warn,
    'import/first': warn,
    'import/no-unresolved': warn,
    'import/extensions': warn,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    'jsx-a11y/no-autofocus': off,
    'lodash-fp/consistent-compose': error,
    'lodash-fp/consistent-name': [error, 'fp'],
    'lodash-fp/no-argumentless-calls': error,
    'lodash-fp/no-chain': error,
    'lodash-fp/no-extraneous-args': error,
    'lodash-fp/no-extraneous-function-wrapping': error,
    'lodash-fp/no-extraneous-iteratee-args': error,
    'lodash-fp/no-for-each': off,
    'lodash-fp/no-partial-of-curried': error,
    'lodash-fp/no-single-composition': error,
    'lodash-fp/no-submodule-destructuring': error,
    'lodash-fp/no-unused-result': error,
    'lodash-fp/prefer-compact': error,
    'lodash-fp/prefer-composition-grouping': error,
    'lodash-fp/prefer-constant': [error, { arrowFunctions: false }],
    'lodash-fp/prefer-flat-map': error,
    'lodash-fp/prefer-get': error,
    'lodash-fp/prefer-identity': [error, { arrowFunctions: false }],
    'lodash-fp/preferred-alias': off,
    'lodash-fp/use-fp': error,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-unused-vars': [error, { args: 'after-used', ignoreRestSiblings: true }],
    'object-curly-newline': [error, { consistent: true }],
    'prefer-spread': off,
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/no-typos': error,
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true,
    },
  },
  overrides: [
    {
      files: ['src/native/containers/SignIn/SignIn.js'],
      rules: {
        'no-alert': off,
      },
    },
    {
      files: ['App.js', 'src/locales/index.js'],
      rules: {
        'import/no-unresolved': off,
        'import/extensions': off,
      },
    },
    {
      files: ['src/shared/store/**/*.js'],
      rules: {
        'global-require': off,
        'import/no-dynamic-require': off,
        'import/no-extraneous-dependencies': off,
        'import/no-unresolved': off,
        'no-empty': [error, { allowEmptyCatch: true }],
        'prefer-spread': off,
      },
    },
    {
      files: ['src/native/**/*.js'],
      rules: {
        'no-new': off,
        'new-cap': off,
        'import/namespace': off,
        'import/no-deprecated': off,
        'import/named': off,
        'import/no-extraneous-dependencies': off,
        'import/no-duplicates': off,
        'import/extensions': off,
        'import/default': off,
        'import/no-named-as-default-member': off,
        'import/no-unresolved': off,
        'import/no-named-as-default': off,
        'react/prefer-stateless-function': off,
      },
    },
    {
      files: ['src/**/sagas.js'],
      rules: {
        'no-new': off,
        'new-cap': off,
      },
    },
    { // Localization strings should not be limited in size
      files: ['src/locales/**/*.js'],
      rules: {
        'max-len': off,
      },
    },
    { // React native specific proptypes are interpreted as typo, not sure how to get around this, turning off for now
      files: ['src/native/components/FormFieldButton.js'],
      rules: {
        'react/no-typos': off,
      },
    },
    { // React native files that rely on global require for platform (iOS / Android) specific logic
      files: ['src/native/containers/Trades/Market/Chart/Chart.js', 'src/native/containers/Trades/Market/Information/Information.js'],
      rules: {
        'global-require': off,
      }
    },
    {
      files: ['src/native/themes/**/*.js'],
      rules: {
        'global-require': off,
        'import/no-dynamic-require': off,
        'import/no-extraneous-dependencies': off,
        'import/no-unresolved': off,
        'no-empty': [error, { allowEmptyCatch: true }],
        'prefer-spread': off,
        'lodash-fp/prefer-constant': off,
        'no-tabs': off,
        'no-nested-ternary': off,
        'no-unused-vars': off,
        'prefer-destructuring': off,
        'import/namespace': off,
        'import/no-deprecated': off,
        'import/no-default': off,
        'import/extensions': off,
        'import/no-named-as-default': off,
        'import/default': off,
        'import/no-duplicates': off,
        'import/no-named-as-default-member': off,
        'import/first': off,
        'no-param-reassign': off,
        'lodash-fp/use-fp': off,
        'lodash-fp/consistent-name': off,
      },
    },
  ],
};