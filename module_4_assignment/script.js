
(function() {
    var names = ["Yamini", "Jackson", "Jenny", "Jimmy", "Paulo", "Franky", "Larry", "Pogba", "Lingard", "Jeremy"];
    
    for (var i = 0; i < names.length; i++) {
        
        var firstLetter = names[i].toLowerCase().charAt(0);
        
        if ( firstLetter == "j" ) {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

})();