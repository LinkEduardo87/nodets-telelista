type ComType = "comercio" | "saude" | "servico";

type Com = {
    type: ComType,
    image: string,
    name: string,
    horario: string,
    telefone: string
};

const data: Com [] = [

    {
        type:'comercio',
        image:'banner_lojas.jpg',
        name:'Mercadinho Fátima',
        horario:'7:00 as 20:00',
        telefone:'(88) 9 98119-3330'
    },
    {
        type:'saude',
        image:'banner_lojas.jpg',
        name:'Cantinho da Moda',
        horario: '8:00 as 17:30',
        telefone:'(88) 9 98119-3330'
    },
    {
        type:'servico',
        image:'banner_lojas.jpg',
        name:'O pedreiro',
        horario: '8:00 as 17:30',
        telefone:'(88) 9 98119-3330'
    },

];

export const Com = {
    getAll: (): Com [] => {
        return data;
    },
    getFromType: (type: ComType): Com[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Com[] => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
};