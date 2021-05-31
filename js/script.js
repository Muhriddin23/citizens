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
        'yoriqnoma': 'AFZALIKLARI',
        'funksiya': 'FUNKSIYALAR',
        'aloqalar': 'ALOQALAR',
        'yuklab olish': 'Yuklab olish',
        'headertext': 'Fuqarolar va ma\'sul shaxslar o\'rtasidagi ishonchli va soddalashtirilgan munosabatlarni qo\'llab-quvvatlovchi ushbu mobil ilova uy - joy kommunal muammolarini hal qilishga mo\'ljallangan. ',
        'xususiyat': 'Ilova afzalliklari',
        'interfeys': 'Interfeys',
        'interfeysinfo': 'Ilova o\'z foydalanuvchilarini zamonaviy dizayni va foydalanish qulayligi bilan xursand qiladi',
        'sozlamalar': 'Sozlamalar',
        'sozlamalarinfo': 'Ma\'lumotlaringizni tahrirlashingiz, shuningdek bildirishnoma sozlamalarini sozlashingiz mumkin',
        'xafsizlik': 'Xafsizlik',
        'xafsizlikinfo': 'Siz taqdim etgan barcha ma\'lumotlar maxfiylik sharoitida qayta ishlanadi va uni hechkim ko\'ra olmaydi',
        'geolakatsiya': 'Geolokatsiya',
        'geolakatsiyainfo': 'Muammo to\'g\'risidagi hisobotni topshirishda sizning joylashuvingizni qo\'lda ko\'rsatishingiz shart emas, ilova avtomatik ravishda sizning xabaringiz shaharning qaysi nuqtasidan kelishini aniqlaydi.',
        'qandayish': 'Citizens.uz qanday ishlaydi?',
        'ishgatushiring': 'Smartfoningizda Citizens.uz dasturini ishga tushiring',
        'ishgatushiringinfo': 'Muammoni samarali hal qilish endi sizning smartfoningizda. Citizens.uz bilan shaharni obodonlashtirishga o\'z hissangizni qo\'shing. Ilovaga kiritilgan yangi xabarlarni bilish uchun ilovani tez-tez yangilab turishni unutmang!',
        'zaregistyratsiya': 'Ro\'yxatdan o\'ting',
        'zaregistyratsiyainfo': 'Ro\'yxatdan o\'tish uchun telefon raqamingizni kiriting va SMS orqali yuborilgan kodni tasdiqlang va malumot uchun ism-sharfingizni kiritib o\'ting.',
        'xabar': 'Xabar yuboring',
        'xabarinfo': 'O\'zingiz duch kelgan muammoni suratga oling, uning turini tanlang va muammo haqida qisqacha izoh qoldiring.',
        'rezultat': 'Natijani oling',
        'rezultatinfo': 'Xabar yuborilganidan so\'ng, mas\'ul tashkilotlar tez orada sizning murajaatingizni ko\'rib chiqadilar va muammoni hal qilishga ko\'rilgan choralar to\'g\'risida xabar beradilar.',
        'insrtuksiya': 'Citizensni ichida nima bor',
        'zagruzit': 'Yuklab olish',
        'zagruzitinfo': 'Mobil dastur AppStore va PlayMarket platformalarida mavjud. Citizens.uzga hoziroq qo\'shiling.',
        'adres': '9 Ziyolilar ko\'chasi, Тошкент',
        'hamkorlarimiz': 'Bizning hamkorlarimiz',
        'huquqlar': '2021 Barcha huquqlar himoyalangan',
        'qulaylik': 'Qulaylik',
        'onlayn': 'Onlayn',
        'kontakt': 'Aloqa',
        'baholash': 'Baholash',
        'qulaylik1': 'Muammoning bosqichma-bosqich tavsifi',
        'qulaylikikki': 'Veb-saytda ilovadan foydalanish bo\'yicha ko\'rsatmalarni o\'qing.',
        'qulaylikuch': 'Citizens.uz ilovasida shaxsiy kabinet yaratish uchun ma\'lumotlaringizni(telefon raqamingiz va ism-sharfingizni) kiriting. Siz murojaatlaringizni osongina, onlayn tarzda hech qanday qog\'ozbozchiliklarsiz, uzoq navbatlarsiz yuborishingiz mumkin. Muammoni suratga oling va taqdim etilgan ro\'yxatdan uning turini tanlang va qisqacha tavsiflang.',
        'qulaylik4': 'Asosiy sahifada siz yuborgan xabarlarning holatini ko\'rishingiz mumkin. Siz yuborgan barcha xabarlaringizni nafaqat muammolar ro\'yxatida ko\'rishingiz, balki o\'z shahringizning xaritasida ham ko\'rishingiz mumkin.',
        'onlayn1': 'Doimiy aloqada',
        'onlayn2': 'Sizning murojaatlaringiz onlayn tarzda yuboriladi.',
        'onlayn3': 'Siz endi to\'g\'ridan-to\'g\'ri hokimiyat yoki boshqa mas\'ul shaxslar bilan bog\'lanishingiz shart emas . Siz murojatlaringizni Citizens.uz ilovasi orqali o\'zingizga qulay bo\'lgan vaqtda onlayn formatda yuborishingiz mumkin.',
        'onlayn4': 'Mutasaddi tashkilotlar tomonidan murojatlaringiz haqidagi ma\'lumotlar shaxsiy kabinetingizda berilib boriladi.',
        'kontakt1': 'Axborotlar almashinuvi',
        'kontakt2': 'Mas\'ul muassasalar uchun professional aloqa tizimi.',
        'kontakt3': 'Taqdim etilgan muammolar va ularni hal qilish bo\'yicha masalalar hokimyat va fuqarolar bilan hamkorlikda Citezens.uz ilovasi orqali hal qilinadi. Ushbu ilovada hokimlik hodimlari va ma\'sul tashkilot vakillari o\'rtasida qulay axborot tizimi o\'rnatilgan. Kelib tushgan murojaatlar mutasaddi tashkilotlar tomonidan korib chiqilib va uning natijalari fuqoralarga fotosurat ko\'rinishida taqdim etiladi.',
        'baholash1': 'Biz bilan aloqada qoling',
        'baholash2': 'Endi sizda natijani baholash uchun imkoniyat bor.',
        'baholash3': 'Ilova fuqarolar va hokimiyat o\'rtasida barqaror aloqalarni ta\'minlaydi va shuningdek aholini turmush sharoitini yaxshilaydi. Ilova foydalanuvchilariga natijalar taqdim etilgandan s\'ong, mas\'ul tashkilotlar xodimlarining ishlarini baholash imkoniyatiga ega bo\'ladilar.',
        'baholash4': 'Siz muammoingizni qay darajada bajarilganligini 5 ballik sistemada baholashingiz mumkin. Sizning fikr-mulohazalaringiz aholi turmush tarzini yaxshilashda va shaxarlarimizni obodonlashtirishda muhim ahamiyatga ega. ',
        'terms': 'Foydalanish shartlari',
        'privacy': 'Maxfiylik siyosati',
                                
    },
    'ru': {
        'asosiy': 'В НАЧАЛО',
        'xususiyatlari': 'ОСОБЕННОСТИ',
        'yoriqnoma': 'ИНСТРУКЦИИ',
        'funksiya': 'ФУНКЦИИ',
        'aloqalar': 'КОНТАКТЫ',
        'yuklab olish': 'Скачать',
        'headertext': 'Мобильное приложение, поддерживающее надежные и упрощенные взаимоотношения между гражданами и ответственными организациями в целях решения жилищно-коммунальных проблем.',
        'xususiyat': 'Особенности приложения',
        'interfeys':'Интерфейс',
        'interfeysinfo': 'Приложение радует своих пользователей стильным дизайном и удобством в использовании',
        'sozlamalar': 'Sozlamalar',
        'sozlamalarinfo': 'Вы можете редактировать свои данные, а так же регулировать настройки уведомлений',
        'xafsizlik': 'Безопасность',
        'xafsizlikinfo': 'Все данные предоставленные вами обрабатываются в рамках условий конфиденциальности',
        'geolakatsiya': 'Геолокация',
        'geolakatsiyainfo': 'При отправлении сообщения о проблеме вам ненужно вручную указывать свое местонахождение, приложение автоматически определяет с какой точки города поступает ваше сообщение.',
        'qandayish': 'Как работает Citizens?',
        'ishgatushiring': 'Запустите Citizens в своем устройстве',
        'ishgatushiringinfo': 'Эффективное решение проблем теперь в Вашем смартфоне. Внесите свой вклад в облагораживание города вместе с Citizens.Не забывайте чаще обновлять приложение, чтобы пользоваться самой совершенной версией!',
        'zaregistyratsiya': 'Зарегистрируйтесь',
        'zaregistyratsiyainfo': 'Для регистрации укажите свой номер телефона и введите код отправленный на Ваш номер СМС сообщением, а также укажите имя и фамилию.',
        'xabar': 'Отправьте сообщение',
        'xabarinfo': 'Сфотографируйте проблему с которой Вы столкнулись, выберите ее тип из списка и кратко опишите суть проблемы.',
        'rezultat': 'Получите результат',
        'rezultatinfo': 'После отправки сообщения в ближайшее время ответственные организации рассмотрят проблему и оповестят о принятых мерах.',
        'insrtuksiya': 'Что внутри Citizens',
        'zagruzit': 'Загрузить',
        'zagruzitinfo': 'Мобильное приложение доступно на платформах AppStore и PlayMarket. Присоединяйтесь к Citizens.uz прямо сейчас.',
        'adres': 'Ул. Зиёлилар 9, Ташкент',
        'hamkorlarimiz': 'Наши партнеры',
        'huquqlar': '2021 Все права защищены',
        'qulaylik': 'Легкость',
        'onlayn': 'Онлайн',
        'kontakt': 'Контакт',
        'baholash': 'Оценка',
        'qulaylik1': 'Пошаговое описание проблемы',
        'qulaylikikki': 'Ознакомьтесь с инструкцией использования приложения на сайте.',
        'qulaylikuch': 'Для того чтобы создать персональный кабинет в приложении Citizens.uz, укажите свои данные в виде номера телефона, имении и фамилии.Вам ненужно проходить многочиленные этапы регистрации и терять свое время в ожидании своей очереди.Достаточно сфотографировать  проблему, выбрать ее тип из предоставленного списка, и изложить кратко ее описание.',
        'qulaylik4': 'В главном меню отображаются состояния, отправленных вами сообщений. Вы можете просмотреть все отправленные вами сообщения не только в списке проблем, но и наглядно, на карте вашего города.',
        'onlayn1': 'Всегда на связи',
        'onlayn2': 'Ваши сообщения будут отправлены в онлайн режиме.',
        'onlayn3': 'Теперь вам ненужно напрямую связываться с хокимиятом или с другими ответственными учреждениями для сообщения о проблемах или о предложениях, способствующих облогораживанию  вашего города. Все ваши сообщения будут приняты  в онлайн формате с приложением Citizens.uz в любое удобное вам время.',
        'onlayn4': 'Процессы письменного сообщения в ответственные организации теперь в прошлом, все предложения и другие данные находятся в электронном виде и доступны в вашем персональном кабинете.',
        'kontakt1': 'Информационный обмен',
        'kontakt2': 'Система профессиональной связи для ответственных учреждений',
        'kontakt3': 'Взаимодействие с хокимиятом и гражданами по вопросам, связанными с отправленной проблемой, решается посредством приложения Citizens.uz. Кроме того, сотрудники хокимията оперативно связываются с представителями ответственных организаций и взаимодействуют также посредством информационной системы Citizens.uz, разработанный специально для пользования между хокимиятом и ответственными организациями в целях рассмотрения и решения  проблем граждан.После рассмотрения сообщения и принятых мер по его решению, граждан оповещают о результатах проведенных мероприятий в виде фотографии.',
        'baholash1': 'Обратная связь',
        'baholash2': 'Теперь есть возможность оценить результат ',
        'baholash3': 'Приложение обеспечивает устойчивые связи между гражданами и хокимиятом, в целях  облагораживания и улучшения условий жизни населения.Пользователям приложения предоставляется возможность оценить работу сотрудников ответственных организаций, после завершения  мероприятий по решению проблемы.',
        'baholash4': 'Проведенную работу сотрудников в решении Вашей проблемы, можно оценить по 5-ти бальной шкале.Отзывы от пользователей важны для улучшения качества последующих мероприятий в вашем городе.',
        'terms': 'Условие использование',
        'privacy': 'Политика конфиденциальности',
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

