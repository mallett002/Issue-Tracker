module.exports = (req, res) => {
    console.log('Retrieving issues...');
    const title = req.query.assigned_to;
    const open = req.query.open_issues;
    let querySearch = {title};

    if (open) {
        querySearch.open = true
    }

    console.log({querySearch});

    res.json(querySearch);
};
