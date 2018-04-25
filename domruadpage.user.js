// ==UserScript==
// @name            Skip domru ad pages
// @version         0.1.20180125.1
// @description	    skips domru ad pages
// @match           *://info.ertelecom.ru/*
// @grant           none
// @copyright       2017, StSav012
// @author          StSav012
// @namespace       http://info.ertelecom.ru/
// @run-at          document-idle
// ==/UserScript==

"use strict";

var actualCode = '(' + function() {
	"use strict";
	var x = document.querySelectorAll("a.header__close.js-close, a.close, a.links_skip");
	if (x.length == 1) {
		window.location = x[0].href;
	}
	return;
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
