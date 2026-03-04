// import * as config from "./config.js";


/**
 *
 * @param {HTMLStyleElement} style_elem 
 */
const default_light_theme = (style_elem) => {
    style_elem.textContent += "body {\n    background-color: #fff;\n    color: #444\n}\n";
}
/**
 *
 * @param {HTMLStyleElement} style_elem 
 */
const default_dark_theme = (style_elem) => {
    style_elem.textContent +=
    "@media (prefers-color-scheme: dark) {\n    body {\n        background-color: #444;\n        color: #fff\n    }\n}\n";
}

export const default_themes = () => {
    const style_elem = document.createElement('style');
    default_light_theme(style_elem);
    default_dark_theme(style_elem);
    document.head.appendChild(style_elem);
}