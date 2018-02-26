console.log("background script");



var sel_word = "a";
var meaning="a";

function receiver(request, sender, sendResponse){
  console.log("in receiver");
  word = request.txt;
  var url = 'http://api.wordnik.com:80/v4/word.json/';
  url += word;
  url += '/definitions?limit=3&includeRelated=false';
  url += '&sourceDictionaries=all&useCanonical=false';
  url += '&includeTags=false';
  url += '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
  console.log(word);
  console.log(url);
  var request = new XMLHttpRequest();
  request.open('GET',url);
  request.onload = function(){
    meaning = JSON.parse(request.responseText);
    console.log(meaning[0].text);
  }
  request.send();
  //localStorage.setItem("test",word);
  //console.log(localStorage.getItem("test"));
  var sel_word = {
    text : word,
    word_meaning : meaning
  }
  console.log(sel_word);
  chrome.runtime.sendMessage(sel_word);
}

chrome.runtime.onMessage.addListener(receiver);
