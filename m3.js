
$(function () {

	

   var $topic = $('topic');
   var $year = $('year');


   $('#add').on('click',function()
   {
   	concole.log($topic.val());
   	var obj={
   		Title:$topic.val();
   		year:$year.val();

   	};

   		$ajax({
   			type:'POST',
   			url:
   			data:obj;
   			success:function(newObj){
   				alert("jkjk");
   			}
   		});
   	});
	 
});

