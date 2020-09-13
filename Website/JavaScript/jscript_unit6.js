//callback function to be run when DOM is loaded
$(document).ready(function(){
	//set variable to button by using jquery selector to select by the id
	var topBtn = $("#topButton");
	
	//when button is clicked, will scroll to the top of the page with animation speed of 800
	topBtn.click(function(){
		$('html ,body').animate({scrollTop:0},800);
	});
	
	//attach scroll event to the window object
	//when user scrolls callback function will run
	$(window).on('scroll', function(){
		//set variable to reference window object
		var self = $(this);
		//set variable height to height of browser viewport
		//set variable Top to the vertical scrollbar position
		var height = self.height();
		var pos = self.scrollTop();
		
		//if vertical position is greater than the height of browser viewpoint
		//and if the button is not visible, fade in the button else fade out the button 
		if(pos>height){
			if(!topBtn.is(':visible')){
				topBtn.fadeIn();
			}
		}else{
			topBtn.fadeOut();
		}

	});
	
});