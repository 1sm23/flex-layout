/*
 * @作者: 刘时满
 * @Date: 2020-11-02 14:03:14
 * @LastEditTime: 2020-11-02 15:08:28
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述:
 */
"use strict";
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

function task1() {
  return gulp
    .src("src/index.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist"));
}
exports.default = () => gulp.watch("src/index.css", task1);
