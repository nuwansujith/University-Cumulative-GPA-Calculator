// Social Media Sharing
document.querySelector('.share-twitter').addEventListener('click', function() {
    const gpa = document.getElementById('cumulative-gpa').textContent;
    const text = `My cumulative GPA is ${gpa}! Calculated with this handy GPA calculator:`;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
});

document.querySelector('.share-facebook').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

document.querySelector('.share-linkedin').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
});