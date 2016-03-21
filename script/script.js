

function scrollToArticle(id)
{
	console.log("Got here" + id);

    $.scrollTo( "article[name='"+ id +"']" || 0, 1500);
    preventDefault();

}