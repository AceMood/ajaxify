/**
 * @fileoverview 点击代理相关函数
 * @email zmike86@gmail.com
 * @author AceMood
 */

var LinkController = Object.create(null);
var routeTime = 0;

/**
 * 超链接点击代理
 * @param {!Ajaxify} ajaxify
 */
LinkController.init = function (ajaxify) {

  var config = ajaxify.config;

  // 点击事件处理器
  function handler (e) {
    // 达到指定页面局刷次数，或者ajaxify处于禁用状态
    if (routeTime >= config.threshold || !ajaxify.enabled) {
      return true;
    }

    var target = e.target;
    var nodes = config.delegationDom.querySelectorAll(config.delegationSelector);
    var index = findIndex(nodes, target);
    if (index !== -1) {
      // 要跳转的页面
      var url = target.getAttribute(config.attribute);
      // 页面局刷的占位符元素id
      var attrIds = target.getAttribute('pagelets');
      var pagelets = JSON.parse(attrIds);

      routeTime++;
      Ajaxify.trigger('pageUnload', location.href);
      HistoryManager.push(url);
      XhrIo.get(url, callback);
    }
    return false;
  }

  function callback (url) {
    Ajaxify.trigger('pageContentLoaded', url);

  }

  config.delegationDom.addEventListener('click', handler, false);
};