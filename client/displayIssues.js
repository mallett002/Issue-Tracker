const issueUl = document.getElementById('issues-list');

module.exports = (data) => {
    data.map(issue => {
        console.log(issue);

        // make the container div for the issue
        const issueLi = document.createElement('li');
        const card = document.createElement('div');
        card.className = "card";

        // Make card header
        const cardHeader = document.createElement('div');
        cardHeader.className = "card-header alert alert-secondary issue-header";
        cardHeader.setAttribute('role', 'alert');

        const cardTitle = document.createElement('p');
        const titleIssueNumber = document.createElement('span');
        titleIssueNumber.textContent = `#${issue.id}`;
        titleIssueNumber.style.color = issue.closed_issue === 'true' ? '#9e3b3b' : '#448844';
        cardTitle.textContent = ` ${issue.issue_title}`;
        cardTitle.prepend(titleIssueNumber);
        cardHeader.appendChild(cardTitle);

        const issueCaret = document.createElement('i');
        issueCaret.className = 'fa issue-caret';
        issueCaret.innerHTML = '&#xf0d7;';

        cardHeader.appendChild(issueCaret);

        // Make card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body issue-card-body';
        const cardContent = document.createElement('div');
        cardContent.className = 'issue-content content-hidden';
        const cardText = document.createElement('p');
        const assignedTo = document.createElement('p');
        const closedIssue = document.createElement('p');
        cardText.textContent = issue.issue_text;
        assignedTo.textContent = `Assigned to: ${issue.assigned_to}`;
        closedIssue.textContent = `Closed issue: ${issue.closed_issue}`;
        cardContent.appendChild(cardText);

        if (issue.assigned_to) {
            cardContent.appendChild(assignedTo);
        }

        cardContent.appendChild(closedIssue);
        cardBody.appendChild(cardContent);

        const issueInfo = document.createElement('div');
        issueInfo.className = 'issue-info';
        const createdOn = document.createElement('p');
        const updatedOn = document.createElement('p');
        createdOn.className = 'created-on';
        updatedOn.className = 'updated-on';
        createdOn.textContent = `Created on ${issue.created_on}`;
        updatedOn.textContent = `Updated on ${issue.updated_on}`;
        issueInfo.appendChild(createdOn);

        if (issue.updated_on) {
            issueInfo.appendChild(updatedOn);
        }

        cardBody.appendChild(issueInfo);

        // Append main contents
        issueUl.appendChild(issueLi);
        issueLi.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        issueCaret.addEventListener('click', () => {
            issueCaret.classList.contains('caret-flipped') ?
                issueCaret.classList.remove('caret-flipped') :
                issueCaret.classList.add('caret-flipped');

            cardContent.classList.contains('content-hidden') ?
                cardContent.classList.remove('content-hidden') :
                cardContent.classList.add('content-hidden');
        });
    });
};
