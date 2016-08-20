// ==UserScript==
// @name			Remove ad posts @VK
// @version			0.1
// @description		removes ad posts from groups by keywords
// @match			*://*.vk.com/*
// @copyright		2016, StSav012
// @author			StSav012
// @namespace		vkap
// ==/UserScript==

var actualCode = '(' + function() {
	var keywords = [
		"РЕПОСТ", "делать репост", "делать репост", "дeлaйтe рeпoст", "делай репост", "репост этой записи",
		"ступите в группу",
		"бесплатно дадим", "БЕСПЛАТН", "Получить бесплатн",
		"ВЫИГРАЙ", "КОНКУРС", "Мега-Акция",
		"Подпишись на ", "Подписывайся на", "Быть подписчиком", "Быть подписанным на",
		"ЗАКАЖИТЕ", "КУПИТЬ",
		"Подарок можно забрать",
		"бизнес-план", "бизнес-проект",
		"Читать продолжение в источнике",
		"/domavern", "/businessstrategy", "/virashopru", "/tri10oe", "/kinona5", "/watson_club",
		"Центр образовательных технологий Advance",
		"NovaPizza.ru", "skypeteach.ru", "advance-club.ru", "sdelano.ru", "edgarkulikov.ru", "citystarwear.com", "befree-school.ru", "bright-shopping.ru",
		"1media-buyer.ru", "itunes.apple.com%2Fapp%2Fapple-store%2Fid695634432", "sale-stop.ru", "offersboard.ru"
	];
	var n, o=0;
	function cleanAd()
	{
		var divs = document.querySelectorAll("div._post, div.feed_row");
		//		var divs = document.querySelectorAll("div.post_content");
		n = divs.length;
		var i, j;
		if(o<n)											// divs have been added
		{
			for(i = 0; i<n-o; ++i)						// we don't know whether a new divs were added at the end or at the beginning
			{											// here we look at the beginning
				d = divs[i];
				for(j=0; j<keywords.length; ++j)
				{
					if(d.innerHTML.includes(keywords[j]))
					{
						d.parentNode.removeChild(d);
						break;
					}
				}
			}
			for(i = (o>=n-o)?o:(n-o); i<n; ++i)			// we don't know whether a new divs were added at the end or at the beginning
			{											// and here we look at the tail or whatever has left
				d = divs[i];
				for(j=0; j<keywords.length; ++j)
				{
					if(d.innerHTML.includes(keywords[j]))
					{
						d.parentNode.removeChild(d);
						break;
					}
				}
			}
		}
		else if(o>n)
		{
			for(i = 0; i<n; ++i)						// we assume the dom tree has completely changed, so we check it from the very beginning and to the end
			{
				d = divs[i];
				for(j=0; j<keywords.length; ++j)
				{
					if(d.innerHTML.includes(keywords[j]))
					{
						//					d.parentNode.style.backgroundColor = "red";
						d.parentNode.removeChild(d);
						break;
					}
				}
			}
		}
		o = n;
	}
	cleanAd();
	document.querySelector('div#page_body').addEventListener('DOMNodeInserted', cleanAd);
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
