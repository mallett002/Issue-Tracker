const issueContainer = document.getElementById('issues-list');

module.exports = (data) => {
    data.map(issue => {
        console.log(issue);

        // make the container div for the issue
        const issueLi = document.createElement('li');
        const issueDiv = document.createElement('div');
        issueDiv.className = "card";
        issueLi.appendChild(issueDiv);

        // Make card header
        const cardHeader = document.createElement('div');
        cardHeader.className = "card-header alert alert-secondary issue-header";
        cardHeader.setAttribute('role', 'alert');

        const cardTitle = document.createElement('p');
        cardTitle.textContent = issue.issue_title;
        cardHeader.appendChild(cardTitle);

        const issueCaret = document.createElement('i');
        issueCaret.className = 'fa issue-caret';
        issueCaret.textContent = '&#xf0d7';

        cardHeader.appendChild(issueCaret);

        // TODO: Make card body

        issueContainer.appendChild(issueLi);
    });
};
