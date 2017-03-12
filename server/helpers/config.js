import debug from 'debug';
import extend from 'extend';
import fs from 'fs';
import IS_DEBUG from './debug';
import path from 'path';

let log = debug('config');

const DEV_CONFIG_PATH = path.resolve(__dirname, '..', 'config', 'config.dev.json');
const DEFAULT_CONFIG_PATH = '../config/config.json';

let config;
let defaultConfig = require(DEFAULT_CONFIG_PATH);

if (IS_DEBUG && fs.existsSync(DEV_CONFIG_PATH)) {
  let devConfig = require(DEV_CONFIG_PATH);
  config = extend(true, {}, defaultConfig, devConfig);
  log(`using dev config file from ${DEV_CONFIG_PATH}`);
} else {
  config = defaultConfig;
}

export default config;