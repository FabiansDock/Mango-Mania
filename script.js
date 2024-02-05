const revealButton = document.querySelector(".reveal-btn");
// const revealButton = document.querySelector("header");
// const div = document.createElement("div")
// div.style.display = "flex"
// div.style.justifyContent = "center"
// div.textContent = 100
// div.style.backgroundColor = "balck"
// revealButton.append(div)
// console.log(revealButton.children)
// const secret = document.querySelector(".secret");

// revealButton.addEventListener("click", () => {
//     secret.style.display = secret.style.display === 'block' ? 'none': 'block';
//     revealButton.style.width = secret.style.display === 'none' ? '90%': '10%';
// });

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
