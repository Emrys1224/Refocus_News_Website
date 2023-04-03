// shows/hides the menu when burger menu button is clicked (for smaller screens)
const navBar = document.getElementsByTagName('nav')[0];
function showNav() {
    if (window.getComputedStyle(navBar).display === "none") {
        navBar.style.display = "block";

    } else {
        navBar.style.display = "none";
    }
}

// add listeners for clicking like icon
const likedIcons = document.getElementsByClassName('like_icon');
for (const likedIcon of likedIcons) {
    likedIcon.addEventListener('click', toggleLike);
}

// toggle the like status of an article
function toggleLike() {
    if (this.classList.contains('like_active')) {
        // remove like
        this.classList.remove('like_active');

    } else {
        // like an article
        this.classList.add('like_active');
    }
}

// Shows the check mark for read articles
function markAsRead(event) {
    let clickedBtn = event.target;
    clickedBtn.classList.add('done_active');
}

// Removes the selected article from the page
function removeArticle(event) {
    event.target.closest('.card').remove();
}