function myFunction() {
    var t = document.createTextNode("Loading Game...");
    document.body.appendChild(t);
}

setTimeout(doSomething, 3000);

function myFunction() {
   var t = document.createTextNode("Press P to Punch the Bag! Press E to Open Your Inventory!")
   document.body.apeendChild(t);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
}

$(document).keypress(function(e) {
    if(e.which == 25) {
        var t = document.createTextNode("You punched the bag")
        document.body.apeendChild(t);
}

$(document).keypress(function(e)) {
    if(e.which == 18) {
        var t = document.createTextNode("You have a phone. Use it by pressing C")
        document.body.apeendChild(t);
}

$(document).keypress(function(e)) {
    if(e.which == 46) {
        var t = document.createTextNode("You are now in a Tournment!!! Press Up Arrow to Block, Right Arrow to Hit, or Esc to forefit")
        document.body.apeendChild(t);
}

$(document).keypress(function(e)) {
    if(e.which == 100) {
        var t = document.createTextNode("You blocked the opponents hit")
        document.body.apeendChild(t);
    if(e.which == 103) {
        var t = document.createTextNode("You got hit before you hit, you lost!")
        document.body.apeendChild(t);
    if(e.which == 1) {
        var t = document.createTextNode("You forefit. Press P to punch your punching bag or C to call back to the tournement")
        document.body.apeendChild(t);
    else
        var t = document.createTextNode("You didn't do any self defending so you were hit and knocked out of the competion")
        document.body.apeendChild(t);
    }
