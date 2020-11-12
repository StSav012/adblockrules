// ==UserScript==
// @name            Google Search Spam Filter
// @name:ru         Фильтр спама в результатах поиска Google
// @description     removes blacklisted search results
// @description:ru  скрывает ненужные результаты в выдаче
// @namespace       https://www.google.com/search
// @include         /^https?://(www\.)?google\.\w+//
// @copyright       2018, StSav012
// @author          StSav012
// @grant           none
// @version         0.1.20201027.1
// @run-at          document-end
// ==/UserScript==

/* jshint esversion: 6 */
/* jshint browser: true */

"use strict";

// blacklisted URLs
var spamURLs = ['http://qaru.site/', 'https://stackoverrun.com/', 'https://manjaro.ru/', 'https://qastack.ru/',
                'https://coderoad.ru/', 'https://overcoder.net/', 'https://www.coder.work/', 'https://helpexe.ru'];

for (let u of spamURLs) {
  var junk = document.querySelectorAll('div a[href^="' + u + '"]:not([class])');
  for (let j of junk) {
    var p = j.parentNode;
    while (p.tagName == 'DIV' && !p.classList.contains('g')) {
      p = p.parentNode;
    }
    // console.log('found', p);
    p.parentNode.removeChild(p);
  }
}
