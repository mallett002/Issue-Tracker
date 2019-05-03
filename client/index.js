const form = document.getElementById('testForm');
const form2 = document.getElementById('testForm2');
const form3 = document.getElementById('testForm3');
const userStoriesBtn = document.getElementById('user-stories-btn');
const userStories = document.getElementById('user-stories');

userStoriesBtn.addEventListener('click', (e) => {
   userStories.scrollIntoView({behavior: 'smooth', block: 'center'});
});

/*
$(function() {
    $('#testForm').submit(function(e) {
        $.ajax({
            url: '/api/issues/apitest',
            type: 'post',
            data: $('#testForm').serialize(),
            success: function(data) {
                $('#jsonResult').text(JSON.stringify(data));
            }
        });
        e.preventDefault();
    });
    $('#testForm2').submit(function(e) {
        $.ajax({
            url: '/api/issues/apitest',
            type: 'put',
            data: $('#testForm2').serialize(),
            success: function(data) {
                $('#jsonResult').text(JSON.stringify(data));
            }
        });
        e.preventDefault();
    });
    $('#testForm3').submit(function(e) {
        $.ajax({
            url: '/api/issues/apitest',
            type: 'delete',
            data: $('#testForm3').serialize(),
            success: function(data) {
                $('#jsonResult').text(JSON.stringify(data));
            }
        });
        e.preventDefault();
    });
});*/
