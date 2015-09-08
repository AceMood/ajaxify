/**
 * @fileoverview 历史记录管理模块
 * @email zmike86@gmail.com
 * @author AceMood
 */

function HistoryManager () {

}

HistoryManager.push = function (url, title) {
  window.history.pushState(null, title || document.title, url);
};