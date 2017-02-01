$(function () 
{
	
	var $mytext = $('#mytext');
	var $movieDetail = $('#movieDetail');
	var $title = $('#title');
	var $search = $('#search');
	var $count = $('#count');
	var count = 0;
	var $movie = "";
	var addbtn = $('#add_movie');

	
	var records = 4;
	var min = 0;
	var max = records+min;
	$.ajax({
		type:'GET',
		url:'http://localhost:3000/Search',
		//url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			var mydata = data;
			console.log(data.length);
			for(var i=min;i<=max;i++)
			//$.each(mydata, function( index, value ) 
			{
				$mytext.append('<tr class="dataRow"><td style="display:none;"></td><td class="col-xs-5">'+mydata[i].Title+'</td><td class="col-xs-2">'+mydata[i].Type+'</td><td class="col-xs-1">'+mydata[i].Year+'</td><td class="col-xs-2">'+mydata[i].id+'</td><td class="col-xs-1"><button id="edit" class="editBtn glyphicon glyphicon-edit"></button></td><td class="col-xs-1"><button class="delBtn glyphicon glyphicon-trash"></button></td></tr>');
			};
		}
	});

	$('#next').on('click',function ()
	{
		min = min+records+1;
		max = max+records+1;

		$mytext.empty();
		$.ajax({
		type:'GET',
		url:'http://localhost:3000/Search',
		//url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			var mydata = data;
			for(var i=min;i<=max;i++)
			//$.each(mydata, function( index, value ) 
			{
				$mytext.append('<tr class="dataRow"><td style="display:none;"></td><td class="col-xs-5">'+mydata[i].Title+'</td><td class="col-xs-2">'+mydata[i].Type+'</td><td class="col-xs-1">'+mydata[i].Year+'</td><td class="col-xs-2">'+mydata[i].id+'</td><td class="col-xs-1"><button id="edit" class="editBtn glyphicon glyphicon-edit"></button></td><td class="col-xs-1"><button class="delBtn glyphicon glyphicon-trash"></button></td></tr>');
			};
		}
	});
	});
	$('#prev').on('click',function ()
	{
		
		if(min>=4)
		{
		min = min-5;
		max = max-5;
		$mytext.empty();
		$.ajax({
		type:'GET',
		url:'http://localhost:3000/Search',
		//url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			var mydata = data;
			for(var i=min;i<=max;i++)
			//$.each(mydata, function( index, value ) 
			{
				$mytext.append('<tr class="dataRow"><td style="display:none;"></td><td class="col-xs-5">'+mydata[i].Title+'</td><td class="col-xs-2">'+mydata[i].Type+'</td><td class="col-xs-1">'+mydata[i].Year+'</td><td class="col-xs-2">'+mydata[i].id+'</td><td class="col-xs-1"><button id="edit" class="editBtn glyphicon glyphicon-edit"></button></td><td class="col-xs-1"><button class="delBtn glyphicon glyphicon-trash"></button></td></tr>');
			};
		}

	});
	}
	});


	$('#addBtn').on('click',function ()
	{
		var name = $('#name').val();
		var year = $('#year').val();
		var type = $('#type').val();
		var imdbID = $('#imdbID').val();
		var poster = $('#poster').val();

		if(name=='' || year==''||type==''||imdbID==''||poster=='')
		{
			alert('Please Fill all Fields');
		}
		else
		{
		var newMovie =
		{
			Title : name,
			Year : year,
			id : imdbID,
			Type : type,
			Poster : poster,
		};
		console.log(newMovie);

		$.ajax({
			type: "POST",
			url:'http://localhost:3000/Search/',
			data: newMovie,
			success:function(data) 
			{				
				$mytext.append('<tr><td class="col-xs-6">'+name+'</td><td class="col-xs-1">'+type+'</td><td class="col-xs-1">'+year+'</td><td class="col-xs-2">'+imdbID+'</td><td class="col-xs-1"><button id="edit" class="editBtn glyphicon glyphicon-edit"></button></td><td class="col-xs-1"><button data-id='+imdbID+' class="delBtn glyphicon glyphicon-trash"></button></td></tr>');
				alert('ADDED');
 					location.reload();
			}
		});
	}
	})

	$mytext.delegate('.editBtn','click',function () {
		
		var $td = $(this).closest('td').prev('td').text();
		var newTr =	'<tr id="editTr"><td class="col-xs-6"><input type="text" class="form-control" id="editName" placeholder="Name"></td><td class="col-xs-1"><input type="text" class="form-control" id="editType" placeholder="Type"></td><td class="col-xs-1"><input type="text" class="form-control" id="editYear" placeholder="Year"></td><td class="col-xs-2">'+$td+'</td><td class="col-xs-1"><button id="save" class="saveBtn glyphicon glyphicon-ok"></button></td><td class="col-xs-1"><button id="close" class="closeBtn glyphicon glyphicon-remove"></button></td></tr>';
		

		var oldPoster = $(this).closest('td').prev('td').prev('td').prev('td').prev('td').prev('td').text();
		var oldName = $(this).closest('td').prev('td').prev('td').prev('td').prev('td').text();
		var oldType = $(this).closest('td').prev('td').prev('td').prev('td').text();	
		var oldYear = $(this).closest('td').prev('td').prev('td').text();	
		var oldImdb = $(this).closest('td').prev('td').text();

		var newName ='';
		var newType ='';
		var newYear =''; 

		var editMovie = {};

		$mytext.delegate('.closeBtn','click',function () 
		{
			location.reload();
		});
		$mytext.delegate('.saveBtn','click',function () 
		{
			newName = $('#editName').val();
			newYear = $('#editYear').val();
			newType = $('#editType').val();
			//alert($('#editName').val());
			if($('#editName').val()=='')
			{	
				newName = oldName;
			}
			if($('#editYear').val()=='')
			{	
				newYear = oldYear;
			}
			if($('#editType').val()=='')
			{	
				newType = oldType;
			}

			editMovie =
			{
				Title : newName,
				Year : newYear,
				id : oldImdb,
				Type : newType,
				Poster : oldPoster,
			};

			console.log(editMovie);
			$.ajax({
			type: "PUT",
			url:'http://localhost:3000/Search/'+oldImdb,
			data:editMovie,

			success:function(data) 
			{
				alert("Updated : "+oldImdb);
				location.reload();
			}
			});
		});

		$(this).closest('tr').html(newTr);


		
	})


/////////////////////////////////////DELETE///////////////////////////////////
$mytext.delegate('.delBtn','click',function () {
	if(confirm("Are You Sure"))
	{
		
		var $IMDB = $(this).closest('td').prev('td').prev('td').text().trim();
		$(this).closest('tr').remove();
		
		$.ajax({
			type: "DELETE",
			contentType:"application/json",
			url:'http://localhost:3000/Search/'+$IMDB,

			success:function(data) 
			{
				alert("DELETED : "+$IMDB);
			}
		});
	}
})
});