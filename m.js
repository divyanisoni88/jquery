
$(function () {

	var $mytext = $('#mytext');
	var $title = $('#title');
	var $search = $('#search');


	 $('#search').on('click', function () {

		$.ajax({
		type:'GET',
		url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			var flag=0;
			var mydata = data.Search;
			$.each(mydata, function( index, value ) 
			{
				//console.log(value);
				if(value.Title.toLowerCase().includes($title.val().toLowerCase()))
				{
					flag=1;
					console.log(value.Title);
					$mytext.append( "<li>Title : " + value.Title+"</li>" );
					$mytext.append( "<li>Year : " + value.Year+"</li>" );
					$mytext.append( "<li>IMDB : " + value.imdbID+"</li>" );
					$mytext.append( "<li>Type : " + value.Type+"</li>" );
					$mytext.append( "<li><img src= '" + value.Poster +"'/></li>");
					
				}
				
			});
			if(flag==0)
			{
				$mytext.empty();
				$mytext.append("sorry not found");
			}
			if(flag==1)
			{
				flag=0;
			}
		}
	});
		
	})
});