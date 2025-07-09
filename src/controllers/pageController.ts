import { Request, Response } from 'express';
import { title } from 'process';

import { Com } from '../models/com';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Com.getAll();
   
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'AQUI VOCÊ ENCONTRA TUDO O QUE PROCURA',
            background: 'banner_inicio.png'
        },
        list
    });

}

export const comercios = (req: Request, res: Response) => {
    let list = Com.getFromType('comercio');

    res.render('pages/page', {
        menu: createMenuObject('comercio'),        
        banner: {
            title: 'LISTA DOS COMÉRCIOS',
            background: 'banner_comercios.jpg'
        },
        list
    });
}

export const lojas = (req: Request, res: Response) => {
    let list = Com.getFromType('saude');
    
    res.render('pages/page', {
        menu: createMenuObject('saude'),        
        banner: {
            title: 'SAÚDE EM GERAL',
            background: 'banner_lojas.jpg'
        },
        list
    });
}

export const servicos = (req: Request, res: Response) => {
    let list = Com.getFromType('servico');
    
    res.render('pages/page', {
        menu: createMenuObject('servico'),        
        banner: {
            title: 'LISTA DE PRESTADORES DE SERVIÇOS',
            background: 'banner_servicos.jpg'
        },
        list
    });
}