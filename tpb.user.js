// ==UserScript==
// @name			Get rid of the Pirate Bay pop-under
// @version			0.1
// @description		disables the Pirate Bay pop-under
// @match			*://*.thepiratebay.*/*
// @copyright		2016, StSav012
// @author			StSav012
// ==/UserScript==

var actualCode = "_wm={};";
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
