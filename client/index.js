const userStoriesBtn = document.getElementById('user-stories-btn');
const userStories = document.getElementById('user-stories');

userStoriesBtn.addEventListener('click', (e) => {
   userStories.scrollIntoView({behavior: 'smooth', block: 'center'});
});
