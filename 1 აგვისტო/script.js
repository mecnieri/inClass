$(document).ready(function () {
    $('div').each(function (index, element) {
        let n = $(this)
        console.log($(this).text())
        // DRY // KISS // wyswyg
        // console.log($(this).attr('class'));
        // console.log($(this).css('background-color'));
    })
    // $('img').attr({
    //     title: "Front End Developer",
    //     style: 'border: 2px dotted black;'
    // });
    // $('img').each(function (index, element) {
    //     console.log($(this).attr('style'));
    // });

    //append()/appendTo()
    //prepend()/prependTo()
    //remove

    $('.class5').append(`<span> class5 Content </span>`)
    $('.class1').append(`<span> class1 Content </span>`)
    $('<span> class2 Content</span>').appendTo('.class2')
});