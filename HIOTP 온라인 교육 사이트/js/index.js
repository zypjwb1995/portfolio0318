var internalID = setInterval(function(){

    var tArray = document.title.split("");

    var firstChar = tArray.shift();

    tArray.push(firstChar);

    var newTitle = tArray.join("");

    document.title = newTitle;

},500); 

setTimeout(function(){
    clearInterval(internalID)
},13500); 