// import * as config from "./config.js";


/**
 * 
 * @param {HTMLStyleElement} style_elem 
 */
const default_light_theme = (style_elem) => {
    style_elem.textContent = "body {background-color: #fff; color: #444}";
}
/**
 * 
 * @param {HTMLStyleElement} style_elem 
 */
const default_dark_theme = (style_elem) => {
    style_elem.textContent =
    "@media (prefers-color-scheme: dark) {body {background-color: #444; color: #fff}}";
}

export const default_themes = () => {
    const style_elem = document.createElement('style');
    default_light_theme(style_elem);
    default_dark_theme(style_elem);
    document.body.appendChild(style_elem);
}