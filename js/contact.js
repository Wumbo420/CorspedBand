$(document).ready(function()  {
    $("#sect .button").click(function() {
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;  
        
        var name = $("#form_name").val();
        var email = $("#form_email").val();
        var message = $("#form_message").val();
        var dataString = 'name='+ name + '&email=' + email + '&message=' + message;

        $.ajax({
            type: "POST",
            url: "php/email.php",
            data: dataString,
            success: function(){
            $('.success').fadeIn(1000);
            }
        });
        return false;
    });
});
//Autocomplete plugin
$( function() {
    var availableTags = [
      "Album",
      "Art",
      "Band",
      "Bandcamp",
      "Cd",
      "Clothing",
      "Death Metal",
      "Drums",
      "Errors",
      "Fan",
      "Guitar",
      "Management",
      "Marketing",
      "Merch",
      "Music",
      "Records",
      "Songs",
      "Tour",
      "Tim",
      "Website",
      "Vinlys",
      "Vocal",
    ];
    $( "#form_subject" ).autocomplete({
      source: availableTags
    });
  });