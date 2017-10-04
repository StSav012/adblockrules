// ==UserScript==
// @name            Remove ad posts from VK.com
// @version         0.6.20171004.2
// @description	    removes ad posts from feed and walls by keywords
// @match           *://*.vk.com/*
// @grant           none
// @copyright       2016, StSav012
// @author          StSav012
// @namespace       vkap
// @run-at          document-idle
// ==/UserScript==

var actualCode = '(' + function() {
	var keywords = [
		"РЕПОСТ", "REPOST",
		"д(е|e)л(а|a)ть (|\")(р|p)(е|e)п(о|o)(с|c)т(|\")", "д(е|e)л(а|a)й(т|)(е|e|) (|\")(р|p)(е|e)п(о|o)(с|c)т(|\")", "делавшему (|\")(р|p)(е|e)п(о|o)(с|c)т(|\")",
		"(Р|р|P|p)(е|e)п(о|o)(с|c)т( этой| данной|) записи", "(П|п)оделиться(| этой) записью",
		"(р|p)(е|e)п(о|o)(с|c)тни этот пост", "делись этим сообщением",
		"(а|a)йк(и|)( и|,) (р|p)(е|e)п(о|o)(с|c)т(ы|)",
		"Забирай на стену", "забирайте себе на стену", "Сохрани себе на стену", "сохранить на стену", "сохраните себе этот пост",
		"(З|з)акрепить( эту запись| ее| её)( у себя|) на стене",
		"озыгрыш по репосту", "репоснет эту запись", "за репост даем", "бонус за репост",
		"ВСТУПАЙ(ТЕ|)", "ВСТУПИТЕ", "(В|в)ступ(и|ить|аем|ите|айте|ай) в( нашу| эту) (группу|сообщество)",
		"(В|в)ступай",
		"БЫТЬ ПОДПИСАННЫМ НА СООБЩЕСТВО", "(та|ы)ть( нашим|) (подписчиком|участником)",
		"ДОБАВЬ", "ДОБАВЛЯЙТЕ", "обавляйся в друзья", "обавляйтесь в друзья", "добавляйся ко мне в друзья",
		"Зайди поглазеть на эти посты", "Заходи на раздачу",
		"ОСТАВЬ ЗАЯВКУ", "Оставь заявку", "оставь заявку", "Оставьте заявку",
		"Регистрация всего за", "Регистрация пока бесплатна", "Успей зарегистрироваться",
		"ЗАПИШИСЬ НА ",
		"БЕСПЛАТН", "бесплатно дадим", "Получить бесплатн", "бесплатно откроем Вам",
		"качать бесплатно",
		"ПОДАРОК",
		"СКИДК(А|И|ОК|У|ОЙ|Е)", "Выбирай со скидкой", "с нереальными скидками", "дарим скидку", "Скидки на весь ассортимент",
		"(С|с)делать это со скидкой",
		"За репост скидка",
		"Заказ(атъ|ывайте|ывай) со скидкой",
		"ВЫИГРАЙ", "получи шанс выиграть", "Выигрaй",
		"КОНКУРС", "Внимание! Конкурс!",
		"АКЦИ(Я|И|Ю|ЕЙ)", "Мега-Акция", "Акция до конца", "#акция",
		"РОЗЫГРЫШ", "Ссылка на розыгрыш", "в сообществе проходит супер-розыгрыш", "(У|у)частвуй(те|) в (Р|р)озыгрыше",
		"(Р|р)озыгрыш только для подписчиков",
		"обедител(и|ь) буд(у|е)т выбран(ы|) случайным образом",
		"РАСПРОДАЖА", "Последняя распродажа топовых", "Ликвидация склада",
		"Успейте оставить заявку", "Успейте забронировать", "Спешите получить",
		"СКОРО ОТКРЫТИЕ",
		"Записывайтесь на бесплатное занятие",
		"ПОДПИШИСЬ", "ПОДПИСЫВАЙСЯ", "одпишись", "одпишитесь (на|-|\\+) ", "одписывайтесь (на|-|\\+) ", "одписывайся", "одписываемся!",
		"ыть подписчиком", "ыть подписанным", "одписался на", "одписаться", "Подпишись и ты",
		"одписаться на группу", "одписаться на канал можно здесь", "одписаться \\+", "\\+ Подписаться", "Приглашаем подписаться на",
		"одписывай на ", "забывайте подписываться на", "\">Подписывайтесь<\\/",
		"КУПИТЬ", "ЗАКАЖИТЕ", "Заказать можно тут",
		"Подарок можно забрать", "Вы сможете забрать ваш подарок", "Быстрая доставка",
		"бизнес-(план|проект)",
		"Читать продолжение ", "Читaйтe пoлнocтью здecь", "Смотреть ответ в источнике", "олько для участников сообщества",
		"Подробн(ее|ости)( акции|) (здесь|на странице)", "Ты должен видеть это", "Ты должен это видеть", "зна(ть|й|вайте) подробн(ее|ости)",
		"(мотрите|ереходите) по ссылке", "Условия акции можно найти здесь", "смотреть дальше", "больше подробностей внутри",
		"Узнай(|,)( как|)(|,) тут", // ← facepalm
		"Центр образовательных технологий Advance",
		"«Как развить свою память» или «Секреты эффективного обучения»",
		"Начни играть тут", "начни играть в", "Играй тут", "Качай игру",
		"NovaPizza.ru", "skypeteach.ru", "english4now.com", "advance-club.ru", "sdelano.ru", "edgarkulikov.ru", "citystarwear.com",
		"befree-school.ru", "bright-shopping.ru", ".sale-gooods.ru", "www.kopikot.ru", ".bebetter.guru", "www.in-build.ru",
		"1media-buyer.ru", "itunes.apple.com%2Fapp%2Fapple-store%2Fid695634432", "sale-stop.ru", "offersboard.ru", "artskills.ru",
		"elementaree.ru", "start-mobile.net", ".hitnsale.ru", "вконкурс.рф", "printbar.ru", "tracking.leaddealer.net", "envylab.ru",
		"job.beeline.ru",
		"newstockgeneration.space", "zarabotays.ru", "zarabotoki.ru", "zarabotokgames.ru", ".advertapp.ru"	// suspicious sites
		"class=\"wall_marked_as_ads\"",	// to avoid ads from groups
		"app_title_"	// that's to avoid ads from games
	];
	var urls = [
		"/domavern", "/businessstrategy", "/virashopru", "/tri10oe", "/kinona5", "/watson_club", "/brutal_kitchen",
		"/vkchydaku", "/brandclubkiiik", "/web_highlights_kurs", "/tatoo_sketch", "/artihard", "/kulinarka", "/skyeng",
		"/princapioff", "/illusthigh", "/chestnoeauto", "/otdamdarom"
	];
	var selectors = [
		"div.reply",
		"div.feed_row, div.wall_item, div.post_copy, div.post_fixed, div#page_wall_posts>div.page_block"
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
					for(j=0; j<keywords.length; ++j)
					{
						var pattern = new RegExp(keywords[j]);
						if(pattern.test(d.innerHTML))
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
