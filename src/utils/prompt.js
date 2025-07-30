import promptSync from 'prompt-sync';

async function getInputNumber(message) {
    let prompt = promptSync();
    let number = Number.parseInt(prompt(message));
    
    return number;
}

export default getInputNumber;
