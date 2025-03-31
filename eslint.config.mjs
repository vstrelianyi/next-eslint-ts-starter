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
      'no-trailing-spaces': 'error',
      // 'comma-dangle': ['error', 'always-multiline'],
      // 'max-len': ['error', 140],
      quotes: [ 'error', 'single', ],
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'always',
          children: true,
        },
      ],
      // vars
      '@typescript-eslint/no-unused-vars': [ 'off', ],
      'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': ['error'],
      // 'no-unused-vars': 'error',
      // arrays
      '@stylistic/array-bracket-spacing': [ 'error', 'always', ],
      '@stylistic/no-multi-spaces': [ 'error', ],
      '@stylistic/jsx-props-no-multi-spaces': [ 'error', ],
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
