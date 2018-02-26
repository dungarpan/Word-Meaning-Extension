// urlpattern =http://api.wordnik.com:80/v4/word.json/cipher/definitions?limit=3&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5

function wordInPopup(request, sender, sendResponse)
{
  console.log("in popup");
  let my_word = request.text;
  let my_meaning = request.word_meaning;
  console.log(my_word);
  console.log(my_meaning);
  //console.log(parsed_data);
}
chrome.runtime.onMessage.addListener(wordInPopup);
