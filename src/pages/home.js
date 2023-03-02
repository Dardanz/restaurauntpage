import asleep from "../img/Asleep_at_computer-0.png"
import "../style.css"

const home = () => {

const container = document.createElement("div");
const asleeppic = document.createElement("img");
asleeppic.src = asleep
container.append(asleeppic);

return container;
      
}

export default home;