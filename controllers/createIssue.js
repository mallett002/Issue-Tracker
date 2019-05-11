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

    console.log({payload});

    res.status(201).send(`created a new issue with title ${title}`);
};
