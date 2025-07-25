"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        comercio: false,
        saude: false,
        servico: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuObject = createMenuObject;
