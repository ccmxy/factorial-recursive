

var getFactorial = function(number) {
  var temp;
  if(number < 1){
    return 1;
  }
  temp = number * getFactorial(number - 1);
  return temp;
};

$(document).ready(function() {
  $("form#get-fact").submit(function(event) {
    var number = parseInt($("input#number").val());
    var factorial = getFactorial(number);
    $(".number").text(number);
    $(".factorial").text(factorial);
    $('#theFactorial').show();
    event.preventDefault();
  });
});
