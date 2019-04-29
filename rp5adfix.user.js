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
// @match           https://rp5.co.uk/*
// @match           https://m.rp5.co.uk/*
// @run-at          document-idle
// @grant           unsafeWindow
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         14
// ==/UserScript==

"use strict";

var script;
var uw = window;
if (typeof unsafeWindow !== 'undefined') {
    uw = unsafeWindow;
}
if (typeof uw.isAdFilter !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function isAdFilter() {return false;}';
    (document.body||document.documentElement).appendChild(script);
}
script = document.createElement('SCRIPT');
script.textContent = '';
for (var l in uw) {
    if (uw.hasOwnProperty(l)
        && typeof uw[l] === 'function'
        && uw[l].toString().indexOf('sABMess') != -1) {
        script.textContent += 'function ' + uw[l].name + '() {}\n';
    }
}
(document.body||document.documentElement).appendChild(script);
