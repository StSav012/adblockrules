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
// @match           http://rp5.ru/*
// @match           http://m.rp5.ru/*
// @match           http://rp5.ua/*
// @match           http://m.rp5.ua/*
// @match           http://rp5.by/*
// @match           http://m.rp5.by/*
// @match           http://rp5.kz/*
// @match           http://m.rp5.kz/*
// @match           http://rp5.co.uk/*
// @match           http://m.rp5.co.uk/*
// @run-at          document-end
// @grant           unsafeWindow
// @grant GM.setValue
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         22
// ==/UserScript==

"use strict";

var actualCode = '(' + function() {
    "use strict";

    var w = window;
    if (typeof unsafeWindow !== 'undefined') {
        w = unsafeWindow;
    }
    var ss = w.document.querySelectorAll("script[src][onerror]");
    for (var s in Array.from(ss)) {
        var e = ss[s].attributes.onerror.value.trim();
        if (e.indexOf(' ') === -1) {
            while (e.length > 0) {
                if (w.hasOwnProperty(e)
                    && typeof w[e] === 'function') {
                    w[e] = function() {};
                    break;
                }
                else {
                    e = e.slice(0, -1);
                }
            }
        }
        else if (typeof w.adFilters !== 'undefined') {
            w.adFilters.breakTable = function() {};
            w.adFilters.answer = function() {};
        }
    }
    for (var l in w) {
        if (w.hasOwnProperty(l)
            && w[l]
            && typeof w[l] === 'object'
            && w[l].constructor === Array
            && w[l].length == 2
            && w[l][1] === 'document') {
            w.document[w[l][0]] = undefined;
        }
    }
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
