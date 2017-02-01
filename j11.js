<!Doctype html>
<head>
</head>
<body>
<script type="text/javascript">

$(function() {  
  $('#clickme').click(function() {
       $.ajax({
       url: 'http://www.omdbapi.com/?s=title',
       success: function(data) {
          var items = [];

          $.each(data, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');    

          });

          $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
          }).appendTo('body');

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
});

</script>

 <script src="jquery-3.1.1"></script>
</body>