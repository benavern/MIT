function getAuthorInfo(){var n={};if(""!==window.location.hash)for(var e=window.location.hash.substr(1).split("&"),t=0;t<e.length;t++){var a=e[t].split("=");n[unescape(a[0])]=a.length>1&&""!==a[1]?unescape(a[1]):null}return n}function setAuthorInfo(n){var e=document.querySelector("span.author"),t={name:n.name||"&lt;AUTHOR&gt;",link:n.link};if(t.link){var a=document.createElement("a");e.appendChild(a),a.href=t.link,a.target="_blank",a.innerHTML=t.name}else e.innerHTML=t.name}!function(){var n=getAuthorInfo();setAuthorInfo(n)}();