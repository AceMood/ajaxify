/**
 * @fileoverview Ajaxify库
 * @email zmike86@gmail.com
 * @author AceMood
 */


var defaultConfig = {
  delegationDom: document.body,
  delegationSelector: 'a',
  paramName: 'ajaxify',
  paramValue: '1',
  attribute: 'href',
  threshold: 20
};


/**
 * Ajaxify构造器
 * @param {Object=} config
 * @constructor
 */
function Ajaxify (config) {
  this.id = generateId();
  this.enabled = false;
  this.config = extend({}, defaultConfig, config);
  this.init();
}

extend(Ajaxify.prototype, {
  init: function () {
    LinkController.init(this.config);
  },
  enable: function () {
    this.enabled = true;
  },
  disable: function () {
    this.enabled = false;
  }
});

/**
 * 静态生成实例
 * @param {Object=} config
 * @returns {Ajaxify}
 */
Ajaxify.create = function (config) {
  return new Ajaxify(config);
};

/**
 *
 * @param eventName
 * @param handler
 * @param context
 */
Ajaxify.on = function (eventName, handler, context) {

};

Ajaxify.trigger = function (eventName, var_args) {

};

Ajaxify.off = function (eventName, handler, context) {

};

// 启用ajaxify
Ajaxify.enable = function (ajaxify) {
  ajaxify.enable();
};

// 禁用ajaxify
Ajaxify.disable = function (ajaxify) {
  ajaxify.disable();
};