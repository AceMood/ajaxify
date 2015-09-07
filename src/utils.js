/**
 * @fileoverview 工具函数集
 * @email zmike86@gmail.com
 * @author AceMood
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;

/**
 * 对象混入
 * @param {!Object} target 目标对象
 * @param {*} var_args 列表对象集合
 */
function extend (target, var_args) {
  var objs = slice.call(arguments, 1);
  var obj;
  var n = 0;
  for (; n < objs.length; ++n) {
    obj = objs[n];
    for (var name in obj) {
      if (hasOwnProperty.call(obj, name)) {
        target[name] = obj[name];
      }
    }
  }
}

/**
 * 标识是否Html5History是被支持的。
 * @param {Window=} opt_win 要检查的window对象
 * @return {boolean} 是否支持html5 history
 */
function isSupportedHistory (opt_win) {
  var win = opt_win || window;
  return !!(win.history && win.history.pushState);
}