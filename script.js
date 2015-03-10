function define() {
  var word = $("#word").val();
  var url = "http://api.wordnik.com:80/v4/word.json/" + word.toLowerCase() + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  var url2 = "http://api.wordnik.com:80/v4/word.json/" + word.toLowerCase() + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
  
  // set word
  document.getElementById('wordoutput').innerHTML = word.toLowerCase();
  
  // Use Jquery to grab from dictionary and change elements when done.
  $.getJSON( url, function( json ) {
    console.log( "JSON Data: " + json.text[1])
    ("#definition").text(json.text[1]);
  });
  $.getJSON( url2, function( json ) {
    console.log( "JSON Data: " + json.text[1])
    ("#definition").text(json.raw[1]);
  });
  
}
