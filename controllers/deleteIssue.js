module.exports = (req, res) => {
    const id = req.body.id;
    console.log(`searching database for id ${id}`);

    // find one with id of "req.body.id" and delete it
    // send response

    res.status(201).send(`deleted issue with id ${id}`);
};
