console.log("working");


function formatSelectedText(){
  var selected = window.getSelection();
  var selected_text = selected.toString().toLowerCase();
  if(selected_text.length>0){
    var message = {
      txt : selected_text
    }
    console.log(selected_text);
    chrome.runtime.sendMessage(message);
  }
}
window.addEventListener('mouseup',formatSelectedText);
//chrome.runtime.onMessage.addListener(gotMessage);

/*{
  console.log(message);
  let paras = document.getElementsByTagName('p');
  for ( let i=0 ;i< paras.length; i++)
  {
    //paras[i].innerHTML = message;
  }
}*/
