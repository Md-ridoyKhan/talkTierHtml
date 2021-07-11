// review area here 
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    // var slidesPerPage = 2; //globaly define number of elements per page
    var syncedSecondary = true;
    // sync1 
    var carousel = $("#sync1"); // Activator Class
        carousel.owlCarousel({
            loop : true,
            center: true,
            margin:0,
            nav : false,
            dots: false,
            autoplay:true,
            autoplayTimeout: 5000,
            smartSpeed: 300,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    
        checkClasses();
        carousel.on('translated.owl.carousel', function(event) {
            checkClasses();
        });
        // first and last class 
        function checkClasses(){
            var total = $('#sync1 .owl-stage .owl-item.active').length; // nested class from activator class
    
            $('#sync1 .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem'); // nested class from activator class and remove first and last class if already added.
    
            $('#sync1 .owl-stage .owl-item.active').each(function(index){ // nested class from activator class
                if (index === 1) {
                    // this is the first one
                    $(this).addClass('firstActiveItem'); // add class in first item
                }
                if (index === total - 2 && total>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem'); // add class in last item
                }
            }).on('changed.owl.carousel', syncPosition);
        }
    
    // new code here first and last 
    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            center: true,
            loop:true,
            // items: slidesPerPage,
            dots: true,
            nav: false,
            margin: 60,
            autoplay:true,
            autoplayTimeout: 5000,
            smartSpeed: 300,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
// review area ends here 