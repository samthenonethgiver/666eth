jQuery(function ($) {
	/*---Smooth-scroll-*/
	$('a[href^="#_"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    /*-- Strict mode enabled --*/
    "use strict";
    var _document = $(document),
        _window = $(window),
        _body = $("body");

    //animated navbar-toggler button
    _document.on('click', '.navbar .navbar-toggler', function () {
        $(this).toggleClass("change");
    });

    _document.on('click', function (e) {
        var _navMenu = $('.navbar-nav li');
        if ($('.navbar-collapse').hasClass('show')) {
            if (!_navMenu.is(e.target) && _navMenu.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass('show');
                $(".navbar-toggler").removeClass('change');
            }
        }
    });

    //script for box equal height
    var maxHeight = 0;
    $(".equalHeight").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".equalHeight").height(maxHeight);

    //Video modal
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }

    });

    //jQuery countdown plugin
    $('#clock').countdown('2020/10/10').on('update.countdown', function (event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });

    // Token slider
    $('.token-slider .carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

	//HighCharts 2
	if ($('.line-chart2').length > 0) {
		Highcharts.chart('chart-container2', {
	tooltip: {
		formatter: function() {

                if(this.series.name == 'ETH' || this.series.name == 'Users' ){
                  return false ;
                } else if (this.series.name == 'AVG') {
				  return '<b>'+ this.key +'</b><br/>';
				} else {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y;
				}
            }
	},
    title: {
        text: 'Combination chart'
    },
    xAxis: {
		allowDecimals:false,
		min: 0.5,
		max: 12.5,
        categories: ['12 Sep', '13 Sep', '14 Sep', '15 Sep', '16 Sep', '17 Sep', '18 Sep', '19 Sep', '20 Sep', '21 Sep', '22 Sep', '23 Sep', '24 Sep', '25 Sep']
    },
    labels: {
        items: [{
            html: 'Avg. investment: 0.26 ETH',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
            }
        }]
    },
    legend: {
            itemStyle: {
                color: '#A0A0A0'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
               color: '#444'
            }
    },
	yAxis: [{
		labels: {
                enabled: false
        },
		title: {
                enabled: false
        },
		minorGridLineWidth: 0.2,
        gridLineWidth: 0.1,
        alternateGridColor: null,
	}],

	plotOptions: {
        column: {

        },
		spline: {
			dashStyle: 'Dot',
			marker: { enabled: false },
			states: { hover: { enabled: false } },
		},
		area: {
			marker: { enabled: false },
			states: { hover: { enabled: false } },
			style: 'dotted',
			fillOpacity: 0.2,
		},
		pie: {

		}

    },

    series: [{
        type: 'column',
        name: '',
		showInLegend: false,
        data: [6, 12, 51, 82, 119, 136, 173, 219, 242, 284, 312, 392, 455, 541],
		color: '#78ee06',
		pointWidth: 20,
		shadow: {
            color: '#78ee06',
            width: 5,
            offsetX: 0,
            offsetY: 0
        },

    },
	{ //Line
        type: 'area',
        name: 'ETH',

        data: [0.2*10, 1.4*10, 5.69*10, 16.44*10, 21.27*10, 25.57*10, 27.3*10, 32.53*10, 36.12*10, 43.38*10, 52.35*10, 77.02*10, 91.1*10, 105.7*10],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        },

		color: '#ee06a4',
		shadow: {
            color: '#ee06a4',
            width: 3,
            offsetX: 0,
            offsetY: 0
        }
    }, 	{ // Line 2
		type: 'spline',
        name: 'Users',
        data: [6, 12, 51, 82, 119, 136, 173, 219, 242, 284, 312, 392, 455,541],
		color: '#78ee06',
		shadow: {
            color: '#78ee06',
            width: 3,
            offsetX: 0,
            offsetY: 0
        },
		formatter: function () {
           return (this.value / 5) ;
        }
    },
		{
        type: 'pie',
        name: 'AVG',
        data: [
		{
            name: '0.26 AVG',
			sliced: true,
            selected: true,
            y: 18,
            color: 'rgba(150,100,50,0.1)' // AVG color
        }, {
            name: '0.01 MIN',
            y: 16,
            color: 'rgba(200,122,200,0.7)' // Joe's color
        },
		 {
            name: '5 MAX',
            y: 21,
            color: 'rgba(200,122,200,1)' // John's color
        },
		],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
	});
	}

    //SVG Line animation
    $(".roadmap-to-success").each(function () {
        $(this).waypoint(function () {
            var _svgPath = $('.roadmap-line-path'),
                _svgPathLength = $('.roadmap-line-path').get(0).getTotalLength(),
                _labelLength = $('.roadmap-label').length;

            _svgPath.css({
                'opacity': '1',
                'stroke-dashoffset': _svgPathLength,
                'stroke-dasharray': _svgPathLength
            });

            setTimeout(function () {
                _svgPath.animate({
                    "stroke-dashoffset": _svgPathLength
                }, 0, function () {
                    _svgPath.animate({
                        "stroke-dashoffset": '0px'
                    }, {
                        duration: 1500,
                        // easing: 'linear',
                        step: function () {
                            var a = parseInt(_svgPath.css("stroke-dashoffset"));
                            for (var i = 0; i < _svgPathLength; i++) {
                                if (a < _svgPathLength * (_labelLength - i) / _labelLength) {
                                    $(".roadmap-label.l-" + (i + 1)).fadeIn().addClass("active");
                                }
                            }
                        }
                    }, function () {
                        //callback ...
                    });
                });
            });
            this.destroy();
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });


    //Show data on click event
    var _roadmapContainer = $('.roadmap-container'),
        _roadMapLabel = $('.roadmap-label');

    _roadmapContainer.on('click', '.roadmap-label', function () {
        if ($(this).find('.data.active').length === 0) {
            //remove
            _roadmapContainer.find('.data').removeClass('active');
            $(this).find('.data').addClass('active');
            _roadMapLabel.removeClass('glow');
            $(this).addClass('glow');

            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
                $(this).find('.data .card').slideDown(function () {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 90
                    }, 500);
                });

            } else {
                _roadmapContainer.find('.data .card').fadeOut("slow");
                $(this).find('.data .card').fadeIn("slow");
            }
        }
    });

    _document.on('click', function (e) {
        if (!_roadMapLabel.is(e.target) && _roadMapLabel.has(e.target).length === 0) {
            _roadmapContainer.find('.data').removeClass('active');
            _roadMapLabel.removeClass('glow');
            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
            } else {
                _roadmapContainer.find('.data .card').fadeOut();
            }
        }
    });

    //progress bar
    $(".progress").each(function () {
        $(this).waypoint(function () {
            $('.progress-bar').progressbar({
                transition_delay: 100
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    // Jump to bookmark
    var _anim = function () {
        $('html, body').animate({
            scrollTop: $('.ico-funding').offset().top
        }, 800, 'easeInOutExpo');
    }


    var _commonTab = $('.common-tab .nav li a'),
        _tabPane = $('.tab-pane'),
        _footerItem = $('.footer-nav li a');

    _window.on('load', function () {
        var loc = window.location.href;

        if (/tab-campaign/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if (/tab-faqs/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if (/tab-update/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    //test
    $('.footer-nav').on('click', 'li a', function () {
        if ($(this).attr('href') === "#tab-campaign") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-faqs") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-update") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    // Preloader js
    function loader(_success) {
        var obj = $('.o-preloader'),
            inner = $('.o-preloader_inner');
        var w = 0,
            t = setInterval(function () {
                w = w + 1;
                inner.text(w + '%');
                if (w === 100) {
                    obj.addClass('open-page');
                    obj.addClass('hide-loader');

                    clearInterval(t);
                    w = 0;
                    if (_success) {
                        return _success();
                    }
                }
            }, 20);
    }
    loader();


}(jQuery));
