javascript:(function(){
  var url = prompt("https://raw.githubusercontent.com/supermanone-boop/add-aircraft-to-geofs/main/aircraft.json");
  if(url){
    geofs.aircraft.loadFromUrl(url);
  }
})();