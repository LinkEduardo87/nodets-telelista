type MenuOptions = '' | 'all' | 'comercio' | 'saude' | 'servico';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        comercio: false,
        saude: false,
        servico: false
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}