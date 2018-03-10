function saludos(){
  var array = ["","A","B","C","D","E","F","G","H","I","J",""];
  var caja = "";

  for(i= 0; i<12; i++){
      caja += '<div class="col-sm-1 box">'+array[i]+'</div>';
  }
  document.getElementById('content').innerHTML=caja;
  console.log(caja);
}
