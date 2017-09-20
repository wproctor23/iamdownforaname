/*-------------------------------------
| Scroll
-------------------------------------*/
function window_scroll() {
	var howFar = $(window).scrollTop();

	if (howFar >= 240) {
		$('body').addClass('pinned');
	}
	else {
		$('body').removeClass('pinned');
	}
}

$(window).scroll(window_scroll);

/*-------------------------------------
| Window Resize
-------------------------------------*/
function window_resize() {
	var w_width = $(window).width();

	if (w_width < 730) {
		$('body').addClass('hamburger');
	}
	else {
		$('body').removeClass('hamburger');
	}
}

$(window).resize(window_resize);

window_resize();

/*-------------------------------------
| Open hamburger
-------------------------------------*/
var hm_state = 'closed';

function hamburger_click() {
	if (hm_state == 'closed') {
		hm_state = 'open';
		$('body').addClass('hamburger-open');
	}
	else {
		hm_state = 'closed';
		$('body').removeClass('hamburger-open');
	}
	console.log(hm_state);
}

$('.glyphicon-menu-hamburger').click(hamburger_click);