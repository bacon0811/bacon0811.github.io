$(function(){
	var $bigImg = $('#bigImg'), 
		$desc = $('#desc');
	
	$('#bg').css('opacity', .6);

	$('#thumbs img').on('click', function(){
		var $this = $(this), 
			src = $this.attr('src'), 
			alt = $this.attr('alt');

		$bigImg.attr('src', src.replace('_thumb', ''));
		$desc.html(alt);
	});
});