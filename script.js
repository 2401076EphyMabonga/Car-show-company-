// script.js
const feedbackForm = document.getElementById('feedbackForm');
const notification = document.getElementById('notification');

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  notification.innerText = 'Response gotten';
  notification.style.display = 'block';
  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
  feedbackForm.reset();
});
