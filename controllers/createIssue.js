const moment = require('moment');

module.exports = (req, res) => {
    // The request isn't making it into here when I post from index.js
    const title = req.body.issue_title;
    const text = req.body.issue_text;
    const createdBy = req.body.created_by;
    const assignedTo = req.body.assigned_to;
    const statusText = req.body.status_text;
    const date = moment();

    let created_on = date.format("dddd, MMMM Do YYYY, h:mm:ss a");
    let updated_on = "";

    const payload = {
        title,
        text,
        createdBy,
        assignedTo,
        statusText,
        created_on,
        updated_on,
        open: true,
        _id: 1
    };

    res.status(200).send(payload);
};
