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
// @version         2
// ==/UserScript==

"use strict";

try {
  $('body').append('<div id=' + sAdIdContainerBottom.substr(1) + '></div>');
}
catch(e) {
  var actualCode = '(' + function() {

    adBlocked = false;
    function isAdBlocker() {return false;}
    $("#banner-bottom").remove();
    $("#banner-bottom .adsbygoogle").remove();
    $("#banner-bottom #aswift_0_expand").remove();
  }
  + ')(); console.log(\"adBlocked =\", adBlocked);';

  var script = document.createElement('script');
  script.textContent = actualCode;
  (document.body||document.documentElement).appendChild(script);
}
