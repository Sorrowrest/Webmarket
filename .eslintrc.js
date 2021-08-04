module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  ignorePatterns: ['.eslintrc.js', 'react-app-env.d.ts'],
  rules: {
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": "off",
    'linebreak-style': ['error', 'windows'],
    "no-param-reassign": ["error"],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
      }
    ],
    "linebreak-style": 0,
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    curly: ['error', 'all'],
    'no-implicit-coercion': ['error'],
    'spaced-comment': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'src/**',
            group: 'parent',
            position: 'after',
          },
        ],
      },
    ],
    "import/newline-after-import": "error",
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
