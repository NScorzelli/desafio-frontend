export const user = [

];

export const validarUsuario = (email: string, senha: string) => {

    if(email === 'nicolas.nascimento@cooperx.coop.br' && senha === '123456')
    {
        return true;
    }

    return false;
}