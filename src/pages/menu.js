
import pillimage from "../img/pill.jpg";


const menu = () => {
    const container = document.createElement("div");

    const pill = document.createElement("img");
    pill.src=pillimage;
    pill.id="pill";
    container.append(pill);

    const paragraph = document.createElement("p");
    paragraph.textContent="Blue pill, Red pill, or Steak";
    paragraph.id="paragraph";
    container.append(paragraph);

    return container

}

export default menu;