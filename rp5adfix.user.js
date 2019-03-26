// ==UserScript==
// @name RP5 Ad Fix
// @namespace rp5 ad fix
// @match https://rp5.ru/*
// @match https://rp5.ua/*
// @grant none
// ==/UserScript==
$('body').append('<div id=' + sAdIdContainerBottom.substr(1) + '></div>');
