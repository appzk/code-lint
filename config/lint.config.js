// 获得最终配置文件
'use strict';

/* eslint-disable no-console */
const path = require('path');
const extend = require('extend');

// 运行检测命令的目录
const lintCMDPath = process.env.INIT_CWD;
// 默认配置
let defaultLintConfigJson = require('./default.config');
// 配置文件 lint.config.json
let lintConfigJson = require(path.join(lintCMDPath, 'lint.config.json'));
// 最终配置
let lintConfig = extend(true, {}, defaultLintConfigJson, lintConfigJson);

if (process.env.isDiffLint) {
  let lintLocalDiffJson = require(path.join(__dirname, '..', 'lint.local.diff.json'));
  lintConfig.lintTargetFiles = lintLocalDiffJson.lintTargetFiles;
}

module.exports = lintConfig;
