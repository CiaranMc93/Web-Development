
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
    
    //prevent the page from reloading and scrolling to the top
    preventDefault();

}