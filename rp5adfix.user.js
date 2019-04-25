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
// @grant           none
// @author          StSav012
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/rp5adfix.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/rp5adfix.user.js
// @version         11
// ==/UserScript==

"use strict";

var div, script;
if (typeof unsafeWindow !== 'undefined') {
  if (typeof unsafeWindow.sAdIdContainerBottom !== 'undefined') {
    div = document.createElement('DIV');
    div.id = unsafeWindow.sAdIdContainerBottom.substr(1);
    (document.body||document.documentElement).appendChild(div);
  }
  if (typeof unsafeWindow.sContainer !== 'undefined') {
    div = document.createElement('DIV');
    div.id = unsafeWindow.sContainer.substr(1);
    (document.body||document.documentElement).appendChild(div);
  }
  if (typeof unsafeWindow.isAdBlocker !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function isAdBlocker() {return false;}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof unsafeWindow.isAdFilter !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function isAdFilter() {return false;}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof unsafeWindow.gofirst !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function gofirst() {}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof unsafeWindow.sABMessage !== 'undefined') {
    var scripts = document.querySelectorAll('head > script:not([src])');
    for (let s of scripts) {
      if (s.textContent.indexOf(unsafeWindow.sABMessage) != -1) {
        var w1 = s.textContent.split('[');
        var maxLength = -1, maxLengthIndex = 0;
        for (let w of w1) {
          var i = w.lastIndexOf(']');
          if (maxLength < i) {
            maxLength = i;
            maxLengthIndex = w1.indexOf(w);
          }
        }
        if (maxLengthIndex > 0) {
          var w2 = w1[maxLengthIndex - 1].split(' ');
          var fn = w2[w2.lastIndexOf('function') + 1].split('(')[0];
          script = document.createElement('SCRIPT');
          script.textContent = 'function ' + fn + '() {addCookie("is_adblock", false, 365);}';
          (document.body||document.documentElement).appendChild(script);
          s.textContent += script.textContent;
        }
      }
    }
  }
}
else {
  if (typeof sAdIdContainerBottom !== 'undefined') {
    div = document.createElement('DIV');
    div.id = sAdIdContainerBottom.substr(1);
    (document.body||document.documentElement).appendChild(div);
  }
  if (typeof sContainer !== 'undefined') {
    div = document.createElement('DIV');
    div.id = sContainer.substr(1);
    (document.body||document.documentElement).appendChild(div);
  }
  if (typeof isAdBlocker !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function isAdBlocker() {return false;}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof isAdFilter !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function isAdFilter() {return false;}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof gofirst !== 'undefined') {
    script = document.createElement('SCRIPT');
    script.textContent = 'function gofirst() {}';
    (document.body||document.documentElement).appendChild(script);
  }
  if (typeof sABMessage !== 'undefined') {
    var scripts = document.querySelectorAll('head > script:not([src])');
    for (let s of scripts) {
      if (s.textContent.indexOf(sABMessage) != -1) {
        var w1 = s.textContent.split('[');
        var maxLength = -1, maxLengthIndex = 0;
        for (let w of w1) {
          var i = w.lastIndexOf(']');
          if (maxLength < i) {
            maxLength = i;
            maxLengthIndex = w1.indexOf(w);
          }
        }
        if (maxLengthIndex > 0) {
          var w2 = w1[maxLengthIndex - 1].split(' ');
          var i = w2.lastIndexOf('function');
          script = document.createElement('SCRIPT');
          script.textContent = 'function ' + w2[i+1] + ' {addCookie("is_adblock", false, 365);}';
          (document.body||document.documentElement).appendChild(script);
        }
      }
    }
  }
}
