interface GetTextProps {
    content: {
        rendered: string
    }
    quantity: number
    initial: number
}

/**
 * Cada notícia retorna o conteúdo junto com outras tags HTML, ao invés de somente o texto.
 * Então, é necessário formatar. Então, este componente tem essa função.
 */

export const getText = ({ content, quantity, initial }: GetTextProps) => {
    /* Passando o conteúdo para a variável contentHTML */
    const contentHTML = content.rendered;
    /* Agora, criamos uma div */
    const tempElement = document.createElement('div');
    /* Pegamos o conteúdo, que vem com tags HTML e atribuimos a essa div criada */
    tempElement.innerHTML = contentHTML;
    /* Agora, pegamos a div que criamos e retiramos o texto dela */
    const contentText = tempElement.textContent;

    /* Aqui nós pegamos o texto e dividimos em sentenças separadas por . */
    const sentences = contentText!.split('.');

    /* Pegamos o array com a sentença e, de acordo com os valores passados
     * initial -- pegaremos o texto a partir de qual sentença
     * quantity -- até qual sentença nós pegaremos
    */
    const text = sentences.slice(initial, quantity);
    /* Junta as sentenças com . */
    const result = text.join('. ');

    /* Retorna o texto */
    return result;
}