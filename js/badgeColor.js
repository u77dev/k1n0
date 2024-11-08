let badges = document.querySelectorAll('.badge');

badges.forEach(function(badge) {
    if (badge.innerHTML >= 7 ) {
        badge.classList.add('k-badge-green');
    } else if (badge.innerHTML >= 6) {
        badge.classList.add('k-badge-yellow');
    } else {
        badge.classList.add('k-badge-red');
    }
})