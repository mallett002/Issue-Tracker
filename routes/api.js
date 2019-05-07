const createIssue = require('../controllers/createIssue');
const getIssues = require('../controllers/getIssues');
const updateIssue = require('../controllers/updateIssue');

module.exports = (app) => {
  app.route('/api/issues/')
      .get(getIssues)

      .post(createIssue)

      .put(updateIssue)

      .delete(function (req, res){
          const project = req.params.project;

      });
};
