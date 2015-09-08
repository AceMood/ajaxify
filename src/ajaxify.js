/**
 * @fileoverview Ajaxify库
 * @email zmike86@gmail.com
 * @author AceMood
 */

"use strict";

if (!isSupportedHistory())
  return;

var defaultConfig = {
  delegationDom: document.body,
  delegationSelector: 'a',
  paramName: 'ajaxify',
  paramValue: '1',
  attribute: 'href'
};


/**
 * Ajaxify构造器
 * @param {?Object} config
 * @constructor
 */
function Ajaxify (config) {
  this.id = generateId();
  this.config = extend({}, defaultConfig, config);
  this.init();
}

extend(Ajaxify.prototype, {
  init: function () {
    delegate(this.config);
  },
  trigger: function () {

  },
  on: function (eventName, handler, context) {

  },
  off: function () {

  },
  enable: function () {

  },
  disable: function () {

  }
});

/**
 * 静态生成实例
 * @param {?Object} config
 * @returns {Ajaxify}
 */
Ajaxify.create = function (config) {
  return new Ajaxify(config);
};