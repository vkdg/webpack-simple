require('jquery');
import { Unicorns } from "./js/unicorns.js";
import "./scss/style.scss";

const unicorns = new Unicorns();

$(document).ready(function(){
	window.$ = jQuery;

	unicorns.hello();
});