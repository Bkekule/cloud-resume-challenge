module.exports = {
  plugins: {
    "postcss-custom-media": {},

    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
      autoprefixer: {
        grid: false,
      },
    },

    cssnano: {
      preset: "default",
    },
  },
};
