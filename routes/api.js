const createIssue = require('../controllers/createIssue');
const getIssues = require('../controllers/getIssues');
const updateIssue = require('../controllers/updateIssue');
const deleteIssue = require('../controllers/deleteIssue');

module.exports = (app) => {
    app.all('/', (req, res) => {
        res.sendFile(process.cwd() + '/views/index.html');
    });

    app.route('/api/issues/')
        .get(getIssues)
        .post(createIssue)
        .put(updateIssue)
        .delete(deleteIssue);
};
