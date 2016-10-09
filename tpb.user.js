// ==UserScript==
// @name			  Get rid of the Pirate Bay pop-under
// @version			0.2
// @description	disables the Pirate Bay pop-under
// @match *://*.123bay.pw
// @match *://*.ahoy.one
// @match *://*.fastpiratebay.co.uk
// @match *://*.gameofbay.org
// @match *://*.ikwilthepiratebay.org
// @match *://*.kuiken.co
// @match *://*.pbp.rocks
// @match *://*.pirate.trade
// @match *://*.piratebay.click
// @match *://*.piratebay.red
// @match *://*.piratebayblocked.com
// @match *://*.piratebaymirror.eu
// @match *://*.piratebayproxy.tf
// @match *://*.piratebays.co
// @match *://*.piratebays.co.uk
// @match *://*.pirateportal.xyz
// @match *://*.pirateproxy.click
// @match *://*.pirateproxy.club
// @match *://*.pirateproxy.online
// @match *://*.pirateproxy.red
// @match *://*.pirateproxy.tf
// @match *://*.pirateproxy.wf
// @match *://*.pirateproxy.yt
// @match *://*.piratesbay.pe
// @match *://*.thebay.tv
// @match *://*.thehiddenbay.xyz
// @match *://*.thepirate.zone
// @match *://*.thepiratebay-proxy.com
// @match *://*.thepiratebay.org
// @match *://*.thepiratebay.run
// @match *://*.thepiratebay.tech
// @match *://*.thepiratebay.uk.net
// @match *://*.thepiratesbay.pw
// @match *://*.thepirateshore.eu
// @match *://*.tpb.dashitz.com
// @match *://*.tpb.patatje.eu
// @match *://*.tpb.portalimg.com
// @match *://*.tpb.proxyduck.co
// @match *://*.tpbmirror.us
// @match *://*.tpbunblocked.org
// @match *://*.ukpirate.click
// @match *://*.ukpirate.org
// @match *://*.ukpirateproxy.xyz
// @match *://*.unblockedbay.info
// @match *://*.urbanproxy.eu
// @match *://*.vicetorrent.com
// @copyright		2016, StSav012
// @author			StSav012
// @namespace   https://greasyfork.org/users/61331
// ==/UserScript==

var actualCode = "_wm={}; window.adk_pdisp={};";
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
