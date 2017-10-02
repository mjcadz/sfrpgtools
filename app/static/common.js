
function share(id) {
  
  if (id == "facebook"){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL));
  }
  else if (id == "twitter"){
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20' + encodeURIComponent(document.URL));
  }
  else if (id == "reddit"){
    window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title));
  }
  else if (id == "github"){
    window.open('https://github.com/mjcadz/weapon-gen-app');
  }
  ga('send', 'event', 'Share', id);
  return false;
}
