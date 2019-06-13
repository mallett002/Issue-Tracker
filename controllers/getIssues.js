module.exports = (req, res) => {
    const assignedTo = req.query.assigned_to;
    const openIssues = req.query.open_issues ? true : false;
    let values = [];

    let queryString = 'SELECT * FROM issues';

    if (assignedTo || openIssues) {
        queryString += ' WHERE ';
        if (assignedTo) {
            queryString += 'assigned_to = ?';
            values.push(assignedTo);
        }
        if (assignedTo && openIssues) {
            queryString += " && closed_issue = ?";
            values.push('false');
        }
        if (openIssues) {
            queryString += "closed_issue = ?";
            values.push('false');
        }
    }

    queryString += ' ORDER BY id ASC';

    db.query(queryString, [values], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (result.length) {
            res.send(result);
        } else {
            return res.status(500).send(err);
        }
    });
};
