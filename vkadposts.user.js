// ==UserScript==
// @name            Remove ad posts @VK
// @version         0.3.20161002
// @description	    removes ad posts from feed and walls by keywords
// @match           *://*.vk.com/*
// @copyright       2016, StSav012
// @author          StSav012
// @namespace       vkap
// @run-at          document-end
// ==/UserScript==

var actualCode = '(' + function() {
	var keywords = [
		"РЕПОСТ", "делать репост", "делать \"репост\"", "дeлaйтe рeпoст", "делай репост", "репост этой записи", "REPOST", "оделиться записью",
		"лайки и репосты записи", "озыгрыш по репосту", "репоснет эту запись", "за репост даем", "закрепить у себя на стене",
		"ступите в группу", "ступите в нашу группу", "ступаем в группу", "ыть участником группы", "ступайте в группу",
		"Зайди поглазеть на эти посты",
		"Регистрация всего за",
		"бесплатно дадим", "БЕСПЛАТН", "Получить бесплатн", "ПОДАРОК", "СКИДКА", "Выбирай со скидкой",
		"ВЫИГРАЙ", "получи шанс выиграть", "КОНКУРС", "Мега-Акция", "АКЦИЯ",
		"Подпишись", "подпишитесь на", "Подписывайся на", "Быть подписчиком", "Быть подписанным", "быть подписанным",
		"Подписывайтесь - ", "Подписаться на группу",  "одписывайтесь на группу", "подписывайтесь на ", "Подписаться +",
		"ЗАКАЖИТЕ", "КУПИТЬ", "Заказать можно тут", 
		"Подарок можно забрать", "Вы сможете забрать ваш подарок", "Быстрая доставка по ",
		"бизнес-план", "бизнес-проект",
		"Читать продолжение в источнике", "Смотреть ответ в источнике", "олько для участников сообщества",
		"Читай продолжение здесь", "Подробнее здесь", "Ты должен видеть это",
		"Читать продолжение и смотреть ответы", "Узнать подробности в источнике",
		"/domavern", "/businessstrategy", "/virashopru", "/tri10oe", "/kinona5", "/watson_club", "/brutal_kitchen",
		"/vkchydaku", "/brandclubkiiik", "/web_highlights_kurs3",
		"Центр образовательных технологий Advance",
		"Начни играть тут", "Победители будут выбраны случайным образом", "победитель будет выбран случайным образом",
		"NovaPizza.ru", "skypeteach.ru", "advance-club.ru", "sdelano.ru", "edgarkulikov.ru", "citystarwear.com", "befree-school.ru", "bright-shopping.ru",
		"1media-buyer.ru", "itunes.apple.com%2Fapp%2Fapple-store%2Fid695634432", "sale-stop.ru", "offersboard.ru",
		"elementaree.ru", "start-mobile.net", ".hitnsale.ru", "вконкурс.рф", "printbar.ru",
		"app_title_"	// that's to avoid ads from games
	];
	var n;		// length of selected tags list
	var d;		// DOM item
	var i, j;	// just iterators
	function cleanAd()
	{
		var divs = document.querySelectorAll("div._post, div.feed_row, div.wall_item");
		n = divs.length;
		for(i = 0; i<n; ++i)						// we check it from the very beginning and to the end
		{
			d = divs[i];
			if(d.getAttribute('no_ad') != 'true')	// from https://greasyfork.org/ru/scripts/1978-vk-com-no-politic-feed/code
			{										// does it worth checking the post?
				if(d.innerHTML.length>0)
				{
					for(j=0; j<keywords.length; ++j)
					{
						if(d.innerHTML.includes(keywords[j]))
						{
							//	d.parentNode.style.backgroundColor = "red"; // ← for debugging purposes
							d.parentNode.removeChild(d);
							break;
						}
					}
					if(j>=keywords.length)
					{
						d.setAttribute('no_ad', 'true');
					}
				}
			}
		}
	}
	cleanAd();
	// see http://stackoverflow.com/a/14570614
	var observeDOM = (function(){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener;

		return function(obj, callback){
			if( MutationObserver ){
				// define a new observer
				var obs = new MutationObserver(function(mutations, observer){
					if(mutations[0].addedNodes.length || mutations[0].removedNodes.length)
						callback();
				});
				// have the observer observe foo for changes in children
				obs.observe(obj, { childList:true, subtree:true });
			}
			else if( eventListenerSupported ){
				obj.addEventListener('DOMNodeInserted', callback, false);
				obj.addEventListener('DOMNodeRemoved', callback, false);
			}
		};
	})();
	var containers = document.querySelectorAll('body');
	n = containers.length;
	for(i = 0; i<n; ++i)
	{
		d = containers[i];
		observeDOM(d, cleanAd);
	}
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.body||document.documentElement).appendChild(script);
