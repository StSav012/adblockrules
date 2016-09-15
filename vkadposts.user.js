// ==UserScript==
// @name            Remove ad posts @VK
// @version         0.2-20160915
// @description	    removes ad posts from groups by keywords
// @match           *://*.vk.com/*
// @copyright       2016, StSav012
// @author          StSav012
// @namespace       vkap
// @run-at          document-end
// ==/UserScript==

var actualCode = '(' + function() {
	var keywords = [
		"РЕПОСТ", "делать репост", "дeлaйтe рeпoст", "делай репост", "репост этой записи",
		"ступите в группу",
		"Регистрация всего за",
		"бесплатно дадим", "БЕСПЛАТН", "Получить бесплатн", "ПОДАРОК",
		"ВЫИГРАЙ", "КОНКУРС", "Мега-Акция", "АКЦИЯ",
		"Подпишись", "подпишитесь на", "Подписывайся на", "Быть подписчиком", "Быть подписанным на", "Подписывайтесь - ",
		"ЗАКАЖИТЕ", "КУПИТЬ", "Заказать можно тут",
		"Подарок можно забрать",
		"бизнес-план", "бизнес-проект",
		"Читать продолжение в источнике", "Смотреть ответ в источнике", "олько для участников сообщества",
		"/domavern", "/businessstrategy", "/virashopru", "/tri10oe", "/kinona5", "/watson_club",
		"Центр образовательных технологий Advance",
		"NovaPizza.ru", "skypeteach.ru", "advance-club.ru", "sdelano.ru", "edgarkulikov.ru", "citystarwear.com", "befree-school.ru", "bright-shopping.ru",
		"1media-buyer.ru", "itunes.apple.com%2Fapp%2Fapple-store%2Fid695634432", "sale-stop.ru", "offersboard.ru",
		"elementaree.ru", "start-mobile.net", ".hitnsale.ru"
	];
	var n;
	function cleanAd()
	{
		var divs = document.querySelectorAll("div._post, div.feed_row");
		//		var divs = document.querySelectorAll("div.post_content");
		n = divs.length;
		var i, j;
		for(i = 0; i<n; ++i)						// we check it from the very beginning and to the end
		{
			d = divs[i];
			if(d.getAttribute('no_ad') != 'true')	// from https://greasyfork.org/ru/scripts/1978-vk-com-no-politic-feed/code
			{										// does it worth checking the post?
				for(j=0; j<keywords.length; ++j)
				{
					if(d.innerHTML.includes(keywords[j]))
					{
						//	d.parentNode.style.backgroundColor = "red"; // ← for debugging purposes
						d.parentNode.removeChild(d);
						break;
					}
					else
					{
						d.setAttribute('no_ad', 'true');
					}
				}
			}
		}
	}
	cleanAd();
	document.querySelector('div#page_body').addEventListener('DOMNodeInserted', cleanAd);
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
