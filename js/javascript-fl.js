// Display the ticket order form  when the user clicks on one of the "Buy Now" button

function myPrompt() {

  var ticketOrder = document.getElementById("ticket-order");
  ticketOrder.style.display = 'block'; // display the ticket order form

  // Scroll down to the ticket order form
  var elmnt = document.getElementById("ticket-order");
  elmnt.scrollIntoView();
}

// Calculate the tickets total price when the user choose the quantity on page tickets.html

$(document).ready(function() {
    $('.qty').change(function(){
        // Get the quantity entered by the user
        var stdQuantity = $("#standard-qty").val();
        var childQuantity = $("#child-qty").val();
        var familyQuantity = $("#family-qty").val();
        console.log(stdQuantity);
        console.log(childQuantity);
        console.log(familyQuantity);

        // ticket prices
        var stdPrice = 25;
        var childPrice = 15;
        var familyPrice =50;

        var totalPrice = stdQuantity * stdPrice + childQuantity * childPrice + familyQuantity * familyPrice

        // Display the total price to the user
        $("#total-price").text('€' + totalPrice);
  });
});

