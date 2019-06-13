const issueContainer = document.getElementById('issues-list');

module.exports = (data) => {
    data.map(issue => {
        console.log(issue);

        // make the container div for the issue
        const issueDiv = document.createElement('div');
        issueDiv.classList.add('retrieved-issue');

        // TODO: make contents for each database column
        // TODO: Could possibly create the div first for layout in HTML and design it. then come in here and create it.
        const contents = document.createElement('ul');
        // issueDiv.appendChild(contents);

        issueContainer.appendChild(issueDiv);
    });
};
