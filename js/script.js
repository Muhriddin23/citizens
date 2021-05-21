/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

}); /* End Fn */

var arrLang = {
    'uz': {
        'asosiy': 'BOSH SAHIFA',
        'xususiyatlari': 'XUSUSIYATLARI',
        'yoriqnoma': 'YORIQNOMA',
        'funksiya': 'FUNKSIYALAR',
        'aloqalar': 'ALOQALAR',
        'yuklab olish': 'Yuklab olish',
        'headertext': 'Fuqarolar va masul shaxslar o\'rtasidagi ishonchli va soddalashtirilgan munosabatlarni qollab-quvvatlovchi mobil ilova uy - joy kommunal muammolarini hal qilish maqsadida tashkilotlar. ',
        'xususiyat': 'Ilova xususiyatlari',
        'interfeys': 'Interfeys',
        'interfeysinfo': 'Ilova o\'z foydalanuvchilarini zamonaviy dizayni va foydalanish qulayligi bilan xursand qiladi',
        'sozlamalar': 'Sozlamalar',
        'sozlamalarinfo': 'Ma\'lumotlaringizni tahrirlashingiz, shuningdek bildirishnoma sozlamalarini sozlashingiz mumkin',
        'xafsizlik': 'Xafsizlik',
        'xafsizlikinfo': 'Siz taqdim etgan barcha ma\'lumotlar maxfiylik sharoitida qayta ishlanadi va uni hechkim ko\'ra olmaydi',
        'geolakatsiya': 'Geolokatsiya',
        'geolakatsiyainfo': 'Muammo to\'g\'risidagi hisobotni topshirishda sizning joylashuvingizni qo\'lda ko\'rsatishingiz shart emas. Ilova avtomatik ravishda sizning xabaringiz shaharning qaysi nuqtasidan kelishini aniqlaydi.',
        'qandayish': 'Citizens.uz qanday ishlaydi?',
        'ishgatushiring': 'Qurilmangizda Citizens dasturini ishga tushiring',
        'ishgatushiringinfo': 'Muammoni samarali hal qilish endi sizning smartfoningizda. Fuqarolar bilan shaharni obodonlashtirishga o\'z hissangizni qo\'shing. Eng yaxshi versiyasi uchun ilovani tez-tez yangilab turishni unutmang!',
        'zaregistyratsiya': 'Ro\'yxatdan o\'ting',
        'zaregistyratsiyainfo': 'Ro\'yxatdan o\'tish uchun telefon raqamingizni kiriting va raqamingizga SMS orqali yuborilgan kodni kiriting, shuningdek ismingizni kiriting va familiyagizni',
        'xabar': 'Xabar yuboring',
        'xabarinfo': 'O\'zingiz duch kelgan muammoni suratga oling, ro\'yxatidan uning turini tanlang va muammoning mohiyatini qisqacha tavsiflang',
        'rezultat': 'Natijani oling',
        'rezultatinfo': 'Xabarni yuborilganidan so\'ng, mas\'ul tashkilotlar tez orada muammoni ko\'rib chiqadilar va ko\'rilgan choralar to\'g\'risida xabar berishadi',
        'insrtuksiya': 'Citizensni ichida nima bor',
        'zagruzit': 'Yuklab olish',
        'zagruzitinfo': 'Mobil dastur AppStore va PlayMarket platformalarida mavjud. Citizensga hoziroq qo\'shiling.',
        'adres': '9 Ziyolilar ko\'chasi, Тошкент',
        'hamkorlarimiz': 'Bizning hamkorlaimiz.',
        'huquqlar': '2021 Barcha huquqlar himoyalangan',
    },
    'ru': {
        'asosiy': 'В НАЧАЛО',
        'xususiyatlari': 'ОСОБЕННОСТИ',
        'yoriqnoma': 'ИНСТРУКЦИИ',
        'funksiya': 'ФУНКЦИИ',
        'aloqalar': 'КОНТАКТЫ',
        'yuklab olish': 'Скачать',
        'headertext': 'Мобильное приложение поддерживающее надежные и упрощенные взаимоотношения между гражданами и ответственными организациями в целях решения жилищно- коммунальных проблем.',
        'xususiyat': 'Особенности приложения',
        'interfeys':'Интерфейс',
        'interfeysinfo': 'Приложение радует своих пользователей стильным дизайном и удобством в использовании',
        'sozlamalar': 'Sozlamalar',
        'sozlamalarinfo': 'Вы можете редактировать свои данные, а так же регулировать настройки уведомлений',
        'xafsizlik': 'Безопасность',
        'xafsizlikinfo': 'Все данные предоставленные вами обрабатываются в рамках условий конфиденциальности',
        'geolakatsiya': 'Геолокация',
        'geolakatsiyainfo': 'При отправлении сообщения о проблеме вам ненужно вручную указывать свое местонахождение. Приложение автоматически определяет с какой точки города поступает ваше сообщение.',
        'qandayish': 'Как работает Citizens?',
        'ishgatushiring': 'Запустите Citizens в своем устройстве',
        'ishgatushiringinfo': 'Эффективное решение проблем теперь в Вашем смартфоне. Внесите свой вклад в облагораживание города вместе с Citizens.Не забывайте чаще обновлять приложение, чтобы пользоваться самой совершенной версией!',
        'zaregistyratsiya': 'Зарегистрируйтесь',
        'zaregistyratsiyainfo': 'Для регистрации укажите свой номер телефона и введите код отправленный на Ваш номер СМС сообщением, а также укажите имя и фамилию',
        'xabar': 'Отправьте сообщение',
        'xabarinfo': 'Сфотографируйте проблему с которой Вы столкнулись, выберите ее тип из списка и кратко опишите суть проблемы',
        'rezultat': 'Получите результат',
        'rezultatinfo': 'После отправки сообщения в ближайшее время ответственные организации рассмотрят проблему и оповестят о принятых мерах',
        'insrtuksiya': 'Что внутри Citizens',
        'zagruzit': 'Загрузить',
        'zagruzitinfo': 'Мобильное приложение доступно на платформах AppStore и PlayMarket. Присоединяйтесь к Citizens прямо сейчас.',
        'adres': 'Ул. Зиёлилар 9, Ташкент',
        'hamkorlarimiz': 'Наши партнеры.',
        'huquqlar': '2021 Все права защищены'
    }
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

