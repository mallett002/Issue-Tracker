module.exports = (req, res) => {
    const id = req.body.id;

    // find one with id of "req.body.id" and delete it
    const deleteIssueQuery = `DELETE FROM issues WHERE id = ?`;
    const getIssueQuery =  `SELECT * FROM issues WHERE id = ?`;

    db.query(getIssueQuery, [id], (err, result) => {
       if (err) {
           return res.status(500).send(err);
       }

        db.query(deleteIssueQuery, [id], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    });
};
