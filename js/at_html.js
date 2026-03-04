import * as at_functions from "./at_functions.js";

const matches = {
    "@default-themes": true,
};

export const call = () => {
    document.body.childNodes.forEach((elem) => {
        if (elem instanceof HTMLElement) {
            for (const attr of elem.attributes) {
                // console.info(attr.name);
                const match = matches[attr.name];

                if (match) {
                    // console.log(match);
                    // console.log(at_functions);

                    if (match !== null) {
                        // console.info("Match?", match);
                        const func_name = attr.name
                            .replaceAll("@", "")
                            .replaceAll("-", "_");
                        // console.info("Key used as function name:", func_name);
                        const func =
                            at_functions[func_name];
                        func();
                    }
                }
            }
        }
    });
};
