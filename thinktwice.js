var a = document.getElementsByTagName('a');

// make it so that we use a prompt instead, and ask them to type in 
// the reason why they want to proceed with clicking that link

// and then once they've entered the reason, ask them whether they answered a legitimate reason

// submit the data to a little collection that aggregates all my reasons for clicking on things

function questionDecision(event) {
  var t = confirm('Why? WHY??? Why do you want to click that link? You\'re positive that you want to?');
  if (!t) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}

for (var i = 0; i < a.length; i++) {
  a[i].addEventListener('click', questionDecision, false);
}
