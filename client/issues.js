import axios from 'axios';

const getIssuesForm = document.getElementById('getIssuesForm');
console.log({getIssuesForm});

getIssuesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.get({
        url: 'api/issues'
    })
        .then(res => {
            console.log(res);
        }).catch(e => {
            console.log("Error: " + e);
    });
});
