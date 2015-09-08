/**
 * @fileoverview
 * @email zmike86@gmail.com
 * @author AceMood
 */


var LinkController = Object.create(null);
var routeTime = 0;

/**
 *
 * @param {!Object} config
 */
LinkController.init = function (config) {

  // 点击事件处理器
  function handler (e) {
    // 达到指定页面局刷次数
    if (routeTime >= config.threshold) {
      return true;
    }

    var target = e.target;
    var nodes = config.delegationDom.querySelectorAll(config.delegationSelector);
    var index = findIndex(nodes, target);
    if (index !== -1) {
      routeTime++;
      var url = target.getAttribute(config.attribute);
      route(url);
    }
    return false;
  }

  config.delegationDom.addEventListener('click', handler, false);
};



function route (url) {
  HistoryManager.push(url);
  // ajaxproxy.get(url);
}