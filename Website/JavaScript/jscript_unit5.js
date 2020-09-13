//wait for DOM to be fully loaded and parsed
//initial setup
document.addEventListener('DOMContentLoaded', function(){	
	//create empty array called comment
	var comment = [];
	
	//store data in local storage in string format
	//if local storage does not have property "commentData" define it
	//and initialize it with a empty array
	if(!localStorage.commentData){
		localStorage.commentData = [];
	}
	//if defined parse data as a JSON object and store in comment array
	else{
		comment = JSON.parse(localStorage.commentData);
	}
	
	//for loop to pass data as an object to render function
	for(var i=0;i<comment.length;i++){
		render(comment[i]);
	}
	
	//onclick perform function addComment and pass the array comment to it.
	document.getElementById("addComment").onclick = function(){addComment(comment)};
	
	//set variable as a NodeList of all the elements with the 'star' class 
	var stars = document.querySelectorAll('.star');
	//calls a function for each element in the array stars
	stars.forEach(function(star){
		//when a star is clicked a click event will occur that calls the function setRating 
		star.addEventListener('click', setRating); 
	});
    //get the inital star rating(data-rating="3") by perfoming a click event on the 'star'
	//find div with class star and get the stribute value of data-rating, 3	
	//value is a string so use parseInt to convert it to an int
	var rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
	//substruct 1 because index start at 0
	var target = stars[rating - 1];
	//click event will be dispatch on the 3rd 'star'
	target.dispatchEvent(new MouseEvent('click'));
	
})


function addComment(comment){
	//create varible with element id of the select
	var sel = document.getElementById("selectTitle");
	//create object with properties below
	var addObj = {
		"nameText": document.getElementById("name").value,
		"selectTitle": sel.options[sel.selectedIndex].text,
		"scoreText": document.getElementById("starRating").getAttribute("data-rating"),
		"bodyText": document.getElementById("bodyText").value
	};
	//'push' the addObj object to comment array
	comment.push(addObj);
	//change comment array data to string and save it in local storage
	localStorage.commentData = JSON.stringify(comment);
	//pass addObj object to the function render
	render(addObj);
	//clear entries in comment section
	document.getElementById("name").value = '';
	sel.value = '';
	document.getElementById("bodyText").value = '';
}

//function named render and data passed as an object
//will add html text to existing page, which will the inputs from the users
function render(data){
	//varible containing string with values passed to this function
	var htmlCode = "<div class='commentBox'><div class='commentPanel'><p>Name: "+data.nameText+"</p><p>Title: <a class='title'>"+data.selectTitle+"</a></p><p>Score: <a class='score'> "+data.scoreText+"/5</a></p><p>Comment: "+data.bodyText+"</p></div><div class='clear'></div></div>";
	
	//select element and use insertAdjacentHTML to parse the specified text as HTML
	document.getElementById("container").insertAdjacentHTML('afterbegin',htmlCode);
}

//checks which 'star' html to add rated to to change it to a filled star or a outline star
function setRating(data){
	//set variable to the 'star' that was clicked
    var targetStar = data.currentTarget;
	//set variable as a NodeList of all the elements with the 'star' class 
    var stars = document.querySelectorAll('.star');
	//used to find 'star' that was clicked, true if found it
    var match = false;
    var num = 0;
	//loops through all the 'star' and if match is true add rated text to it else remove rated
    stars.forEach(function(star, index){
		if(match){
			star.classList.remove('rated');
		}else{
			star.classList.add('rated');
		}
		//check for 'star' that was clicked
		if(star === targetStar){
			match = true;
			//set num to the index number of the clicked 'star' minus 1
			num = index + 1;
		}
	});
	//change the attribute data-rating value to the value num
	document.querySelector('.stars').setAttribute('data-rating', num);
}