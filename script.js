function define() {
  var word = document.getElementById('word').text;
  var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + word + "?key=6171866a-33a7-4f70-b763-b8ffe73184b2"
  
  // Use Jquery to grab from dictionary and change elements when done.
  $.get( url, function( data ) {
    alert( "Definition data loaded: " + data );
    $("#word").text(data.hw);
    $("#pronunciation").text(data.pr);
    $("#define").text(data.def);
  });
  
}
