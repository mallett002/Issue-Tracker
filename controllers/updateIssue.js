const moment = require('moment');

module.exports = (req, res) => {
    const id = req.body.id;
    const issue_title = req.body.title;
    const issue_text = req.body.text;
    const created_by = req.body.createdBy;
    const assigned_to = req.body.assignedTo;
    const status_text = req.body.statusText;
    const date = moment();
    const updated_on = date.format("dddd, MMMM Do YYYY, h:mm:ss a");
    const closed_issue = req.body.closeIssue ? "true" : "";

    const valuesByDBName = {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
        updated_on,
        closed_issue,
        id
    };

    const updatedValues = addValuesToUpdate(valuesByDBName);
    const updateIssueQuery = getUpdateQueryString(valuesByDBName);
    const getIssueQuery =  `SELECT issue_title FROM issues WHERE id = ?`;

    db.query(getIssueQuery, [id], (err, result) => {
        if (err || !result.length) {
            return res.status(500).send(err);
        }
    });

    db.query(updateIssueQuery, updatedValues, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
};

function addValuesToUpdate(values) {
    let newValues = [];

    Object.keys(values).forEach(key => {
       if (values[key]) {
           newValues.push(values[key]);
       }
    });
    return newValues;
}

// UPDATE issues SETTony = ?, Wednesday, June 12th 2019, 5:04:25 am = ?, false = ?, 55 = ?55 = ?,  WHERE id = ?
function getUpdateQueryString(values) {
    let query = "UPDATE issues SET";
    let valuesToUpdate = [];

    Object.keys(values).forEach(key => {
        if (values[key] && key !== "id") {
            valuesToUpdate.push(key);
        }
    });

    valuesToUpdate.forEach((val, i, arr) => {
       if (i === arr.length - 1) {
           query += " " + val + " = ?";
       } else {
           query += " " + val + " = ?,";
       }
    });

    query += " WHERE id = ?";
    return query;
}
