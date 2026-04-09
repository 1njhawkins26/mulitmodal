// Transcript Toggle Logic
document.querySelectorAll('.transcript-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const transcriptDiv = this.nextElementSibling;
    transcriptDiv.classList.toggle('open');
    
    if (transcriptDiv.classList.contains('open')) {
      this.textContent = 'Hide Transcript';
    } else {
      this.textContent = 'View Transcript';
    }
  });
});

// Feedback Toggle Logic
document.querySelectorAll('.feedback-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      this.textContent = 'Hide Feedback';
    } else {
      this.textContent = 'View Instructor Feedback';
    }
  });
});

document.querySelectorAll('.feedback-btn2').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      this.textContent = 'Hide Feedback';
    } else {
      this.textContent = 'View Peer Feedback';
    }
  });
});