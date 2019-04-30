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
// @version         19
// ==/UserScript==

"use strict";

var script;
var w = window;
if (typeof unsafeWindow !== 'undefined') {
    w = unsafeWindow;
}
if (typeof w.adFilters !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'adFilters.breakTable = function() {};';
    (document.body||document.documentElement).appendChild(script);
}
for (var l in w) {
    if (w.hasOwnProperty(l)
        && w[l]
        && typeof w[l] === 'object'
        && w[l].constructor === Array
        && w[l].toString().indexOf('txt.rp5.') != -1) {
        script = document.createElement('SCRIPT');
        script.textContent = '';
        for (var ll in w) {
            if (w.hasOwnProperty(ll)
                && typeof w[ll] === 'function'
                && w[ll].toString().indexOf(l + '[' + w[l].indexOf('is_adblock') + ']') != -1) {
                script.textContent += 'function ' + w[ll].name + '() {}\n';
            }
        }
        (document.body||document.documentElement).appendChild(script);
    }
}
