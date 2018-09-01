const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf')

$pdfs.on('click', function(e) {
  e.preventDefault();
  //When user clicks on pdf check if checkbox is checked
  //if zero checkboxes are checked
  //prevent download of document
  //alert user
  //else allow the download
})
