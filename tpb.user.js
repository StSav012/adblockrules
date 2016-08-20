// ==UserScript==
// @name			Get rid of the Pirate Bay pop-under
// @version			0.1
// @description		disables the Pirate Bay pop-under
// @include			*://*.thepiratebay.*
// @copyright		2016, StSav012
// @author			StSav012
// @namespace https://greasyfork.org/users/61331
// @run-at      document-end
// ==/UserScript==

var actualCode = "_wm={};";
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
