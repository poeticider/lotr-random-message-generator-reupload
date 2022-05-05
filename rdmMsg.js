const rdmLotrmsg = {
    _msgSection: {
        greeting: ['Greetings.', 'Mr. Frodo!', 'So it begins.', 'Oh, Sam.'],
        comment: ["They're taking the hobbits to Isengard!",
        'Tell me, where is Gandalf, for I must desire to speak with him?',
        'PO -TA -TOES??', "HANDS OFF THAT SHINY SHIRT, THAT'S MINE!"],
        farewell: ['Leave now, and never come back!', 'It is a gift!', 'I was there, 3,000 years ago...', 'what did you say??']
    },
    get greeting() {
        return this._msgSection.greeting
    },
    get comment() {
        return this._msgSection.comment
    },
    get farewell() {
        return this._msgSection.farewell
    },
    get msg() {
        return {
            greeting: this.greeting,
            comment: this.comment,
            farewell: this.farewell
        };
    },
    getRdmMsg(section) {
        const msgSection = this._msgSection[section];
        const randomIndex = Math.floor(Math.random() * msgSection.length);
        return msgSection[randomIndex];
    },
    generateRdmMsg() {
        const  greeting = this.getRdmMsg('greeting');
        const comment = this.getRdmMsg('comment');
        const farewell = this.getRdmMsg('farewell');
        return `${greeting} ${comment} ${farewell}`
    }
};

const lotrRandomMessage = rdmLotrmsg.generateRdmMsg();
//console.log(lotrRandomMessage);


let btn = document.createElement("button");
btn.innerHTML = "Random LOTR message";
btn.onclick = function () {
    alert(lotrRandomMessage);
}; 


document.body.appendChild(btn);



