const container = document.getElementById('container');

const displayQuestion = () => {
    const question = document.createElement('h1');
    question.textContent = 'Votre question ici';
    container.appendChild(question);
}

const displayPropositionList = () => {
    const list = document.createElement('ul')
    const propArray = ['réponse 1', 'réponse 2', 'réponse 3']

    container.appendChild(list);

    propArray.forEach(newProposition => {
        const proposition = document.createElement('li');
        proposition.textContent = newProposition;
        list.appendChild(proposition);
    });
}

const validateButton = () => {
    const validationButton = document.createElement('button');
    validationButton.textContent = 'Valider';
    container.appendChild(validationButton)
}

const nextQuestionButton = () => {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Question suivante';
    container.appendChild(nextButton)
}

displayQuestion();
displayPropositionList();
validateButton();
nextQuestionButton();