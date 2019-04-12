// ==UserScript==
// @name            RP5 AdBlock Fix
// @namespace       rp5 adblock fix
// @description     breaks RP5 anti-ablock features
// @description:ru  ломает защиту от блокировки рекламы на сайтах RP5
// @description:ua  ломает защиту от блокировки рекламы на сайтах RP5
// @description:kz  ломает защиту от блокировки рекламы на сайтах RP5
// @match           https://rp5.ru/*
// @match           https://m.rp5.ru/*
// @match           https://rp5.ua/*
// @match           https://m.rp5.ua/*
// @match           https://rp5.by/*
// @match           https://m.rp5.by/*
// @match           https://rp5.kz/*
// @match           https://m.rp5.kz/*
// @run-at          document-idle
// @grant           none
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         7
// ==/UserScript==

"use strict";

if (typeof unsafeWindow.sAdIdContainerBottom !== 'undefined') {
  var div = document.createElement('DIV');
  div.id = unsafeWindow.sAdIdContainerBottom.substr(1);
  (document.body||document.documentElement).appendChild(div);
}
if (typeof unsafeWindow.isAdBlocker !== 'undefined') {
  var script = document.createElement('SCRIPT');
  script.textContent = 'function isAdBlocker() {return false;}';
  (document.body||document.documentElement).appendChild(script);
}
if (typeof unsafeWindow.isAdFilter !== 'undefined') {
  var script = document.createElement('SCRIPT');
  script.textContent = 'function isAdFilter() {return false;}';
  (document.body||document.documentElement).appendChild(script);
}
