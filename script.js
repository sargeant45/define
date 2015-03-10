function define() {
  var word = $("#word").val();
  var url = "http://api.wordnik.com:80/v4/word.json/" + word.toLowerCase() + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  var url2 = "http://api.wordnik.com:80/v4/word.json/" + word.toLowerCase() + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
  
  // set word
  document.getElementById('wordoutput').innerHTML = word.toLowerCase();
  
  // Use Jquery to grab from dictionary and change elements when done.
  $.ajax({
  url: url,
  success: function (data) {
      console.log(data)
      alert(data)
      $("#define").text(data.text);
    }
  });
  $.ajax({
  url: url2,
  success: function (data) {
      console.log(data)
      alert(data)
      $("#pronunciation").text(data.raw);
    }
  });
  
}
