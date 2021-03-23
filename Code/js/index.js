var internalID = setInterval(function() {

    var oldTitle = document.title;

    var lastChar = oldTitle.slice(oldTitle.length - 1);

    var beforeStr = oldTitle.slice(0, oldTitle.length - 1);
    
    document.title = lastChar + beforeStr;
}, 500);