const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    italian: [
         "No",
         "Sei sicura?",
         "Sei davvero sicura??",
         "Sei davvero davvero sicura???",
         "Ripensaci?",
         "Non credi nelle seconde possibilità?",
         "Perché sei così fredda?",
         "Forse possiamo parlarne?",
         "Non te lo chiederò di nuovo!",
         "Ok ora mi stai ferendo!",
         "Stai solo essendo cattiva!",
         "Perché mi stai facendo questo?",
         "Per favore dammi una possibilità!",
         "Ti prego di smettere!",
         "Ok, ricominciamo da capo.."
    ],
   norwegian: [
         "Nei",
         "Er du sikker?",
         "Er du virkelig sikker??",
         "Er du virkelig virkelig sikker???",
         "Tenk igjen?",
         "Tror du ikke på andre sjanser?",
         "Hvorfor er du så kald?",
         "Kanskje vi kan snakke om det?",
         "Jeg kommer ikke til å spørre igjen!",
         "Ok nå sårer du følelsene mine!",
         "Du er bare slem nå!",
         "Hvorfor gjør du dette mot meg?",
         "Vennligst gi meg en sjanse!",
         "Jeg ber deg om å stoppe!",
         "Ok, la oss bare starte på nytt.."
     ]
};

answers_yes = {
    "english": "Yes",
    "italian": "Sì",
    "norwegian": "Ja"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "italian") {
        questionHeading.textContent = "Vuoi essere la mia valentina?";
    } else if (language === "norwegian") {
        questionHeading.textContent = "Vil du være valentinen min?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "italian") {
        successMessage.textContent = "Sììì, ci vediamo presto :3";
    } else if (language === "norwegian") {
        successMessage.textContent = "Jaaaa, sees snart Mari. Æ ælskeee dæ. :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}
