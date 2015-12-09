'use strict';

let helmet = require('helmet');

module.exports = function initializeSecurity(app) {
  // X-Frame-Options: https://github.com/helmetjs/frameguard
  app.use(helmet.frameguard('deny'));
  // X-XSS-Protection: https://github.com/helmetjs/x-xss-protection
  app.use(helmet.xssFilter());
  // Strict-Transport-Security: https://github.com/helmetjs/hsts
  app.use(helmet.hsts({
    maxAge: 10886400000,
    includeSubdomains: true
  }));
  // X-Powered-By: http://expressjs.com/en/4x/api.html#app.settings.table
  app.disable('x-powered-by');
  // X-Download-Options: https://github.com/helmetjs/ienoopen
  app.use(helmet.ieNoOpen());
  // X-Content-Type-Options: https://github.com/helmetjs/dont-sniff-mimetype
  app.use(helmet.noSniff());
  // Cache-Control, Pragma, Expires: https://github.com/helmetjs/nocache
  app.use(helmet.noCache({ noEtag: true }));
  // ETag: http://expressjs.com/en/4x/api.html#app.settings.table
  app.disable('etag');
  // Content-Security-Policy: https://github.com/helmetjs/csp
  app.use(helmet.csp({
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    baseUri: ["'self'"],
    frameAncestors: ["'none'"]
  }));
};