const revealButton = document.querySelector(".reveal-btn");

const secret = document.querySelector(".secret")

function revealSecret(){
    if(secret.classList.contains('reveal-btn')){
        revealButton.style.width = '95%'
        secret.classList.remove('reveal-btn')
    } else {
        revealButton.style.width = '20%'
        secret.classList.add('reveal-btn')
    }
}
revealButton.addEventListener('click', revealSecret)

const backToTop = document.querySelector('.back-to-top')
backToTop.style.display = 'none';
const scrollElement = window;

// Attach a scroll event listener
scrollElement.addEventListener('scroll', handleScroll);

// Define the scroll event handler function
function handleScroll(event) {
    // Log the current scroll position
    if(scrollElement.scrollY >= 400) {
        console.log(scrollElement.scrollY);
        backToTop.style.display = 'block';
    } else {
        console.log(scrollElement.scrollY);
        backToTop.style.display = 'none';
    }
}
