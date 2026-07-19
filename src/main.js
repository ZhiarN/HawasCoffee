import "./styles/cssreset.css";
import "./styles/styles.css";
import "./styles/desktop.css";
import "./assets/fonts/fonts.css"
import './styles/animation.css'
import "./animate.js"
import { animate } from "./animate.js";
import { addListener } from "./listener.js";

function pageInit() {
	addListener();
	animate();
}

pageInit();
