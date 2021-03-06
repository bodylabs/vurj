var _ = require('underscore');
var c = require('rho-contracts-fork');

var cc = _(require('./common-contracts')).clone();

cc.publishWithVersion = c.fun(
    { version: cc.SemanticVersion },
    { source: c.string },
    { baseUrl: cc.s3uri },
    { force: c.bool },
    { doneCallback: cc.callback() });

var functions = {
    publishWithVersion: cc.publishWithVersion,
};

module.exports = c.wrapAll(require('./versioned-publisher.impl.js'), functions);
