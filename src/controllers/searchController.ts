import { Request, Response } from 'express';

import { Com } from '../models/com';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Com.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });

}