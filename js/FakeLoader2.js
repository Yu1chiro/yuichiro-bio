/******************************************************************** 
 jquery-fake-loader
 *Version:    2.0.0 - 2019
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
********************************************************************/
(function ($) {
    $.fakeLoader = function(options) {

        var settings = $.extend({
            targetClass:'fakeLoader',
            timeToHide:2000,               
            bgColor: '#040B12', 
            spinner:'spinner1'
        }, options);
        var spinner01 = '<div class="fl fl-spinner spinner1" style="display: flex; justify-content: center; align-items: center;"><img src="hutao1.png" alt="Logo" style="width: 20rem; height: 20rem; margin-top :1rem; animation: zoomInOut 1s ease-in-out infinite;"></div>';
        var spinner02 = '<div class="fl fl-spinner spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl fl-spinner spinner1" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: url(\'bgloader.jpg\') center/cover;"><img src="hutao1.png" alt="Logo" style="width: 20rem; height: 20rem; animation: zoomInOut 2s infinite;"></div>';
        var spinner05 = '<div class="fl fl-spinner spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl fl-spinner spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl fl-spinner spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 


        var el = $('body').find('.' + settings.targetClass);

        el.each(function() {
            var a = settings.spinner;
            
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }
        });

        el.css({
            'backgroundColor':settings.bgColor
        });

        setTimeout(function () {
            window.location.href = "hera.html";
            $(el).fadeOut();
        }, settings.timeToHide);
    }; 
}(jQuery));




