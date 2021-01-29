app.on('init', () => {

	let itemTabs = new Tabs($('.city-item'), $('.data-item'), 'active');

        owlCarouselFacade($('.city-list'), {
            dots: true,
            margin: 8,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 2

                },
                640: {
                    items: 3
                },
                1000: {
                    items: 4
                }, 
                1600: {
                    items: 5
                }
            },
            onTranslated: onChanged
           
        }, ['xs', 'sm'], $('.slider-prev'), $('.slider-next'));

    function onChanged(ev) {
        $('.city-item').removeClass('active');
        $('.owl-item.active').eq(0).find('.city-item').click();
    }

});
