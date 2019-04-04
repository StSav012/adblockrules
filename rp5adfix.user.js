// ==UserScript==
// @name            RP5 AdBlock Fix
// @namespace       rp5 adblock fix
// @description     breaks RP5 anti-ablock features
// @match           https://rp5.ru/*
// @match           https://m.rp5.ru/*
// @match           https://rp5.ua/*
// @match           https://m.rp5.ua/*
// @match           https://rp5.kz/*
// @match           https://m.rp5.kz/*
// @run-at          document-idle
// @grant           none
// @copyright       2019, StSav012
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         3
// ==/UserScript==

"use strict";

if (typeof sAdIdContainerBottom !== 'undefined') {
  $('body').append('<div id=' + sAdIdContainerBottom.substr(1) + '></div>');
}
if (typeof isAdBlocker !== 'undefined') {
  var script = document.createElement('script');
  script.textContent = 'function isAdBlocker() {return false;}';
  (document.body||document.documentElement).appendChild(script);
}
