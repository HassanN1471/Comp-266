//callback function to be run when DOM is loaded
$(document).ready(function(){		
	//set varible to the full URL of the current HTML document:
	var url = document.URL
	//jquery selector to select the attribute 'src' of an element with id 'shareBtn'
	//insert to the 'src' value for a dynamic facebook share button
	$("#shareBtn").attr("src",'https://www.facebook.com/plugins/share_button.php?href='+url+'&layout=button&size=small&width=67&height=20&appId');

});

