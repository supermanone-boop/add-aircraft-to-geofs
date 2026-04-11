javascript:(function(){
  var url = prompt("aircraft.jsonのRaw URLを貼って");
  if(url){
    geofs.aircraft.loadFromUrl(url);
  }
})();