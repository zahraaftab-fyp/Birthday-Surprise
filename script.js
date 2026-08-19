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
            "Happy Birthday to the one who has a very special place in my heart. ❤️ Having you in my life has given me so many beautiful moments to remember. Your smile, your words, and even our little silly moments are precious to me. I hope your day is filled with all the happiness you deserve. Happy Birthday, my love. 🎂💕"
    },


    2: {

        icon: "🌸",

        title: "A Little Message ✨",

        text:
            "Sometimes I wonder how one person can become such an important part of my life. ❤️ You have become one of my favourite reasons to smile.I hope you always know how special you are to me. Keep smiling, keep dreaming, and never forget that someone out here loves you very much. 💕✨"
    },


    3: {

        icon: "🎁",

        title: "My Wish For You 💗",

        text:
            "My biggest wish is to keep seeing that beautiful smile of yours for many more birthdays. ❤️ Thank you for being you, and for being such a special part of my lif🫀🫂. Happy Birthday, my love. 🎂❤️✨"
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
