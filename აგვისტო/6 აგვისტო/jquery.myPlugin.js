// BAD 
/*
$.fn.myPlugin = function () {
    // logic
    console.log("MyPlugin111");
}
*/


/* GOOD
(
    function ($) {
        $.fn.myPlugin = function () {
            // logic
            console.log("MyPlugin111");
        }
    }
)(jQuery)
*/


// (function ($) {
//     $.extend($.fn, {

//         myPlugin() {
//             console.log("MyPlugin 2nd way");
//         },
//         myPlugin2() {
//             console.log("hello plugin2");
//         }

//     })
// }
// )(jQuery)



(function ($) {
    $.fn.styleElement = function (options) {
        let config = $.extend({
            text: 'Style Element Default Text',
            color: 'white',
            fontStyle: null,
            fontSize: '16px',
            backgroundColor: 'purple',
            padding: '7px'
        }, options)

         return this.each(function () {
            $(this).text(config.text)
            if (config.color){
                $(this).css('color', config.color)
            }
            if (config.fontStyle){
                $(this).css('fontStyle', config.fontStyle)
            }
            if (config.fontSize){
                $(this).css('fontSize', config.fontSize)
            }
            if (config.backgroundColor){
                $(this).css('backgroundColor', config.backgroundColor)
            }
            if (config.padding){
                $(this).css('padding', config.padding)
            }
         })
    }
}
)(jQuery)



