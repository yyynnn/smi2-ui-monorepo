/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'testing-library', '@tanstack/query', 'jest-dom', 'jest', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:no-array-reduce/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'prettier/prettier': 'warn',

    '@tanstack/query/prefer-query-object-syntax': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    'storybook/no-title-property-in-meta': 'error',

    'prefer-template': 'error',
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'error',
    'spaced-comment': 'error',
    'id-length': ['off', { min: 2, properties: 'never' }],

    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',

    'no-array-reduce/no-reduce': 'off',
    'jsx-a11y/anchor-is-valid': ['off'],

    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          it: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
        },
      },
    ],

    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ['ProcessEnv.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      files: ['src/**/*.stories.*', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  // ESlint default behaviour ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: [
    '!.*',
    'node_modules',
    '.next',
    '.turbo',
    'dist',
    'compiled',
    'build-next-static',
    'build-storybook-static',
    // Files bellow are not git ignored. Eslint fix in the making https://github.com/eslint/eslint/issues/15010
    'VersionInfo.ts',
    'next-env.d.ts',
  ],

  settings: {
    typescript: {},
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', 'apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
