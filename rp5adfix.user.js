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
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         24
// ==/UserScript==

"use strict";

var actualCode = '(' + function() {
    "use strict";

    var ss = window.document.querySelectorAll("script[src][onerror]");
    for (var s in Array.from(ss)) {
        var e = ss[s].attributes.onerror.value.trim();
        if (e.indexOf(' ') === -1) {
            while (e.length > 0) {
                if (window.hasOwnProperty(e)
                    && typeof window[e] === 'function') {
                    window[e] = function() {};
                    break;
                }
                else {
                    e = e.slice(0, -1);
                }
            }
        }
    }
    for (var l in window) {
        if (window.hasOwnProperty(l)
            && window[l]
            && typeof window[l] === 'object') {
            if (window[l].constructor === Object 
                && window[l].toSource().indexOf('.removeAttr(') !== -1) {
                for (f in window[l]) {
                    if (typeof window[l][f] === 'function') {
                        if (window[l][f].toString().indexOf('return') !== -1) {
                            window[l][f] = function() {return 0;};
                        }
                        else {
                            window[l][f] = function() {};
                        }
                    }
                }
            }
            else if (window[l].constructor === Array
                && window[l].length == 2
                && window[l][1] === 'document') {
                window.document[window[l][0]] = undefined;
            }
        }
    }
    var bannerBottom = document.getElementById("banner-bottom");
    bannerBottom.parentElement.removeChild(bannerBottom);
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
