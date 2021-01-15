/**
 * PostCSS Configuration
 */
module.exports = {
  plugins: {
    // 分割したファイルを結合する
    "postcss-import": {
      // filter: () => true,
      // root: process.cwd(),
      // path: [],
      // plugins: undefined,
      plugins: [
        // このタイミングでlinterを実行すると、エラー位置が結合前のファイルで示される
        require("stylelint")(),
      ],
      // resolve: null,
      // load: null,
      // skipDuplicates: true,
      // addModulesDirectories: [],
    },
    // 今後ブラウザに実装されていくもの、既に一部のブラウザで実装済みのものを利用する
    // 具体的にはhttps://preset-env.cssdb.org/featuresで確認可能
    "postcss-preset-env": {
      stage: 3,
      // browsers: "last 2 versions",
      autoprefixer: {
        // env: undefined,
        // cascade: true,
        cascade: false,
        // add: true,
        // remove: true,
        // supports: true,
        // flexbox: true,
        // grid: false,
        grid: "autoplace",
        // stats: undefined,
        // browsers: undefined,
      },
      // insertBefore: {},
      // insertAfter: {},
      // preserve: false,
      // importFrom: undefined,
      // exportTo: undefined,
    },
    // flex周りのプロパティの指定方法によるバグを回避する
    "postcss-flexbugs-fixes": {},
  },
};
