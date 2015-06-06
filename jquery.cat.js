$.fn.jCat = function(options) {
	var defaults = {
		'color': '#f00',
		'size': '12',
		'link': !1
	};
	var settings = $.extend({}, defaults, options); 
	this.css({
		'position': 'relative'
	});
	if (settings.link)
		this.css({
			'cursor': 'pointer'
		}).click(function() {
			window.location.href = settings.link;
		});

	return this.append('<i style="width:0;height:0;position:absolute;left:0;top:-' + settings.size * 2 + 'px;border:' + settings.size + 'px solid ' + settings.color + ';border-top-color:transparent;border-right-color:transparent;"></i><i style="width:0;height:0;position:absolute;right:0;top:-' + settings.size * 2 + 'px;border:' + settings.size + 'px solid ' + settings.color + ';border-top-color:transparent;border-left-color:transparent;"></i>');
}