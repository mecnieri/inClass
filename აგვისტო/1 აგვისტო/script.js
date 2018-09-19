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

    // $('.class5').append(`<span> class5 Content </span>`)
    // $('.class1').append(`<span> class1 Content </span>`)
    // $('<span> class2 Content</span>').appendTo('.class2')

    // $('div').append(`<strong> Multiple Append </strong>`)
    // $('.class3').prepend(`<strong> Prepend Example </strong>`)
    // $(`<strong> Multiple Prepend Example </strong>`).prependTo('div')


    // $('#header').wrap(`<header class="header__block" />`)
    // $('.class2').hide()
    // $('.class2, .class4').remove()

    // $('div').css('color', 'white')
    // $('div').css({
    //     'color': 'white',
    //     'fontWeight': 'bold',
    //     'fontSize': '20px'
    // })


    //     addClass()
    //     hasClass()
    //     removeClass()
    //     toggleClass()

    // let headerH1 = $('h1');
    // $('div, h1').addClass('newClass')
    // if (headerH1.hasClass('newClass')) {
    //     console.log("H1 has a newClass");
    //     headerH1.removeClass("newClass");
    // }



    // Jquery event shortCuts 
    /*


    click()
    blur()
    focus()
    mouseover()

    */

    // $('#header').click(function (e) {
    //     console.log(e);
    //     $('#small__header').click()
    // })

    // $('#small__header').click(function (e) {
    //     console.log("small header clicked from header");
    // })

    // $('div').on('click mouseleave mouseenter', function () {
    //     console.log('header was clicked');
    //     $(this).toggleClass('red')
    // })


    // $('div').on({
    //     mouseenter: 
    //    ,
    // })

    // $('div').hover(
    //     function () {
    //         $(this).addClass("red")
    //     },
    //     function () {
    //         $(this).removeClass("red")
    //     });

    // web storage

    // localStorage
    // sessionStorage

    let storage = window.localStorage;

    $('#saveBtn').click(function () {
        let name = $('#name').val();
        storage.setItem('userName', name += name)
        // console.log(storage.key(0));
        // console.log(storage.getItem(userName));
    })


});