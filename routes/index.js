module.exports = function (app) {

  /**
   * GET - /
   * @description Accueil
   */
  app.get('/', function (req, res) {
    res.render('pages/index');
  });

  /**
   * GET - /contact
   * @description Page de contact
   */
  app.get('/contact', function (req, res) {
    res.render('pages/contact')
  })

  /**
   * GET - /sounds
   * @description Page des sons
   */  
  app.get('/sounds', function (req, res) {
    res.render('pages/sounds')
  })
}