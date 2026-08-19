// ===============================
// CONFETTI / FALLING DECORATIONS
// ===============================

function createConfetti() {

    const decorations = [
        "🎉",
        "🎊",
        "🎈",
        "✨",
        "⭐",
        "💕",
        "💖",
        "🌸",
        "🎁"
    ];

    for (let i = 0; i < 45; i++) {

        const item = document.createElement("div");

        item.classList.add("falling-item");

        item.textContent =
            decorations[
                Math.floor(
                    Math.random() * decorations.length
                )
            ];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (18 + Math.random() * 25) + "px";

        item.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);

        setTimeout(function () {
            item.remove();
        }, 8000);
    }
}


// ===============================
// OPEN SURPRISE
// ===============================

function openBirthday() {

    document.getElementById("surpriseScreen").style.display = "none";

    document.getElementById("birthdayIntro").style.display = "flex";


    // 🎵 Start music

    const music =
        document.getElementById("birthdayMusic");

    if (music) {

        music.volume = 0.4;

        music.play().catch(function () {
            console.log("Music could not start.");
        });
    }


    // 🎉 Confetti

    createConfetti();
}


// ===============================
// OPEN WISHES
// ===============================

function showWishes() {

    document.getElementById("birthdayIntro").style.display = "none";

    document.getElementById("wishesScreen").style.display = "flex";


    // 🎊 Confetti

    createConfetti();
}


// ===============================
// WISHES
// ===============================

const wishes = {

    1: {

        icon: "💖",

        title: "For You 💕",

        text:
            "Happy Birthday to the person who makes ordinary moments feel a little more special. ❤️ I’m so grateful that you came into my life and became such an important part of it. Your smile, your little talks, and even our silly moments mean more to me than you know. I hope today brings you the same happiness that you’ve brought into my life. 🎂✨"
    },


    2: {

        icon: "🌸",

        title: "A Little Message ✨",

        text:
            "Today is your day, but I feel lucky too because I get to celebrate someone so special to me. 💕 I hope you always keep that beautiful smile, keep chasing your dreams, and never forget how capable and amazing you are. No matter how many birthdays come and go, I’ll always be happy to see you growing, achieving and becoming the person you want to be. 🌸✨"
    },


    3: {

        icon: "🎁",

        title: "My Wish For You 💗",

        text:
            "My biggest wish is to keep seeing that beautiful smile of yours for many more birthdays. ❤️ Thank you for being you, and for being such a special part of my life. I’m so lucky to have you. I love you more than words can say🫀🫂. Happy Birthday, my love. 🎂❤️✨"
    }

};


// ===============================
// OPEN ENVELOPE + WISH
// ===============================

function openWish(number) {

    const card =
        document.getElementById("card" + number);


    // Prevent clicking multiple times

    if (card.classList.contains("opening")) {
        return;
    }


    // 💌 Open envelope

    card.classList.add("opening");


    // 🎉 Confetti while opening

    createConfetti();


    // Wait for envelope animation

    setTimeout(function () {

        const wish =
            wishes[number];


        document.getElementById("wishesScreen").style.display =
            "none";


        document.getElementById("wishMessageScreen").style.display =
            "flex";


        document.getElementById("wishIcon").textContent =
            wish.icon;


        document.getElementById("wishTitle").textContent =
            wish.title;


        document.getElementById("wishText").textContent =
            wish.text;


        // More birthday decorations

        createConfetti();

    }, 800);
}


// ===============================
// BACK TO CARDS
// ===============================

function backToCards() {

    document.getElementById("wishMessageScreen").style.display =
        "none";


    document.getElementById("wishesScreen").style.display =
        "flex";
}
