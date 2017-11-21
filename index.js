module.exports = {
  extends: [
    './rules/at.js',
    './rules/block.js',
    './rules/colour.js',
    './rules/comment.js',
    './rules/custom-property.js',
    './rules/declaration.js',
    './rules/font.js',
    './rules/function.js',
    './rules/general.js',
    './rules/keyframe.js',
    './rules/length.js',
    './rules/media.js',
    './rules/number.js',
    './rules/property.js',
    './rules/selector.js',
    './rules/string.js',
    './rules/time.js',
    './rules/unit.js',
    './rules/value.js'
  ].map(require.resolve)
};
