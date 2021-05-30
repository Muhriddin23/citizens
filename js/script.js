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
        'yoriqnoma': 'YO\'RIQNOMA',
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
        'ishgatushiring': 'Qurilmangizda Citizens.uz dasturini ishga tushiring',
        'ishgatushiringinfo': 'Muammoni samarali hal qilish endi sizning smartfoningizda. Fuqarolar bilan shaharni obodonlashtirishga o\'z hissangizni qo\'shing. Eng yaxshi versiyasi uchun ilovani tez-tez yangilab turishni unutmang!',
        'zaregistyratsiya': 'Ro\'yxatdan o\'ting',
        'zaregistyratsiyainfo': 'Ro\'yxatdan o\'tish uchun telefon raqamingizni kiriting va raqamingizga SMS orqali yuborilgan kodni kiriting, shuningdek ismingizni kiriting va familiyagizni',
        'xabar': 'Xabar yuboring',
        'xabarinfo': 'O\'zingiz duch kelgan muammoni suratga oling, ro\'yxatidan uning turini tanlang va muammoning mohiyatini qisqacha tavsiflang',
        'rezultat': 'Natijani oling',
        'rezultatinfo': 'Xabarni yuborilganidan so\'ng, mas\'ul tashkilotlar tez orada muammoni ko\'rib chiqadilar va ko\'rilgan choralar to\'g\'risida xabar berishadi',
        'insrtuksiya': 'Citizensni ichida nima bor',
        'zagruzit': 'Yuklab olish',
        'zagruzitinfo': 'Mobil dastur AppStore va PlayMarket platformalarida mavjud. Citizens.uzga hoziroq qo\'shiling.',
        'adres': '9 Ziyolilar ko\'chasi, Тошкент',
        'hamkorlarimiz': 'Bizning hamkorlaimiz.',
        'huquqlar': '2021 Barcha huquqlar himoyalangan',
        'qulaylik': 'Qulaylik',
        'onlayn': 'Onlayn',
        'kontakt': 'Kontakt',
        'baholash': 'Baholash',
        'qulaylik1': 'Muammoning bosqichma-bosqich tavsifi',
        'qulaylikikki': 'Veb-saytda ilovadan foydalanish bo\'yicha ko\'rsatmalarni o\'qing.',
        'qulaylikuch': 'Citizens.uz ilovasida shaxsiy kabinet yaratish uchun ma\'lumotlaringizni kiriting telefon raqamingizni, ismi va familiyasini ko\'rsating. Ko\'p etepdan o\'tishning hojati yo\'q ro\'yxatdan o\'tish bosqichlari va o\'z navbatingizni kutib vaqtni behuda sarflamaysiz. Muamoni suratga oling va taqdim etilgan ro\'yxatdan uning turini tanlang va qisqacha tavsiflang.',
        'qulaylik4': 'Asosiy menyuda siz yuborgan xabarlarning holati ko\'rsatiladi.Siz yuborgan barcha xabarlaringizni nafaqat muammolar ro\'yxatida ko\'rishingiz mumkin, balki o\'z shahringizni xaritasida korishingiz mumkin.',
        'onlayn1': 'Doim aloqada',
        'onlayn2': 'Sizning xabarlaringiz onlayn tarzda yuboriladi.',
        'onlayn3': 'Endi to\'g\'ridan-to\'g\'ri hokimiyat yoki boshqa mas\'ul shaxslar bilan bog\'lanishingiz shart emas . Sizning barcha xabarlaringiz Citizens.uz ilovasi bilan siz uchun qulay bo\'lgan har qanday vaqtda Onlayn formatda qabul qilinadi.',
        'onlayn4': 'Jarayonlarni mas\'ul tashkilotlarga yozish endi o\'tmishda qoldi, barcha takliflar va boshqa ma\'lumotlar elektron shaklda va sizning shaxsiy kabinetingizda mavjud.',
        'kontakt1': 'Axborot almashish',
        'kontakt2': 'Mas\'ul muassasalar uchun professional aloqa tizimi',
        'kontakt3': 'Taqdim etilgan muammo bilan bog\'liq masalalar bo\'yicha hokimiyat va fuqarolar bilan o\'zaro hamkorlik, Citizens.uz ilovasi orqali hal qilindi.Bundan tashqari, hokimlik xodimlari zudlik bilan vakillar bilan bog\'laning mas\'ul tashkilotlar va shuningdek, axborot tizimi orqali o\'zaro aloqada bo\'lishadi Citizens.uz, ko\'rib chiqish va qaror qabul qilish maqsadida hokimiyat va mas\'ul tashkilotlar o\'rtasida foydalanish uchun maxsus ishlab chiqilgan. Xabar va uni hal qilish bo\'yicha ko\'rilgan choralarni ko\'rib chiqqandan so\'ng, fuqarolar natijalarini etkazish fotosurat ko\'rinishidagi voqealar.',
        'baholash1': 'Qayta aloqa',
        'baholash2': 'Endi natijani baholash uchun imkoniyat bor',
        'baholash3': 'Ilova fuqarolar va hokimiyat o\'rtasida barqaror aloqalarni ta\'minlaydi aholini turmush sharoitini yaxshilash va yaxshilash.Ilova foydalanuvchilari  taqdim etilgan tugatgandan so\'ng, mas\'ul tashkilotlar xodimlarining ishlarini baholash imkoniyati muammoni hal qilish bo\'yicha choralar.',
        'baholash4': 'Sizning muammoingizni hal qilishda xodimlarning qilgan ishlarini 5 ball bilan baholash mumkin  o\'lchov Foydalanuvchilarning fikr- mulohazalari sizning kuzatuvlaringizni yaxshilash uchun muhimdir shahar.',
                               
                                
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
        'zagruzitinfo': 'Мобильное приложение доступно на платформах AppStore и PlayMarket. Присоединяйтесь к Citizens.uz прямо сейчас.',
        'adres': 'Ул. Зиёлилар 9, Ташкент',
        'hamkorlarimiz': 'Наши партнеры.',
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
        'onlayn3': 'Теперь Вам ненужно напрямую связываться с хокимиятом или с другими ответственными учреждениями для сообщения о проблемах или о предложениях, способствующих облогораживанию  вашего города.Все Ваши сообщения будут приняты  в онлайн формате с приложением Citizens.uz в любое удобное Вам время.',
        'onlayn4': 'Процессы письменного сообщения в ответственные организации теперь в прошлом, все предложения и другие данные находятся в электронном виде и доступны в Вашем персональном кабинете.',
        'kontakt1': 'Информационный обмен',
        'kontakt2': 'Система профессиональной связи для ответственных учреждений',
        'kontakt3': 'Взаимодействие с хокимиятом и гражданами по вопросам, связанными с отправленной проблемой, решается посредством приложения Citizens.uz.Кроме того, сотрудники хокимията оперативно связываются с представителями ответственных организаций и взаимодействуют также посредством информационной системы Citizens.uz, разработанный специально для пользования между хокимиятом и ответственными организациями в целях рассмотрения и решения  проблем граждан.После рассмотрения сообщения и принятых мер по его решению, граждан оповещают о результатах проведенных мероприятий в виде фотографии.',
        'baholash1': 'Обратная связь',
        'baholash2': 'Теперь есть возможность оценить результат ',
        'baholash3': 'Приложение обеспечивает устойчивые связи между гражданами и хокимиятом, в целях  облагораживания и улучшения условий жизни населения.Пользователям приложения предоставляется возможность оценить работу сотрудников ответственных организаций, после завершения  мероприятий по решению проблемы.',
        'baholash4': 'Проведенную работу сотрудников в решении Вашей проблемы, можно оценить по 5-ти бальной шкале.Отзывы от пользователей важны для улучшения качества последующих мероприятий в вашем городе.',
                                
                                
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

