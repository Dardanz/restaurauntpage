import home from "./pages/home.js";
import footer from "./pages/footer.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";
import clearpage from "./pages/clearpage.js";

const content = document.querySelector('#content');

footer();

content.prepend(home());
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");


homeButton.addEventListener('click', function(){
    clearpage();
    content.prepend(home());

})

menuButton.addEventListener('click', function(){
    clearpage();
    content.prepend(menu());

})

aboutButton.addEventListener('click', function(){
    clearpage();
    content.prepend(about());
})