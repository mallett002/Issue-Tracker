const moment = require('moment');

module.exports = (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const createdBy = req.body.createdBy;
    const assignedTo = req.body.assignedTo;
    const statusText = req.body.statusText;
    const date = moment();
    let created_on = date.format("dddd, MMMM Do YYYY, h:mm:ss a");
    let updated_on = "";
    const closed_issue = "false";

    // Create query with form data
    const queryString = `INSERT INTO issues
      (issue_title, issue_text, created_by, assigned_to, status_text, created_on, updated_on, closed_issue) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [title, text, createdBy, assignedTo, statusText, created_on, updated_on, closed_issue];

    // Send data to db
    db.query(queryString, values, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
};
