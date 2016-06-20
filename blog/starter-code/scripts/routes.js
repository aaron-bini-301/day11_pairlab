// DONE: Configure our two routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

// DONE: What function do we call to activate page.js? Call it to run that code right here.

// If you did the prework for today, you should be able to refer to your sandbox app for these TODOs.

console.log('\n* routes.js loaded *\n\n'); // Debug -- verify this in the console when the page (re)loads.

// page(...
function setRouteMapping() {
  page.base('/');
  page('', articlesController.index);
  page('about', aboutController.index);
  page('*', pageNotFound);

  page();
}

// function showArticles () {
//   $('.tab-content').hide();
//   $('#' + $(this).data('content')).fadeIn();
// }

// function showAbout () {
//
// }

function pageNotFound() {
  $('#notFound').html('<h3>OMG!</h3><p>The page at "'
    + location.hostname + location.pathname + location.search
    + '" can\'t be found.'
  );
  $('#articles').hide();
  $('#about').hide();
  $('#notFound').fadeIn(700);
}

setRouteMapping();
