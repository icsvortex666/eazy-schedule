module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.jsx', '.ts', '.js'] }
    ],
    'import/extensions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'consistent-return': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 3 },
        ObjectPattern: { multiline: true, minProperties: 3 },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    'react/jsx-first-prop-new-line': 'warn',
    'arrow-parens': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'react/no-array-index-key': 'off',
    'no-console': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    camelcase: 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-unneeded-ternary': 'off',
    'dot-notation': 'off'
  }
};
