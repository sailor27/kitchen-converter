// Business (or back-end) logic:
var multiply = function(number1, number2) {
  return number1 * number2;
};

// Front-end logic:
$(document).ready(function() {
	$("form#input").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#multiply1").val());
    var number2 = 8;
		var result = multiply(number1, number2);
	  $("#output").text(result);
	});
});
