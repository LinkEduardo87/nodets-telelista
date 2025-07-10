"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Com = void 0;
const data = [
    {
        type: 'comercio',
        image: 'banner_lojas.jpg',
        name: 'Mercadinho Fátima',
        horario: '7:00 as 20:00',
        telefone: '(88) 9 98119-3330'
    },
    {
        type: 'saude',
        image: 'banner_lojas.jpg',
        name: 'Cantinho da Moda',
        horario: '8:00 as 17:30',
        telefone: '(88) 9 98119-3330'
    },
    {
        type: 'servico',
        image: 'banner_lojas.jpg',
        name: 'O pedreiro',
        horario: '8:00 as 17:30',
        telefone: '(88) 9 98119-3330'
    },
];
exports.Com = {
    getAll: () => {
        return data;
    },
    getFromType: (type) => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name) => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};
