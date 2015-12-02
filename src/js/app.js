(function() {
  var authorInfo = getAuthorInfo();
  setAuthorInfo(authorInfo);
})();

function getAuthorInfo() {
  var output = {};
  if (window.location.hash !== "") {
    var hashData = window.location.hash.substr(1).split("&");
    for (var i=0;  i < hashData.length; i++) {
      var hashValue = hashData[i].split("=");
      output[unescape(hashValue[0])] = (hashValue.length > 1 && hashValue[1] !== "") ? unescape(hashValue[1]) : null;
    }
  }
  return output;
}

function setAuthorInfo(options) {
  var authorEl = document.querySelector('span.author');
  var author = {
    name : options.name || "&lt;AUTHOR&gt;",
    link : options.link
  };
  if(author.link){
    var link = document.createElement("a");
    authorEl.appendChild(link);
    link.href = author.link;
    link.target = "_blank"
    link.innerHTML = (author.name);
  }
  else{
    authorEl.innerHTML = author.name;
  }
}
