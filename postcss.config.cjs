
module.exports = {
  plugins: {
    "postcss-preset-env": {
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": false
      },
      browsers: "last 2 versions",
    },
    "postcss-simple-vars": {},
    "postcss-import": {},
    "postcss-extend": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    stylefmt: {},
    ...(process.env.NODE_ENV === "production" ? {cssnano: {preset: "default"}} : {})
  }
}