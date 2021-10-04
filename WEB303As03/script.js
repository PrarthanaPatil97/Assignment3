/* $(document).ready(function() {
	$.getJSON( "team.json", function( data ) {
  var items = '' ;
  $.each( data.teammembers, function( key, val ) {
    items = items + '<h4>'+val.name+'</h4>';
	items = items + '<h3>'+val.title+'</h3>';
	items = items +'<p>'+val.bio+'</p>';
  });
  
 
  $( "#team").append(items);
	});
}); */

$(document).ready(function() {
  setTimeout(itemJson,5000);
  $("#team").append("<p>Loading.....</p>");
  function itemJson()
  {
	  $.ajax({
		  type:'GET',
		  url:'team.json',
		  dataType:'json',
		success:  function(data){
			var items = '' ;
		  $.each( data.teammembers, function( key, val ) {
			items = items + '<h4>'+val.name+'</h4>';
			items = items + '<h3>'+val.title+'</h3>';
			items = items +'<p>'+val.bio+'</p>';
		  });
		  
		 
		  $( "#team").append(items);
		}
		
	  });
  }
});