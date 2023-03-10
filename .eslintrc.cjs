/* eslint-env node */

require( '@rushstack/eslint-patch/modern-module-resolution' );

const INLINE_ELEMENTS = require( 'eslint-plugin-vue/lib/utils/inline-non-void-elements.json' );

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'space-in-parens': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'max-len': 'off',
    'no-trailing-spaces': 'off',
    'comma-dangle': 'off',
    'prefer-destructuring': 'off',
    'no-console': [ 'warn', { allow: [ 'error', 'info', 'warn' ] } ],
    quotes: [ 'warn', 'single' ],
    'object-curly-newline': [ 'error', { ImportDeclaration: 'never', ExportDeclaration: 'never' } ],
    'no-unused-vars': 'off',
    'no-unused-expressions': [ 'warn' ],
    semi: 'warn',
    'consistent-return': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': [ 'error', { functions: false } ],
    'computed-property-spacing': [ 'error', 'always' ],
    'template-curly-spacing': 'off',
    'default-case': 'off',
    'no-plusplus': [ 'warn', { allowForLoopAfterthoughts: true } ],
    'import/prefer-default-export': 'off',
    // 'no-underscore-dangle': [ 'warn', { allowAfterThis: true } ],
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': [ 'error', { max: 3 } ],
    'func-names': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'always' ],
    'no-fallthrough': 'off',
    radix: 'warn',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-control-regex': 'off',
    'no-shadow': [ 'off' ], // Turned on via '@typescript-eslint/no-shadow'
    'default-param-last': [ 'off' ],

    'vue/order-in-components': [ 'warn' ],
    'vue/singleline-html-element-content-newline': [ 'error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [ 'i18n', 'pre', 'textarea', ...INLINE_ELEMENTS ],
    } ],
    // 'vue/new-line-between-multi-line-property': [ 'warn', { minLineOfMultilineProperty: 5 } ],
    'vue/no-v-html': 'warn',
    'vue/html-indent': [ 'warn', 2, {
      alignAttributesVertically: false
    } ],
    'vue/max-attributes-per-line': [ 'warn', {
      singleline: { max: 4 },
      multiline: { max: 4 },
    } ],
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/mustache-interpolation-spacing': [ 'warn', 'always' ],
    'vue/space-in-parens': [ 'error', 'always' ],
    'vue/html-closing-bracket-newline': [ 'error', {
      singleline: 'never',
      multiline: 'always'
    } ],
    'vue/padding-line-between-blocks': [ 'error', 'always' ],
    'vue/attribute-hyphenation': [ 'warn', 'never' ],
    'vue/v-slot-style': [ 'error', {
      default: 'v-slot',
    } ],
    'vue/require-default-prop': 'off',
    'vue/component-api-style': [ 'error', [ 'options', 'script-setup' ] ],
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: []
    } ],
    'vue/component-options-name-casing': [ 'error', 'PascalCase' ],
    'vue/match-component-import-name': [ 'error' ],
    'vue/v-on-event-hyphenation': [ 'warn', 'never' ],
    'vue/custom-event-name-casing': [ 'warn', 'camelCase' ],
    'vue/define-macros-order': [ 'warn', { order: [ 'defineProps', 'defineEmits' ] } ],
    'vue/require-explicit-emits': [ 'error', { allowProps: false } ],
    'vue/html-button-has-type': [ 'warn' ],
    'vue/multi-word-component-names': [ 'warn' ],
    'vue/new-line-between-multi-line-property': [ 'warn' ],
    'vue/next-tick-style': [ 'warn' ],
    'vue/no-duplicate-attr-inheritance': [ 'error' ],
    'vue/no-multiple-objects-in-class': [ 'warn' ],
    'vue/no-potential-component-option-typo': [ 'warn' ],
    'vue/no-static-inline-styles': [ 'error' ],
    'vue/no-this-in-before-route-enter': [ 'error' ],
    'vue/no-undef-properties': [ 'off' ], // TODO: Turn on after refactor
    'vue/prefer-separate-static-class': [ 'error' ],
    'vue/require-direct-export': [ 'warn' ],
    'vue/require-name-property': [ 'error' ],
    'vue/eqeqeq': [ 'error' ],
    'vue/max-len': [ 'off' ],
    'vue/object-curly-newline': [ 'error', { ImportDeclaration: 'never', ExportDeclaration: 'never' } ],


    // Typescript related
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    '@typescript-eslint/no-shadow': [ 'error', { allow: [ 'state', 'getters' ] } ],
  },
};
