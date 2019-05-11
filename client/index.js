import axios from 'axios';

// Scrolling to user stories
const userStoriesBtn = document.getElementById('user-stories-btn');
const userStories = document.getElementById('user-stories');

userStoriesBtn.addEventListener('click', (e) => {
    e.preventDefault();
   userStories.scrollIntoView({behavior: 'smooth', block: 'center'});
});

// Forms
const getIssuesForm = document.getElementById('getIssuesForm');
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
       .then(res => console.log("Sent successfully with response: " + res))
       .catch(e => {
          throw Error(e);
       });
});
