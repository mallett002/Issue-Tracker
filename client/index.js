import axios from 'axios';

const userStoriesBtn = document.getElementById('user-stories-btn');
const userStories = document.getElementById('user-stories');

userStoriesBtn.addEventListener('click', (e) => {
   userStories.scrollIntoView({behavior: 'smooth', block: 'center'});
});

const getIssuesForm = document.getElementById('getIssuesForm');
const createIssuesForm = document.getElementById('createIssuesForm');
const updateIssuesForm = document.getElementById('updateIssuesForm');
const deleteIssuesForm = document.getElementById('deleteIssuesForm');

createIssuesForm.addEventListener('submit', (e) => {
   e.preventDefault();
   axios.post("/api/issues/")
       .then(res => console.log("Sent successfully with response: " + res))
       .catch(e => {
          throw Error(e);
       });

   //    // Trying to figure out how to insert post data from the inputs, Or do I even have to?
   // axios.post("/api/issues/", {
   //    // data from the inputs
   //    title: input.name ?
   // })
});
