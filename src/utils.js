/**
 * @fileoverview 工具函数集
 * @email zmike86@gmail.com
 * @author AceMood
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;
/**
 * UID计数, 简单的整形递增
 * @type {number}
 * @private
 */
var uidCounter = 0;

/**
 * 对象混入
 * @param {!Object} target 目标对象
 * @param {...*} var_args 列表对象集合
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

/**
 * 生成ajaxify实例唯一id
 * @returns {string}
 */
function generateId () {
  return 'Ajaxify_' + uidCounter++;
}

/**
 * 在数组中搜索符合条件的第一个项的索引
 * @param {Array.<T>} arr 要遍历的对象
 * @param {S} obj 要寻找的对象
 * @return {number} 返回第一个匹配的元素的索引, 无通过者返回-1
 * @template T,S
 */
function findIndex (arr, obj) {
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    if (arr[i] === obj)
      return i;
  }
  return -1;
}