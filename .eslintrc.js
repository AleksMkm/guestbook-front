export default {
  env: {
    'browser': true,
    'node': true,
    'es2021': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaFeatures': { 'jsx': true },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': [
      'error',
      2
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 1
    }],
    'brace-style': 'error',
    'object-curly-newline': ['error', { 'consistent': true }],
    'react/prop-types': 0,
    'react/self-closing-comp': ['error', {
      'component': true, 'html': true
    }],
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/display-name': ['off'],
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }]
  }
}