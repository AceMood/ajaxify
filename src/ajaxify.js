/**
 * @fileoverview
 * @email
 * @author
 */


var defaultConfig = {
  delegationArea: document.body,
  delegationDom: 'a',
  paramName: 'ajaxify',
  paramValue: '1',
  attribute: 'href'
};


function Ajaxify () {

}


Ajaxify.prototype.trigger = function () {

};


Ajaxify.prototype.on = function (eventName, handler, context) {

};


Ajaxify.init = function (config) {
  return new Ajaxify(config);
};