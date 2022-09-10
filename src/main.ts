import "./assets/styles/main.css";
import { Navbar } from "./components/Layout/Navbar";
import { Products } from "./components/public/Card";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
    ${Navbar}
	${Products()}
`;


   
