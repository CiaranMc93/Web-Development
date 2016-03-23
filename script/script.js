//create temporary variable to hold the current page
//first page is the home page
var temp = 'home';
var i = 0;

//prevent scroll to flashing
$('.slideNav').click(function(e){
        e.preventDefault();

        console.log("got here");
        
        scrollToButtons();
});

//scrolls to the article
function scrollToArticle(id)
{
	if(id == "top")
	{
		 $.scrollTo( "header[name='"+ id +"']" || 0, 1500);
	}
	else
	{
		$.scrollTo( "article[name='"+ id +"']" || 0, 1500);
	}
    
}

//scroll to the previous or next slide based on current one
function scrollToButtons(id)
{
	//page array
	var pages = ['home','bio','experience','tech','hobbies'];

	//check if the up or down button has been clicked
	if(id == 'up')
	{
		if(temp != 'home')
		{
			//decrement the variable
			i--;

			temp = pages[i];

			//scroll to the correct page.
			$.scrollTo( "article[name='"+ temp +"']" || 0, 1500);
		}
	}
	else
	{
		if(temp != 'hobbies')
		{

			//decrement the variable
			i++;

			temp = pages[i];

			console.log("Down" + pages[i]);

			//scroll to the correct page.
			$.scrollTo( "article[name='"+ temp +"']" || 0, 1500);

		}
	}
}

//disable key scrolling
window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);