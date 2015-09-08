/**
 * @fileoverview
 * @email zmike86@gmail.com
 * @author AceMood
 */

/**
 *
 * @param {Object=} config
 */
function delegate (config) {

  function handler (e) {
    var target = e.target;
    var nodes = config.delegationDom.querySelectorAll(config.delegationSelector);
    var index = findIndex(nodes, target);
    if (index !== -1 && ) {
      var url = target.getAttribute(config.attribute)
    }
    return false;
  }

  config.delegationDom.addEventListener('click', handler, false);
}



function handler (url) {
  HistoryManager.push(url);
  ajaxproxy.get(url)
}