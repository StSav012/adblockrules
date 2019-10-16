// ==UserScript==
// @name            Instagram Unlocked
// @namespace       Instagram Unlocked
// @match           https://www.instagram.com/*
// @grant           none
// @run-at          document-idle
// @author          StSav012
// @description     watch Instagram feed without logging in
// @version         1
// @homepageURL     https://github.com/StSav012/adblockrules/blob/master/instunlocked.user.js
// @downloadURL     https://github.com/StSav012/adblockrules/raw/master/instunlocked.user.js
// ==/UserScript==

"use strict";

var actualCode = '(' + function() {
	"use strict";
	function removeDivs() {
		var divs = document.querySelectorAll('body > div[role="presentation"]');
        for (let div of divs) {
            div.parentNode.removeChild(div);
        }
	}
	removeDivs();
    
    function fixScroll() {
        document.body.style.overflow = 'initial';
    }
    fixScroll();
	// see https://stackoverflow.com/a/14570614 and https://stackoverflow.com/a/41425087/8554611
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
		eventListenerSupported = window.addEventListener;

    if (MutationObserver) {
        // define a new observer
        var obs = new MutationObserver(function(mutations) {
            for (let mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    removeDivs();
                }
                else if (mutation.type === 'attributes' && mutation.target.tagName === "BODY") {
                    fixScroll();
                }
            }
        });
        // have the observer observe foo for changes in children
        obs.observe(document.body, {childList: true, attributes: true});
    }
    else if (eventListenerSupported) {
        document.body.addEventListener('DOMNodeInserted', removeDivs, false);
        document.body.addEventListener('DOMAttrModified', fixScroll, false);
    }
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
