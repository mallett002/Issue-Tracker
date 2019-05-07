const moment = require('moment');

module.exports = (req, res) => {
    const id = req.body._id;
    const title = req.body.issue_title;
    const text = req.body.issue_text;
    const createdBy = req.body.created_by;
    const assignedTo = req.body.assigned_to;
    const statusText = req.body.status_text;
    const closeIssue = req.body.close_issue;
    const date = moment();
    const updated_on = date.format("dddd, MMMM Do YYYY, h:mm:ss a");

    // use id to find one and update

    const payload = {
        title,
        text,
        createdBy,
        assignedTo,
        statusText,
        closeIssue,
        updated_on
    };

    console.log(payload);
};
