$(function() {
	function set() {

		$('li').on('click', function(ev){
			var ev = ev || window.event;

			var index = $(this).index()+1;

			$(this).siblings('li').removeClass('active');
			$(this).addClass('active');

			
			$('.img' + index).siblings('div').hide();
			$('.img' + index).fadeIn();

		})
	}
	set()
})