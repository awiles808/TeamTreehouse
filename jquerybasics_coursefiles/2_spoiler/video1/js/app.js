
$('.spoiler').on('click', 'button', function (e){
  console.log(e.target);
     // Show the spoiler text
  // $('.spoiler span').show();
    // Hide the "Reveal Spoiler" button
  $(e.target).hide();
}) ;


//Create the "Reveal Spoiler" previewButton
const $button = $('<button>Reveal Spoiler</button>');
//Append to the web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();
