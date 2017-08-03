$(document).ready(function(){


	$('.btn-info').on('click',function(event){
		event.preventDefault();

		//var text_tweet = $('textarea[name="text-tweet"]').val()
		var text_tweet = $('.text-tweet').val();	

		var block ='<div class="blockstweet-1 row">'
		+ '<div class="col-md-2">'
		+ '<img src="imgs/cara2.jpg" alt="" class="img-responsive img-circle img-thumbnail">'
		+ '</div>'
		+ '<div class="col-md-10">'
		+ '<p class="name">Roberto Fonola Márquez</p>'
		+ '</div>'
		+ '<div class="text-tweets col-md-12">'
		+ '<p>' + $('.text-tweet').val() + '</p>'
		+ '</div>'
		+ '<div class="col-md-12">'
		+ '<div class="clearfix">'
		+ '<span class="likeable glyphicon glyphicon-heart pull-right" btn btn-default></span>'
		+ '<div class="counter-like">'
		+ '<div class="output">0</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<span class="removepin glyphicon glyphicon-remove remove-tweet-icon"></span>'


		$('.tweets').append(block);
		});
		$('.tweets').on('click', '.glyphicon-remove', function(){
			$(this).parent().fadeOut();
		});
		$('.btn-info').on('click', function(){
			$('.text-tweet').val('').focus();
		});
		$('.glyphicon').on('click', function(){
			// $(this).css('color', 'red');
			console.log($(this).parent('click'));
		});
		$(document).on('click','.likeable',function() {
    		console.log()
    		$(this).siblings('.counter-like').find('.output').html(function(i, val) { return val*1+1 });
    		$(this).on('.counter-like').css('color', '#783393',);

		});
	});