/* =========================================
   🔐 YOUR SECRET PASSWORD
   YAHAN APNI 6-DIGIT PASSWORD LIKHNA HAI
========================================= */

const PASSWORD = "123456";


/* =========================================
   VARIABLES
========================================= */

let enteredPassword = "";


/* =========================================
   START WEBSITE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    showScreen("lockScreen");

});


/* =========================================
   SCREEN CHANGER
========================================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (screen) {

        screen.style.display = "none";

    });


    const selectedScreen =
        document.getElementById(screenId);


    if (selectedScreen) {

        selectedScreen.style.display = "flex";

    }

}


/* =========================================
   🔢 PASSWORD NUMBER
========================================= */

function pressNumber(number) {

    if (enteredPassword.length >= 6) {
        return;
    }


    enteredPassword += number;


    updatePasswordDots();


    if (enteredPassword.length === 6) {

        setTimeout(function () {

            checkPassword();

        }, 250);

    }

}


/* =========================================
   DELETE PASSWORD NUMBER
========================================= */

function deleteNumber() {

    if (enteredPassword.length === 0) {
        return;
    }


    enteredPassword =
        enteredPassword.slice(0, -1);


    updatePasswordDots();


    document.getElementById("wrongPassword").textContent = "";

}


/* =========================================
   PASSWORD DOTS
========================================= */

function updatePasswordDots() {

    const dots =
        document.querySelectorAll(
            "#passwordDots span"
        );


    dots.forEach(function (dot, index) {

        if (index < enteredPassword.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


/* =========================================
   CHECK PASSWORD
========================================= */

function checkPassword() {

    const message =
        document.getElementById("wrongPassword");


    if (enteredPassword === PASSWORD) {

        message.textContent = "";


        // Clear password

        enteredPassword = "";

        updatePasswordDots();


        // Open Love Screen

        setTimeout(function () {

            showScreen("loveScreen");

        }, 300);


    } else {

        message.textContent =
            "Oops! Wrong code 💕 Try again.";


        // Small shake

        const box =
            document.querySelector(".lock-box");


        box.style.animation =
            "shake 0.4s ease";


        setTimeout(function () {

            box.style.animation = "";

        }, 500);


        // Clear wrong password

        setTimeout(function () {

            enteredPassword = "";

            updatePasswordDots();

        }, 500);

    }

}


/* =========================================
   ❤️ YES BUTTON
========================================= */

function loveYes() {

    // Hide love screen

    showScreen("birthdayScreen");


    // Start music

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (music) {

        music.volume = 0.45;


        music.play().catch(function () {

            console.log(
                "Music could not start."
            );

        });

    }


    // 🎉 Celebration

    createConfetti();

}


/* =========================================
   😏 NO BUTTON
========================================= */

function loveNo() {

    const message =
        document.getElementById(
            "noMessage"
        );


    message.textContent =
        "You have only one option 😌❤️";


    const noButton =
        document.getElementById(
            "noButton"
        );


    // Make NO button disappear

    setTimeout(function () {

        noButton.style.display =
            "none";

    }, 700);

}


/* =========================================
   🎂 OPEN BIRTHDAY WISHES
========================================= */

function openWishes() {

    showScreen("wishesScreen");


    createConfetti();

}


/* =========================================
   💌 WISHES
========================================= */

const wishes = {

    1: {

        icon: "💖",

        title: "For You 💕",

        text:
            "Happy Birthday, Sir! 🎉 Wishing you a wonderful day filled with happiness, peace and countless reasons to smile. May you always stay blessed and successful. 🎂💕"

    },


    2: {

        icon: "🌸",

        title: "A Little Message ✨",

        text:
            "Wishing you good health, happiness and success in every step of life. May your hard work always bring you great achievements and may you continue to inspire everyone around you 💕✨"

    },


    3: {

        icon: "🎁",

        title: "My Wish For You ❤️",

        text:
            "My sincere wish for you is that this new year of your life brings you endless happiness, success and beautiful moments. May all your dreams come true and may you always keep smiling. Happy Birthday once again, Sir! 🎂✨"

    }

};


/* =========================================
   💌 OPEN WISH
========================================= */

function openWish(number) {

    const card =
        document.getElementById(
            "card" + number
        );


    if (!card) {
        return;
    }


    // Envelope animation

    card.classList.add("opening");


    // Confetti

    createConfetti();


    setTimeout(function () {

        const wish =
            wishes[number];


        document.getElementById(
            "wishIcon"
        ).textContent =
            wish.icon;


        document.getElementById(
            "wishTitle"
        ).textContent =
            wish.title;


        document.getElementById(
            "wishText"
        ).textContent =
            wish.text;


        showScreen("messageScreen");


        createConfetti();

    }, 750);

}


/* =========================================
   💌 BACK TO WISHES
========================================= */

function backToWishes() {

    showScreen("wishesScreen");

}


/* =========================================
   🎉 CONFETTI
========================================= */

function createConfetti() {

    const items = [

        "🎉",
        "🎊",
        "💕",
        "💖",
        "✨",
        "🌸",
        "💗",
        "🎈",
        "⭐"

    ];


    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("div");


        item.className =
            "falling-item";


        item.textContent =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.fontSize =
            (18 + Math.random() * 18) +
            "px";


        item.style.animationDuration =
            (3 + Math.random() * 3) +
            "s";


        item.style.animationDelay =
            Math.random() * 0.8 +
            "s";


        document.body.appendChild(item);


        setTimeout(function () {

            item.remove();

        }, 7000);

    }

}


/* =========================================
   🔄 RESET WHEN PAGE RELOADS
========================================= */

window.addEventListener(
    "pageshow",
    function () {

        enteredPassword = "";

        updatePasswordDots();

    }
);
