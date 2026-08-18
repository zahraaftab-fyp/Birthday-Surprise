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
            "Happy Birthday! 🎂 I hope your special day is filled with happiness, beautiful memories and lots of smiles. You deserve all the wonderful things in the world! 🌸"
    },


    2: {

        icon: "🌸",

        title: "A Little Message ✨",

        text:
            "May every new day of your life bring you happiness, success and beautiful moments. Always keep smiling and keep shining! 💫"
    },


    3: {

        icon: "🎁",

        title: "My Wish For You 💗",

        text:
            "I wish this new chapter of your life brings you peace, success, happiness and countless beautiful memories. Happy Birthday once again! 🎉💕"
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