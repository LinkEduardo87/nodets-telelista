"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicos = exports.lojas = exports.comercios = exports.home = void 0;
const com_1 = require("../models/com");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    let list = com_1.Com.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'AQUI VOCÊ ENCONTRA TUDO O QUE PROCURA',
            background: 'banner_inicio.png'
        },
        list
    });
};
exports.home = home;
const comercios = (req, res) => {
    let list = com_1.Com.getFromType('comercio');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('comercio'),
        banner: {
            title: 'LISTA DOS COMÉRCIOS',
            background: 'banner_comercios.jpg'
        },
        list
    });
};
exports.comercios = comercios;
const lojas = (req, res) => {
    let list = com_1.Com.getFromType('saude');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('saude'),
        banner: {
            title: 'SAÚDE EM GERAL',
            background: 'banner_lojas.jpg'
        },
        list
    });
};
exports.lojas = lojas;
const servicos = (req, res) => {
    let list = com_1.Com.getFromType('servico');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('servico'),
        banner: {
            title: 'LISTA DE PRESTADORES DE SERVIÇOS',
            background: 'banner_servicos.jpg'
        },
        list
    });
};
exports.servicos = servicos;
