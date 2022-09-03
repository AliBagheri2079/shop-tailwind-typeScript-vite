/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("tailwindcss"),
    cssnano({
      preset: "default",
    }),
    purgecss({
      content: ["./**/*.html"],
    }),
    postcssPresetEnv({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": true,
        "color-mod-function": { unresolved: "warn" },
      },
      browsers: "last 2 versions",
    }),
    require("postcss-simple-vars"),
    require("autoprefixer"),
  ],
};
