module.exports = {
  rules: {
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-whitelist': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^([a-z][a-z]*)(-[a-z]+)*$',
      { message: 'Expected class selector format to be kebab-case', resolveNestedSelectors: true }
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': [
      '^([a-z][a-z]*)(-[a-z]+)*$',
      { message: 'Expected id selector format to be kebab-case' }
    ],
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-attribute': 1,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-max-compound-selectors': 1,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-specificity': '0,2,1',
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': [
      ['focus', 'hover'],
      { message: 'Expected ":--focusHover" to be used' }
    ],
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true
  }
};
