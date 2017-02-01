
$(function () {

	var $mytext = $('#mytext');
	var $title = $('#title');
	var $search = $('#search');
                                                                                                                                                
	$title=$('#title');
	$imdb=$('#imdb');
	$year=$('#year');
	$image=$('#image');
	$type=$('#type');
	var $myimdb;


	 $('#div2').hide();

var records = 4;
	var min = 0;
	var max = records+min;
		$.ajax({
		type:'GET',
		url:' http://localhost:3000/information',
		success:function(data) 
		{
			var tr="<tr><td><b>Title<b></td><td><b>IDMB</b></td><td><b>Type</b></td><td><b>YEAR</b></td><td><b>DELETE</b></td><td><b>UPDATE</b></td><td><b>IMAGE</b></td></tr>";
			$("#div1").append(tr); 
			//var flag=0;
			//var mydata = data.Search;
			for(var i=min;i<=max;i++)
			//$.each(data, function( index, value ) 
			{
				var value=data[i];
					console.log(value+"    inside this  ");
            	    var td1="<tr><td>"+value.Name+"</td>";
             		var td2="<td>"+value.id+"</td>";
             		var td3="<td>"+value.Type+"</td>";
             		var td4="<td>"+value.Year+"</td>";
             		var td5="<td><button class='delete'>Delete</button></td>";
             		var td6="<td><button class='update'>update</button></td>";
             		var td7="<td >"+value.Poster+"</td></tr>";
             		///console.log("i am here");
             		//console.log(value.Poster+"  potsrere");
        	    	
		       		$("#div1").append(td1+td2+td3+td4+td5+td6+td7); 
					
				
				
			};
			//console.log("value of  ")
			
		}
	});
$('#next').on('click',function ()
	{

		console.log("value oif   imin  "+min);
		console.log("value oif   max  "+max);
		min = min+records+1;
		max = max+records+1;

		$('#div1').empty();
		console.log("empty");
		$.ajax({
		type:'GET',
		url:' http://localhost:3000/information',
		//url:'http://www.omdbapi.com/?s=title',
		success:function(data) 
		{
			var mydata = data;
			var tr="<tr><td><b>Title<b></td><td><b>IDMB</b></td><td><b>Type</b></td><td><b>YEAR</b></td><td><b>DELETE</b></td><td><b>UPDATE</b></td><td><b>IMAGE</b></td></tr>";
		     $('#div1').append(tr);
			for(var i=min;i<=max;i++)
			//$.each(data, function( index, value ) 
			{
				var value=data[i];
					//console.log(value+"    inside this  ");
            	    var td1="<tr><td>"+value.Name+"</td>";
             		var td2="<td>"+value.id+"</td>";
             		var td3="<td>"+value.Type+"</td>";
             		var td4="<td>"+value.Year+"</td>";
             		var td5="<td><button class='delete'>Delete</button></td>";
             		var td6="<td><button class='update'>update</button></td>";
             		var td7="<td >"+value.Poster+"</td></tr>";
             		///console.log("i am here");
             		//console.log(value.Poster+"  potsrere");
        	    	
		       		$("#div1").append(td1+td2+td3+td4+td5+td6+td7); 
					
				
				
			};
		}
	});
	});
	$('#prev').on('click',function ()
	{
		console.log("jkjk");
		
		if(min>=4)
		{
		min = min-5;
		max = max-5;
		$('#div1').empty();
		$.ajax({
		type:'GET',
		url:' http://localhost:3000/information',
		//url:'http://www.omdbapi.com/?s=title',

		success:function(data) 
		{
			var tr="<tr><td><b>Title<b></td><td><b>IDMB</b></td><td><b>Type</b></td><td><b>YEAR</b></td><td><b>DELETE</b></td><td><b>UPDATE</b></td><td><b>IMAGE</b></td></tr>";
		     $('#div1').append(tr);
			var mydata = data;
			for(var i=min;i<=max;i++)
			//$.each(data, function( index, value ) 
			{
				var value=data[i];
					//console.log(value+"    inside this  ");
            	    var td1="<tr><td>"+value.Name+"</td>";
             		var td2="<td>"+value.id+"</td>";
             		var td3="<td>"+value.Type+"</td>";
             		var td4="<td>"+value.Year+"</td>";
             		var td5="<td><button class='delete'>Delete</button></td>";
             		var td6="<td><button class='update'>update</button></td>";
             		var td7="<td >"+value.Poster+"</td></tr>";
             		///console.log("i am here");
             		//console.log(value.Poster+"  potsrere");
        	    	
		       		$("#div1").append(td1+td2+td3+td4+td5+td6+td7); 
					
				
				
			};
		}

	});
	}
	});



/*

$('#div1').paging({limit:5});

$('#div1').paging({

limit: 5,
rowDisplayStyle: 'block',
activePage: 0,
rows: []

});
*/


$mytext.delegate('.btn','click',function()
{

	var obj={};
	console.log("value of  type   in text box is  "+$type.val());
	
	obj['Title']=$title.val();
	obj['Year']=$year.val();
	obj['id']=$imdb.val();
	obj['Type']=$type.val();
	obj['Poster']=$image.val();

console.log("here");
console.log(obj.Type);
	
	$.ajax({
  type:'POST',
 url:' http://localhost:3000/information',
 data :obj,
 //contentType: "application/json"
  success: function(obj){

                 alert("Save Complete  id of  "+obj.id);
                    var td1="<tr><td>"+obj.Name+"</td>";
             		var td2="<td>"+obj.id+"</td>";
             		var td3="<td>"+obj.Type+"</td>";
             		var td4="<td>"+obj.Year+"</td>";
             		var td5="<td><button class='delete'>Delete</button></td>";
             		var td6="<td><button class='update'>update</button></td>";
             		var td7="<td>"+obj.Poster+"</td></tr>";
        	    	
		       		$("#div1").append(td1+td2+td3+td4+td5+td6+td7); 

$title.val("");
$imdb.val("");
$image.val("");
$year.val("");
$type.val("");







      }
  
});
		

});




$('#div1').delegate('.delete','click',function()
{
	alert('deleted');	
	    
		console.log("deleted");
	    var $h=$(this).closest('tr');
		
		var $IDMB = $(this).closest('td').prev('td').prev('td').prev('td').text();
		$(this).closest('tr').remove();
		console.log("inside this delete");
		console.log($IDMB+"    id  ");
		$.ajax({
		type:'DELETE',
		url:' http://localhost:3000/information/'+$IDMB,
		success:function(data) 
		{
			
			alert('deleted');		
			
			
		}
	});


});



$('#div1').delegate('.update','click',function()
{
	
		console.log("asdasd");
		var $poster = $(this).closest('td').next('td').text();
		console.log($poster+"    i m here");
		var $year = $(this).closest('td').prev('td').prev('td').text();
		var $type = $(this).closest('td').prev('td').prev('td').prev('td').text();
		var $IDMB = $(this).closest('td').prev('td').prev('td').prev('td').prev('td').text();
		var $title = $(this).closest('td').prev('td').prev('td').prev('td').prev('td').prev('td').text();
		console.log($year +"year");
		console.log($type+"   type");
		console.log($IDMB+"   idmb ");
		console.log($title+"    title");
		$myimdb=$IDMB;
		console.log("id forupdate "+$myimdb);
		$('#mytext').hide();
		$('#div2').show();
		$('#title1').val($title);
		$('#year1').val($year);
		$('#type1').val($type);
		$('#imdb1').val($IDMB);
		$('#poster1').val($poster);
		

});


$('#div2').delegate('.save','click',function()

{
	console.log("id forupdate "+$myimdb);
	console.log("insiddd update");
    console.log($('#imdb1').val());
       var obj1={};
		
		obj1.Name=$('#title1').val();
		obj1.Year=$('#year1').val();
		obj1.id=$('#imdb1').val();

		obj1.Type=$('#type1').val();
		obj1.Poster=$('#poster1').val();
		console.log("id is herererereer   "+obj1.id);
		//$('#imdb1').val($IDMB);
	$.ajax({
		type:'PUT',
		//url:' http://localhost:3000/information/'+$('#imdb1').val(),
		url:' http://localhost:3000/information/'+$myimdb,
		data:obj1,
		success:function(data) 
		{
			//Title="klk";
			alert('upppleted');		
			
			
		}
	});
	     
	     console.log('jkjkj');
	     $('#div2').toggle();
	     $('#mytext').show();
		


});


	
	});