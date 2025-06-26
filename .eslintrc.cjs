module.exports = {
    extends: [
      'some-other-config-you-use',
      'plugin:prettier/recommended' // prettier last
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.*'],
  }
  