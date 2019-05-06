const createIssue = require('../controllers/createIssue');

module.exports = (app) => {
  app.route('/api/issues/')
      .get((req, res) => {
          const project = req.params.project; // access the url param "project"
      })

      .post(createIssue)

      .put(function (req, res){
          const project = req.params.project;

      })

      .delete(function (req, res){
          const project = req.params.project;

      });
};
