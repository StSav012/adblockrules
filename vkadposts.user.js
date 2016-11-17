// ==UserScript==
// @name            Remove ad posts @VK
// @version         0.5.20161117.2
// @description	    removes ad posts from feed and walls by keywords
// @match           *://*.vk.com/*
// @copyright       2016, StSav012
// @author          StSav012
// @namespace       vkap
// @run-at          document-idle
// ==/UserScript==

var actualCode = '(' + function() {
	var keywords = [
		"РЕПОСТ", "REPOST",
		"делать репост", "делать \"репост\"", "дeлaйтe рeпoст", "делай репост", "делавшему репост",
		"репост этой записи", "репост записи", "оделиться записью",
		"лайк и репост", "лайки и репосты", "Лайк, репост",
		"Забирай на стену", "забирайте себе на стену", "Сохрани себе на стену", "сохранить на стену",
		"закрепить у себя на стене",
		"озыгрыш по репосту", "репоснет эту запись", "за репост даем", "бонус за репост",
		"ступите в группу", "ступите в нашу группу", "ступаем в группу", "ступайте в группу", "Вступай",
		"ыть участником", "ыть подписчиком", "ыть нашим подписчиком",
		"Добавляйся в друзья",
		"Зайди поглазеть на эти посты", "Заходи на раздачу",
		"ОСТАВЬ ЗАЯВКУ", "Оставь заявку", "оставь заявку", "Оставьте заявку",
		"Регистрация всего за", "Регистрация пока бесплатна", "Успей зарегистрироваться",
		"ЗАПИШИСЬ НА ",
		"БЕСПЛАТН", "бесплатно дадим", "Получить бесплатн", "бесплатно откроем Вам",
		"ПОДАРОК",
		"СКИДКА", "СКИДКОЙ", "Выбирай со скидкой", "с нереальными скидками", "Заказатъ со скидкой",
		"ВЫИГРАЙ", "получи шанс выиграть",
		"КОНКУРС", "Внимание! Конкурс!",
		"АКЦИЯ", "Мега-Акция", "Акция до конца", "#акция",
		"РОЗЫГРЫШ", "Ссылка на розыгрыш", "в сообществе проходит супер-розыгрыш", "участвуйте в розыгрыше",
		"обедители будут выбраны случайным образом", "обедитель будет выбран случайным образом",
		"РАСПРОДАЖА", "Последняя распродажа топовых", "Ликвидация склада", "Спешите получить",
		"Записывайтесь на бесплатное занятие",
		"одпишись", "одпишитесь на", "одписывайтесь на ", "одписывайтесь - ", "одписывайся", "одписываемся!",
		"ыть подписчиком", "ыть подписанным", "одписался на", "одписаться",
		"одписаться на группу", "одписаться на канал можно здесь", "одписаться +", "+ Подписаться", "Приглашаем подписаться на",
		"КУПИТЬ", "ЗАКАЖИТЕ", "Заказать можно тут",
		"Подарок можно забрать", "Вы сможете забрать ваш подарок", "Быстрая доставка",
		"бизнес-план", "бизнес-проект",
		"Читать продолжение ", "Читaйтe пoлнocтью здecь", "Смотреть ответ в источнике", "олько для участников сообщества",
		"Подробнее здесь", "Ты должен видеть это", "Ты должен это видеть", "Узнать подробности в источнике",
		"ереходите по ссылке", "Условия акции можно найти здесь", "смотреть дальше",
		"Центр образовательных технологий Advance",
		"Начни играть тут", "начни играть в",
		"NovaPizza.ru", "skypeteach.ru", "english4now.com", "advance-club.ru", "sdelano.ru", "edgarkulikov.ru", "citystarwear.com",
		"befree-school.ru", "bright-shopping.ru", ".sale-gooods.ru", "www.kopikot.ru", ".bebetter.guru", "www.in-build.ru",
		"1media-buyer.ru", "itunes.apple.com%2Fapp%2Fapple-store%2Fid695634432", "sale-stop.ru", "offersboard.ru", "artskills.ru",
		"elementaree.ru", "start-mobile.net", ".hitnsale.ru", "вконкурс.рф", "printbar.ru", "tracking.leaddealer.net", "envylab.ru",
		"job.beeline.ru",
		"app_title_"	// that's to avoid ads from games
	];
	var urls = [
		"/domavern", "/businessstrategy", "/virashopru", "/tri10oe", "/kinona5", "/watson_club", "/brutal_kitchen",
		"/vkchydaku", "/brandclubkiiik", "/web_highlights_kurs", "/tatoo_sketch", "/artihard", "/kulinarka", "/skyeng",
		"/princapioff", "/illusthigh"
	];
	var selectors = [
		"div.reply",
		"div._post, div.feed_row, div.wall_item"
	];
	var divs;	// selected tags list
	var n;		// length of the list
	var d;		// a DOM item
	var h, i, j, k;	// just iterators
	function cleanAd()
	{
		for(h = 0; h<selectors.length; ++h)
		{
			divs = document.querySelectorAll(selectors[h]);
			n = divs.length;
			for(i = 0; i<n; ++i)				// we check it from the very beginning and to the end
			{
				d = divs[i];
				if(d.getAttribute('no_ad') != 'true')	// from https://greasyfork.org/ru/scripts/1978-vk-com-no-politic-feed/code
				{					// does it worth checking the post?
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
						for(k=0; (j>=keywords.length) && (k<urls.length); ++k)
						{
							if(!window.location.pathname.includes(urls[k]) && d.innerHTML.includes(urls[k]))
							{
								//	d.parentNode.style.backgroundColor = "red"; // ← for debugging purposes
								d.parentNode.removeChild(d);
								break;
							}
						}
						if((j>=keywords.length) && (k>=urls.length))
						{
							if(d.querySelector("span.wall_copy_more") === null)
								d.setAttribute('no_ad', 'true');
						}
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
