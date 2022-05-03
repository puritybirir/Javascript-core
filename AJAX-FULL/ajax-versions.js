var uri = 'http://jsonplaceholder.typicode.com/users/7';
//none of these examples do proper error handling of
//nasty http status codes or
//invalid data types - text, xml, json, etc



//*********************************************************
//OLD Version AJAX
var xhr = new XMLHttpRequest();
xhr.open('GET', uri, true);
xhr.addEventListener('load', function(response){
    //handle the response from the server
    var data = response.responseText;  //or responseXML
    var json = JSON.parse(data); //JSON object
    console.log('XMLHttpRequest: ', data);
});
xhr.addEventListener('error', function(err){
    //error handling network request
})
xhr.send(null);







//*********************************************************
//NEW Version AJAX
fetch(uri)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log( data );
    })
    .catch(function(err){
        //error handling network request
    });








//*********************************************************
//REALLY OLD Version AJAX
//IE 5.5  ActiveX object or XMLHttpRequest object
var request = false;
if (window.XMLHttpRequest) { // Mozilla, Safari,...
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}
if(request){
    request.open('GET', uri, true);
    request.addEventListener('load', function(response){
        //handle the response from the server
        var data = response.responseText;  //or responseXML
        var json = JSON.parse(data); //JSON object
        console.log('XMLHttpRequest: ', data);
    });
    request.addEventListener('error', function(err){
        //error handling request
    })
    request.send(null);
}

