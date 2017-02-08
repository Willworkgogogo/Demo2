/**
 * jSlider 滑动进度条
 * Author  Willwang
 * 2017-02-04
 * */


;(function($){
    $.extend($.fn, {
        jSlider: function(setting){

        }
    })

    var ps = $.extend({
        renderTo: $(document.body),
        enable: true,
        initPosition: 'max',
        size: { barWidth: 200, sliderWidth: 5},
        barCssName: 'bar',
        completeCssName: 'completed',
        sliderCssName: 'slider',
        sliderHover: 'jslider-hover',
        onChanging: function(){},
        onChanged: function(){},
    }, setting);

    
})(jQuery)



