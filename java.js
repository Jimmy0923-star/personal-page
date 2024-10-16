window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});
