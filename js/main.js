$('.news-item__image').hover(() => {
    $('.news-item__image .pop-up').css({
        "visibility": "visible"
    });
}, () => {
    $('.news-item__image .pop-up').css({
        "visibility": "hidden"
    });
});