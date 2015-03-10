function define() {
  var word = $("#wow").val();
  var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + word + "?key=6171866a-33a7-4f70-b763-b8ffe73184b2"
  
  // Use Jquery to grab from dictionary and change elements when done.
  $.ajax({
  url: url,
  crossDomain: true,
  success: function (data) {
    console.log(data)
    alert(data);
    $("#word").html(data.hw);
    $("#pronunciation").html(data.pr);
    $("#define").html(data.def);
  }
});
  
}
