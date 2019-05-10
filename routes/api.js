const createIssue = require('../controllers/createIssue');
const getIssues = require('../controllers/getIssues');
const updateIssue = require('../controllers/updateIssue');
const deleteIssue = require('../controllers/deleteIssue');

module.exports = (app) => {
    app.route('/api/issues/')
        .get(getIssues)
        .post(createIssue)
        .put(updateIssue)
        .delete(deleteIssue);
};
