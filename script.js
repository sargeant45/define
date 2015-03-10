function define() {
  var word = $("#word").val();
  var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + word + "?key=6171866a-33a7-4f70-b763-b8ffe73184b2"
  
  // CORS requesting time!
  var request = createCORSRequest( "get", url);
  if ( request ){
      // Define a callback function
      request.onload = function(){};
      // Send request
      request.send();
  }
  
  // Use Jquery to grab from dictionary and change elements when done.
  $.ajax({
  url: url,
  crossDomain: true,
  success: function (data) {
      console.log(data)
      alert(data)
      $("#word").html(data.hw)
      $("#pronunciation").html(data.pr)
      $("#define").html(data.def);
    }
  });
  
}

function createCORSRequest(method, url){
  // CORS request method thingy I found on http://jquery-howto.blogspot.com/2013/09/jquery-cross-domain-ajax-request.html#cors
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        // XHR has 'withCredentials' property only if it supports CORS
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
