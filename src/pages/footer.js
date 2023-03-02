const footer = () => {


    console.log("hello");
    const content = document.querySelector("#content");
    
    const footercontainer = document.createElement("div");
    footercontainer.id = "footer-container";

    const text = document.createElement("div");
    text.classList.add("footer");
    text.innerHTML = "<h2>Which pill will it be Neo?</h2>";
    footercontainer.append(text);
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    
    const homeButton = document.createElement("button");
    homeButton.classList.add("button", "home-button");
    homeButton.innerText = "Home";
    buttonContainer.append(homeButton);
    
    const menuButton = document.createElement("button");
    menuButton.classList.add("button", "menu-button");
    menuButton.innerText = "Menu";
    buttonContainer.append(menuButton);
    
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button", "about-button");
    aboutButton.innerText = "About";
    buttonContainer.append(aboutButton);
    footercontainer.append(buttonContainer);
    content.append(footercontainer);

    }
    
    export default footer;