interface GetTextProps {
    content: {
        rendered: string
    }
    quantity: number
    initial: number
}

export const getText = ({ content, quantity, initial }: GetTextProps) => {
    const contentHTML = content.rendered;
    const tempElement = document.createElement('div');
    tempElement.innerHTML = contentHTML;
    const contentText = tempElement.textContent;

    const sentences = contentText!.split('.'); // Divide o texto em frases
    const threeSentences = sentences.slice(initial, quantity); // Pega as três primeiras frases
    const result = threeSentences.join('. ');

    return result;
}