const moment = require('moment');

module.exports = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const text = req.body.text;
    const createdBy = req.body.createdBy;
    const assignedTo = req.body.assignedTo;
    const statusText = req.body.statusText;
    const closeIssue = req.body.closeIssue;
    const date = moment();
    const updated_on = date.format("dddd, MMMM Do YYYY, h:mm:ss a");

    // use id to find one and update
    console.log(`Searching db for id: ${id}`);

    const payload = {
        title,
        text,
        createdBy,
        assignedTo,
        statusText,
        closeIssue,
        updated_on
    };

    console.log({payload});

    res.status(201).send(`Updated issue with title ${title}`);
};
