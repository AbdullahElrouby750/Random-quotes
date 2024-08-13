const Qoutes = [
    { quote: "Exam results don't show your real effort", author: "Abdullah Elrouby" },
    { quote: "If it's working, don't touch it", author: "Some pro developer" },
    { quote: "You either die a hero or live long enough to see yourself become the villain", author: "Harvey Dent" },
    { quote: "You miss 100% of the shots you don't take.", author: "Michael Scott" },
    { quote: "It's gonna be legn-wait for it-DARY legendary", author: "Barney Stinson" },
    { quote: "I wish there was a way to know you're in the good old days before you've actually left them", author: "Andy Bernard" },
    { quote: "Will I get over it? No. But life goes on", author: "Dwight Schrute" },
    { quote: "On your Left", author: "Steve Rogers" },
    { quote: "Sometimes, even if you know how something's gonna end, that doesn't mean you can't enjoy the ride.", author: "Ted Mosby" },
    { quote: "Here's the thing about mistakes: Sometimes, even when you know something's a mistake, you gotta make it anyway.", author: "Ted Mosby" },
    { quote: "If you're not scared, then you're not taking a chance. And if you're not taking a chance, then what the hell are you doing anyway?", author: "Ted Mosby" },
    { quote: "When you love someone you just, you... you don't stop. Ever. Even when people roll their eyes or call you crazy. Even then. Especially then. You just- you don't give up because if I could give up... If I could just, you know, take the whole world's advice and- and move on and find someone else, that wouldn't be love. That would be... That would be some other disposable thing that is not worth fighting for. But that is not what this is.", author: "Ted Mosby" },
    { quote: "Mewo mewo mewo MEWO MEWO MEwo", author: "Cat" },
    { quote: "I'm not a psychopath, I'm a high-functioning sociopath. Do your research.", author: "Sherlock Holms" },
    { quote: "Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.", author: "Madara Uchiha" },
    { quote: "It Is Foolish To Fear What We Have Yet To See And Know.", author: "Itachi Uchiha" },
    { quote: "Well, you only need the light when it's burning low", author: "Passenger" },
    { quote: "If we knew what it was we were doing, it would not be called research, would it?", author: "Albert Einstein" },
];


const needToWaitQoutes = [];

function getRandomQoute() {
    let randomQoute = Math.floor(Math.random() * Qoutes.length);

    while (needToWaitQoutes.find(qoute => qoute.quote === Qoutes[randomQoute].quote)) {
        randomQoute = Math.floor(Math.random() * Qoutes.length);
    }

    needToWaitQoutes.push(Qoutes[randomQoute]);
    if (needToWaitQoutes.length > 10) {
        needToWaitQoutes.shift();
    }

    displayRandomQoute(Qoutes[randomQoute])
}

function displayRandomQoute(Qoute) {

    const qoutecard = document.getElementById('qoute');
    qoutecard.innerHTML = `<h3>${Qoute.quote}</h3>
                           <p class = " text-danger fw-bold"> - ${Qoute.author}</p>`;
}
