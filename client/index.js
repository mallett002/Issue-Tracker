import axios from 'axios';



// handling user feedback:
const userFeedback = document.getElementById("user-feedback");
const alertDiv = userFeedback.firstElementChild;
const successClass = "alert alert-success";
const errorClass = "alert alert-danger";

function handleFeedback(status) {
    if (status === 'error') {
        alertDiv.classList.add("alert");
        alertDiv.classList.add("alert-danger");
        userFeedback.style.display = 'block';
    } else {
        alertDiv.classList.add("alert");
        alertDiv.classList.add("alert-success");
        userFeedback.style.display = 'block';
    }
    setTimeout(() => {
        userFeedback.style.display = "none";
    }, 4000);
}

// Forms
const createIssuesForm = document.getElementById('createIssuesForm');
const updateIssuesForm = document.getElementById('updateIssuesForm');
const deleteIssuesForm = document.getElementById('deleteIssuesForm');

// Creating a new issue
const issue_title_create = document.getElementById('issue_title_create');
const issue_text_create = document.getElementById('issue_text_create');
const created_by_create = document.getElementById('created_by_create');
const assigned_to_create = document.getElementById('assigned_to_create');
const status_text_create = document.getElementById('status_text_create');

createIssuesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        title: issue_title_create.value,
        text: issue_text_create.value,
        createdBy: created_by_create.value,
        assignedTo: assigned_to_create.value,
        statusText: status_text_create.value
    };

    axios.post("/api/issues/", {
        ...payload
    })
        .then(res => console.log(`Sent successfully with response: ${res}`))
        .catch(e => {
            handleFeedback("error");
            throw Error(e);
        });

    // show user feedback
    handleFeedback('success');

    // clear inputs
    issue_title_create.value = "";
    issue_text_create.value = "";
    created_by_create.value = "";
    assigned_to_create.value = "";
    status_text_create.value = "";
});



// Updating an issue
const idUpdate = document.getElementById('id_update');
const title_update = document.getElementById('title_update');
const text_update = document.getElementById('text_update');
const created_by_update = document.getElementById('created_by_update');
const assigned_to_update = document.getElementById('assigned_to_update');
const status_text_update = document.getElementById('status_text_update');
const close_issue_update = document.getElementById('close_issue_update');

updateIssuesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        id: idUpdate.value,
        title: title_update.value,
        text: text_update.value,
        createdBy: created_by_update.value,
        assignedTo: assigned_to_update.value,
        statusText: status_text_update.value,
        closeIssue: close_issue_update.checked
    };

    axios.put('/api/issues/', {
        ...payload
    })
        .then(res => console.log(`Sent successfully with response ${res}`))
        .catch(e => {
            throw Error(e);
        });
});

// Deleting an issue
const deleteInput = document.getElementById('id_delete');

deleteIssuesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        id: deleteInput.value
    };

    axios({
        method: 'delete',
        url: '/api/issues/',
        data: {...payload}
    })
        .then(res => console.log(`Sent successfully with response ${res}`))
        .catch(e => {
            throw Error(e);
        });
});

// Get issues
const getIssuesForm = document.getElementById('getIssuesForm');
const assignedToInput = document.getElementById('assigned_to');
const openIssuesCheck = document.getElementById('openIssueCheck');

getIssuesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        assigned_to: assignedToInput.value,
        open_issues: openIssuesCheck.checked
    };

    axios({
        method: 'get',
        url: '/api/issues/',
        params: {...payload}
    })
        .then(res => {
            console.log(res);
        }).catch(e => {
        console.log("Error: " + e);
    });
});
