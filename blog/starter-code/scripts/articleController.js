(function(module) {
  var articlesController = {};

  // DONE: Create the `articles` table when the controller first loads, with
  //       code that was previously in index.html.
  Article.createTable();
  // DONE: Make the function below fetch and render the articles. It should look
  //       very similiar to code you wrote before.
  // DONE: Hide the main section elements; reveal the #articles section:
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('#about').hide();
    $('#articles').show();
    console.log('articlecontroller');
  };
  articlesController.index();


  module.articlesController = articlesController;
})(window);
