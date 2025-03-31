import { dirname, } from 'path';
import { fileURLToPath, } from 'url';
import { FlatCompat, } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config} */
const eslintConfig = [
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  ...compat.config({
    extends: [ 'next/core-web-vitals', 'next/typescript', ],
    rules: {
      // jsx style formatting
      '@stylistic/indent': [ 'error', 2, ],
      '@stylistic/quotes': [ 'error', 'single', ],
      '@stylistic/jsx-quotes': [ 'error', 'prefer-double', ],
      '@stylistic/max-len': [ 'error', 140, ],
      '@stylistic/jsx-curly-spacing': [
        'error',
        {
          when: 'always',
          children: true,
        },
      ],
      '@stylistic/jsx-max-props-per-line': [ 2, {
        'maximum': 1,
        'when': 'always',
      }, ],

      // vars
      '@typescript-eslint/no-unused-vars': [ 'off', ],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': ['error'],
      // 'no-unused-vars': 'error',

      // arrays
      '@stylistic/array-bracket-spacing': [ 'error', 'always', ],
      '@stylistic/no-multi-spaces': [ 'error', ],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/jsx-props-no-multi-spaces': [ 'error', ],
      '@stylistic/no-trailing-spaces': [ 'error', { 'skipBlankLines': false, }, ],
      '@stylistic/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      // objects
      '@stylistic/object-curly-spacing': [ 'error', 'always', ],
      '@stylistic/object-curly-newline': [ 'error', {
        multiline: true, // Allow multiline objects
        consistent: true, // Ensure consistent behavior
      }, ],
      '@stylistic/object-property-newline': [ 'error', {
        allowAllPropertiesOnSameLine: false, // Each property on its own line
      }, ],
      '@stylistic/no-multiple-empty-lines': [ 'error', {
        max: 1, // Max 1 blank line anywhere
        maxEOF: 0, // No blank lines at end of file
      }, ],
      '@stylistic/padded-blocks': [ 'error', 'never', ],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always',
          objects: 'always',
          imports: 'always',
          exports: 'always',
          functions: 'never',
        },
      ],
    },
  }),
];
export default eslintConfig;
