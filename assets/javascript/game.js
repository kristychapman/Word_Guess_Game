$(document).ready(function() {
    
var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

letters.forEach(function(letter){
  var letterBtn = $('<button>');
  letterBtn.addClass('letter-button', 'letter', 'letter-button-color');
  letterBtn.data('letter', letter);
  letterBtn.text(letter);
  $("#buttons").append(letterBtn);
} 
});

