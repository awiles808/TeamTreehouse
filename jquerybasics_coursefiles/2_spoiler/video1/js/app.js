
$('.spoiler').on('click', 'button', function (e){
  console.log(e.target);
     // Show the spoiler text
  $(this).prev().show();
    // Hide the "Reveal Spoiler" button
  $(this).hide();
}) ;


//Create the "Reveal Spoiler" previewButton
const $button = $('<button>Reveal Spoiler</button>');
//Append to the web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();
