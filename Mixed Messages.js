const randomNumberTwo = () => {
    return Math.floor(Math.random()*2);
}

const randomNumberFive = () => {
    return Math.floor(Math.random()*5);
} 

const randomNumberReady = () => {
    return Math.floor(Math.random()*3);
} 

const randomReadyFor = () => {
    let randomNum = randomNumberFive();
    let readyFor = '';
    switch(randomNum){
        case 0: 
        return readyFor = 'holiday!'
        case 1:
        return readyFor = 'a new pet!'
        case 2: 
        return readyFor = 'a new home!'
        case 3:
        return readyFor = 'a baby!'
        case 4:
        return readyFor = 'a new study!'
        case 5:
        return readyFor = 'a new job!'
    }
    return readyFor
}


const readyOrNot = () => {
    let readyOrNotNum = randomNumberReady();
    let readyOrNot = '';
    switch(readyOrNotNum){
        case 0:
        return readyOrNot = "You are NOT ready for"
        case 1: 
        return readyOrNot = "You are SO ready for"
        case 2:
        return readyOrNot = "You might be ready for"
    }
    return readyOrNot
}

const mixedMessages = () => {
    if(randomNumberTwo() === 0){
    let readyForMessage = randomReadyFor();
    let readyOrNotMessage = readyOrNot();
    console.log('--------------------------------------');
    console.log('-----------Your message is:-----------');
    return `${readyOrNotMessage} ${readyForMessage}`;
    }
    
    if(randomNumberTwo() === 1){
        console.log('--------------------------------------');
        console.log('-----------Your message is:-----------');
        return `Sorry, I can not help you right now!`
    }
}

console.log(mixedMessages());


