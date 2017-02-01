
$(function () {

	var $mytext = $('#mytext');
	var $title = $('#title');
	var $search = $('#search');
	var $div1=$('#div1');
	var $imb;
	
	$('#search').on('click', function () {


		$.ajax({
		type:'GET',
		url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			$mytext.empty();
			var tr="<tr><td><b>Title<b></td><td><b>Info<b></td></tr>";
			$("#mytext").append(tr); 
			
			var flag=0;
			var mydata = data.Search;
			$.each(mydata, function( index, value ) 
			{
				
				if(value.Title.toLowerCase().includes($title.val().toLowerCase()))
				{
					
            	    var td1="<tr><td>"+value.Title+"</td>";
             		var td2="<td id='trt1'>"+value.imdbID+"</td>";
        	    	var td5="<td><button class='movie' id='detail'>detail</button></td></tr>";

		       		$("#mytext").append(td1+td2+td5); 


					flag=1;
					
				}
				else
				{
					//$("#mytext").append("nothing found"); 
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
	
		
	})
	});




$mytext.delegate('.movie','click',function()
{
	//$div1.append('asdasdasdasd');
		console.log("asdasd");
		var $g = $(this).closest('td').prev('td');
    var str=$g.text();
  //console.log(str+"       tytyt");
//console.log(str.substring(0,str.length-6));
	     
	     var str1=str.substring(0,str.length-6);
	     $div1.append(str);

	     $.ajax({
		type:'GET',
		url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			console.log("newwewewewe      "+str1);
			$div1.empty();
			var tr="<tr><td><b>Title<b></td><td><b>IDMB</b></td><td><b>YEAR</b></td><td><b>Poster</b></td></tr>";
			$("#div1").append(tr); 
			
			var flag=0;
			var mydata = data.Search;
			$.each(mydata, function( index, value ) 
			{
				console.log(str1);
				
				if(value.imdbID===str)
				{
					console.log(str1+"    inside this  ");
            	    var td1="<tr><td>"+value.Title+"</td>";
             		var td2="<td>"+value.imdbID+"</td>";
             		var td4="<td>"+value.Year+"</td>"
             		var td3="<td><img src='"+value.Poster+"' class='responsive' alt='jkjkj'/></td></tr>"
             		
        	    	
		       		$("#div1").append(td1+td2+td4+td3); 


					flag=1;
					
				}
				else
				{
					//$("#mytext").append("nothing found"); 
				}
				
				
			});
			if(flag==0)
			{
				$div1.empty();
				$div1.append("sorry not found");
			}
			if(flag==1)
			{
				flag=0;
			}
		}
	
		
	})
	});



$mytext.delegate('.movie','click',function()
{
	
		console.log("asdasd");
		var $g = $(this).closest('td').prev('td');


});






});

