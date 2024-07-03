const container = document.getElementById('container');

const displayQuizzTitle = () => {
    const quizzTitle = document.createElement('h1');
    quizzTitle.textContent = 'QuizzDeMerde';
    container.appendChild(quizzTitle);
}

const displayQuestion = () => {
    const question = document.createElement('h1');
    question.textContent = 'Votre question ici';
    container.appendChild(question);
}

const displayPropositionList = () => {
    const list = document.createElement('ul')
    const propArray = ['réponse 1', 'réponse 2', 'réponse 3', 'réponse 4'];

    container.appendChild(list);

    propArray.forEach(newProposition => {
        const proposition = document.createElement('li');
        const radioButton = document.createElement('input');
        const checkbox = document.createElement('input');

        radioButton.type = 'radio';
        checkbox.type = 'checkbox';
        proposition.textContent = newProposition;

        list.appendChild(proposition);
        proposition.appendChild(checkbox);
        proposition.appendChild(radioButton);

    });
}

const validateButton = () => {
    const validationButton = document.createElement('button');
    validationButton.textContent = 'Valider';
    container.appendChild(validationButton);
}

const nextQuestionButton = () => {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Question suivante';
    container.appendChild(nextButton);
}

const successMessage = () => {
    const successMessage = document.createElement('h3');
    successMessage.textContent = 'Bonne réponse chewbacca !';
    container.appendChild(successMessage);
}

displayQuizzTitle();
displayQuestion();
displayPropositionList();
validateButton();
nextQuestionButton();
successMessage();