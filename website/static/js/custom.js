/*var count ='1';var pages;var catflag='1';$(window).ready(function(){removeStyle();$('.navicon').click(function(){$(this).toggleClass('on');$('.navigation').slideToggle()});var y;var x;var xlight;var xh;var xy;if (document.body && document.body.offsetWidth > 767){$('#section0,#section1').mousemove(function(e){
			 y = e.pageY * 1 / 70;
			 x = e.pageX * 1 / 95;
			 xlight = e.pageX * 2 / 50;
			 xh = (e.pageX * 1 / 70) - 70; 
			 xy = (e.pageY * 1 / 70) - 40;$('div.lights img').css({'top': y - 7}); $('div.lights img').css({'left': xlight}); $('div.table img').css({'bottom': y - 10});$('div.table img').css({'left': x + 20});$('div.homepage').css({'background-position': xh+'px '+xy+'px'});});$('.contactpage-main').mousemove(function(e){
			xh = (e.pageX * 1 / 70) - 70; 
			 xy = (e.pageY * 1 / 70) - 40;
			$('.contactpage-main').css({'background-position': xh+'px '+xy+'px'});
			y = e.pageY * 1 / 70;
			 x = e.pageX * 1 / 95;
			$('div.table img').css({'top': y - 10});$('div.table img').css({'left': x + 20});})}else{}$('.spoonlink').click(function(){catflag = "1";$('div.loader').fadeIn();$('.product-detail').hide();$('.products-left a.spoonlink').removeClass('active');$(this).addClass('active');$('.product-list.list'+count).slideUp();count = $(this).attr('rel');$('.product-list.list'+count).slideDown();$('.product-list.list'+count).find('li').removeClass('active');$('.product-list.list'+count).find('li:first-child').addClass('active');openContents();});$('.product-list li a').click(function(){$('div.loader').fadeIn();$('.product-detail').hide();$(this).parent('li').parent('ul').find('li').removeClass('active');$(this).parent('li').addClass('active');pages  = $(this).attr('rel');catflag ="2";openContents()});function arorwAnim(){$('.down-links li a').animate({top:25},function(){$('.down-links li a').animate({top:15},arorwAnim());})}arorwAnim();$('.export').click(function(){$('.export-contents').addClass('active')});$('.exportClose').click(function(){$('.export-contents').removeClass('active')});function getUrlVars(){var vars = {};var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){vars[key] = value;});return vars;}musti: var first = getUrlVars()["id"];var second = getUrlVars()["page"]; var accountSlideOpen = getUrlVars()['accountSlideOpen'];var namePass;if(accountSlideOpen == 'BasicSpices'){count='2';openCategory();$('.spoon-one').addClass('active');$('.list2').slideDown();}else if(accountSlideOpen == 'BlendedSpices'){count='1';openCategory();$('.spoon-two').addClass('active');$('.list1').slideDown();}else if(accountSlideOpen == 'InstantMixs'){count='3';openCategory();$('.spoon-three').addClass('active');$('.list3').slideDown();}else{}function openCategory(){$('.spoonlink').removeClass('active');$('.product-list').hide();openContents()}$('.bowl a').click(function(){accountSlideOpen = $(this).attr('rel');window.location = 'products.html?accountSlideOpen=' + accountSlideOpen;})});var productTimer;var loaderTimer;function openContents(){clearTimeout(productTimer);clearTimeout(loaderTimer);if(catflag == "1"){pages  = $('.product-list.list'+count).find('li:first-child a').attr('rel');catflag = "2";}$("#display").load(pages, function(responseTxt, statusTxt, xhr){if(statusTxt == "success"){productTimer = setTimeout(function(){$('.product-detail').fadeIn("slow");setTimeout(function(){$(".divexample1").niceScroll();goToByScroll('productsDetail');}, 500)}, 2500);loaderTimer = setTimeout(function(){$('div.loader').fadeOut("fast");},2000)}if(statusTxt == "error"){$('.product-detail').fadeIn();$('.product-detail').text("Error: " + xhr.status + ": " + xhr.statusText);}})}$(window).load(function(){removeStyle();});$(window).resize(function(){removeStyle()});function removeStyle(){var win_height = $(window).height();var win_width = $(window).width();$('.section,.home-contents,.smoke-sub,.video-sub').css({'height':win_height});$('.section,.home-contents,.smoke-sub,.video-sub').css({'width':win_width});$('.innerpage-main').css({'min-height':win_height});$('.productpage-main').css({'width':win_width});$('.productpage-main').css({'height':win_height});$('.export-div').css({'width':win_width});$('.export-div').css({'height':win_height});$('.homepage').css({'height':win_height});if(document.body && document.body.offsetWidth < 768){minHeight = $(window).height();$('.section').removeAttr('style');				$('.fp-tableCell,.home-contents').removeAttr('style');$('.section-div,.home-contents').css({'min-height':minHeight});$('.fp-tableCell,.home-contents').css({'width':win_width});}if($(window).width() > 899){}else{}}function goToByScroll(id){$('html,body').animate({scrollTop: $("#"+id).offset().top-60},2000)}function highdpi_init(){$(".replace-2x").each(function (){if ($(this).css("font-size") == "1px"){var src = $(this).attr("src");$(this).attr("src", src.replace(/(@2x)*.png/i, "@2x.png").replace(/(@2x)*.jpg/i, "@2x.jpg"))}})}jQuery(document).ready(function(){highdpi_init()});*/

var count = '1';
var pages;
var catflag = '1';
$(window).ready(function() {
    removeStyle();
    $('.navicon').click(function() {
        $(this).toggleClass('on');
        $('.navigation').slideToggle()
    });
    var y;
    var x;
    var xlight;
    var xh;
    var xy;
    if (document.body && document.body.offsetWidth > 767) {
        $('#section0,#section1').mousemove(function(e) {
            y = e.pageY * 1 / 70;
            x = e.pageX * 1 / 95;
            xlight = e.pageX * 2 / 50;
            xh = (e.pageX * 1 / 70) - 70;
            xy = (e.pageY * 1 / 70) - 40;
            $('div.lights img').css({
                'top': y - 7
            });
            $('div.lights img').css({
                'left': xlight
            });
            $('div.table img').css({
                'bottom': y - 10
            });
            $('div.table img').css({
                'left': x + 20
            });
            $('div.homepage').css({
                'background-position': xh + 'px ' + xy + 'px'
            });
        });
        $('.contactpage-main').mousemove(function(e) {
            xh = (e.pageX * 1 / 70) - 70;
            xy = (e.pageY * 1 / 70) - 40;
            $('.contactpage-main').css({
                'background-position': xh + 'px ' + xy + 'px'
            });
            y = e.pageY * 1 / 70;
            x = e.pageX * 1 / 95;
            $('div.table img').css({
                'top': y - 10
            });
            $('div.table img').css({
                'left': x + 20
            });
        })
    } else {}
    $('.spoonlink').click(function() {
        catflag = "1";
        $('div.loader').fadeIn();
        $('.product-detail').hide();
        $('.products-left a.spoonlink').removeClass('active');
        $(this).addClass('active');
        $('.product-list.list' + count).slideUp();
        count = $(this).attr('rel');
        $('.product-list.list' + count).slideDown();
        $('.product-list.list' + count).find('li').removeClass('active');
        $('.product-list.list' + count).find('li:first-child').addClass('active');
        openContents();
    });
    $('.product-list li a').click(function() {
        $('div.loader').fadeIn();
        $('.product-detail').hide();
        $(this).parent('li').parent('ul').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        pages = $(this).attr('rel');
        catflag = "2";
        openContents()
    });

    function arorwAnim() {
        $('.down-links li a').animate({
            top: 25
        }, function() {
            $('.down-links li a').animate({
                top: 15
            }, arorwAnim());
        })
    }
    arorwAnim();
    $('.export').click(function() {
        $('.export-contents').addClass('active')
    });
    $('.exportClose').click(function() {
        $('.export-contents').removeClass('active')
    });
	$('.export-two').click(function() {
        $('.export-contents-two').addClass('active')
    });
    $('.exportClose').click(function() {
        $('.export-contents-two').removeClass('active')
    });

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    musti: var first = getUrlVars()["id"];
    var second = getUrlVars()["page"];
    var accountSlideOpen = getUrlVars()['accountSlideOpen'];
    var namePass;
    if (accountSlideOpen == 'PremiumSpices') {
        count = '2';
        openCategory();
        $('.spoon-two').addClass('active');
        $('.list2').slideDown();
    } else if (accountSlideOpen == 'BlendedSpices') {
        count = '1';
        openCategory();
        $('.spoon-one').addClass('active');
        $('.list1').slideDown();
    } else if (accountSlideOpen == 'InstantMixs') {
        count = '3';
        openCategory();
        $('.spoon-three').addClass('active');
        $('.list3').slideDown();
		
    }  else if (accountSlideOpen == 'GroundSpices') {
        count = '4';
        openCategory();
        $('.spoon-four').addClass('active');
        $('.list4').slideDown();
    } else {}

    function openCategory() {
        $('.spoonlink').removeClass('active');
        $('.product-list').hide();
        openContents()
    }
    $('.bowl a').click(function() {
        accountSlideOpen = $(this).attr('rel');
        window.location = 'products.html?accountSlideOpen=' + accountSlideOpen;
    })
});
var productTimer;
var loaderTimer;

function openContents() {
    clearTimeout(productTimer);
    clearTimeout(loaderTimer);
    if (catflag == "1") {
        pages = $('.product-list.list' + count).find('li:first-child a').attr('rel');
        catflag = "2";
    }
    $("#display").load(pages, function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            productTimer = setTimeout(function() {
                $('.product-detail').fadeIn("slow");
                setTimeout(function() {
                    $(".divexample1").niceScroll();
                    goToByScroll('productsDetail');
                }, 500)
            }, 2500);
            loaderTimer = setTimeout(function() {
                $('div.loader').fadeOut("fast");
            }, 2000)
        }
        if (statusTxt == "error") {
            $('.product-detail').fadeIn();
            $('.product-detail').text("Error: " + xhr.status + ": " + xhr.statusText);
        }
    })
}
$(window).load(function() {
    removeStyle();
});
$(window).resize(function() {
    removeStyle()
});

function removeStyle() {
    var win_height = $(window).height();
    var win_width = $(window).width();
    $('.section,.home-contents,.smoke-sub,.video-sub').css({
        'height': win_height
    });
    $('.section,.home-contents,.smoke-sub,.video-sub').css({
        'width': win_width
    });
    $('.innerpage-main').css({
        'min-height': win_height
    });
    $('.productpage-main').css({
        'width': win_width
    });
    $('.productpage-main').css({
        'height': win_height
    });
    $('.export-div').css({
        'width': win_width
    });
    $('.export-div').css({
        'height': win_height
    });
    $('.homepage').css({
        'height': win_height
    });
    if (document.body && document.body.offsetWidth < 768) {
        minHeight = $(window).height();
        $('.section').removeAttr('style');
        $('.fp-tableCell,.home-contents').removeAttr('style');
        $('.section-div,.home-contents').css({
            'min-height': minHeight
        });
        $('.fp-tableCell,.home-contents').css({
            'width': win_width
        });
    }
    if ($(window).width() > 899) {} else {}
}

function goToByScroll(id) {
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 60
    }, 2000)
}

function highdpi_init() {
    $(".replace-2x").each(function() {
        if ($(this).css("font-size") == "1px") {
            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/(@2x)*.png/i, "@2x.png").replace(/(@2x)*.jpg/i, "@2x.jpg"))
        }
    })
}
jQuery(document).ready(function() {
    highdpi_init()
});// JavaScript Document