const createIssue = require('../controllers/createIssue');
const getIssues = require('../controllers/getIssues');

module.exports = (app) => {
  app.route('/api/issues/')
      .get(getIssues)

      .post(createIssue)

      .put(function (req, res){
          const project = req.params.project;

      })

      .delete(function (req, res){
          const project = req.params.project;

      });
};
