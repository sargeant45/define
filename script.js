function define() {
  var word = document.getElementById('word').text;
  var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + word + "?key=6171866a-33a7-4f70-b763-b8ffe73184b2"
  var raw = $.get( url, function( data ) {
  alert( "Data Loaded: " + data );
  });
  var def = raw.def;
  document.getElementById('define').innerHTML = def;
}
