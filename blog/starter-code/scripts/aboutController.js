(function(module) {
  var aboutController = {};

  // DONE: Write this function to hide all main section elements,
  //       then show only the #about section.
  aboutController.index = function() {
    $('#articles').hide();
    $('#about').show();
    console.log('aboutcontroller');
  };

  aboutController.index();

  module.aboutController = aboutController;
})(window);
