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

// Form translations
const form_translations = {
    english: {
        heading: "Tell me your preferences! 💕",
        restaurant: "Favorite Restaurant:",
        restaurant_placeholder: "Where would you like to go?",
        snacks: "Favorite Snacks:",
        snacks_placeholder: "What snacks do you love?",
        drinks: "Favorite Drinks:",
        drinks_placeholder: "What's your favorite drink?",
        activity: "Favorite Activity:",
        activity_placeholder: "What would you like to do together?",
        notes: "Additional Notes:",
        notes_placeholder: "Anything else you'd like to share?",
        submit: "Submit",
        confirmation: "Thank you! Your preferences have been saved 💕",
        sending: "Sending..."
    },
    italian: {
        heading: "Dimmi le tue preferenze! 💕",
        restaurant: "Ristorante Preferito:",
        restaurant_placeholder: "Dove vorresti andare?",
        snacks: "Snack Preferiti:",
        snacks_placeholder: "Quali snack ami?",
        drinks: "Bevande Preferite:",
        drinks_placeholder: "Qual è la tua bevanda preferita?",
        activity: "Attività Preferita:",
        activity_placeholder: "Cosa ti piacerebbe fare insieme?",
        notes: "Note Aggiuntive:",
        notes_placeholder: "Altro che vorresti condividere?",
        submit: "Invia",
        confirmation: "Grazie! Le tue preferenze sono state salvate 💕",
        sending: "Invio in corso..."
    },
    norwegian: {
        heading: "Fortell meg dine preferanser! 💕",
        restaurant: "Favorittrestaurant:",
        restaurant_placeholder: "Hvor vil du dra?",
        snacks: "Favorittsnacks:",
        snacks_placeholder: "Hvilke snacks liker du?",
        drinks: "Favorittdrikker:",
        drinks_placeholder: "Hva er favorittdrikken din?",
        activity: "Favorittaktivitet:",
        activity_placeholder: "Hva vil du gjøre sammen?",
        notes: "Tilleggsnotater:",
        notes_placeholder: "Noe annet du vil dele?",
        submit: "Send inn",
        confirmation: "Takk! Preferansene dine er lagret 💕",
        sending: "Sender..."
    }
};

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
    
    // Show the review form
    let reviewForm = document.getElementById('review-form');
    reviewForm.style.display = "block";
    
    // Update form language
    updateFormLanguage();
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
    
    // Update form language if it's visible
    updateFormLanguage();
}

// Update form text based on selected language
function updateFormLanguage() {
    const trans = form_translations[language];
    
    // Update heading
    const formHeading = document.querySelector('#review-form h3');
    if (formHeading) formHeading.textContent = trans.heading;
    
    // Update labels and placeholders
    const labels = {
        'restaurant': trans.restaurant,
        'snacks': trans.snacks,
        'drinks': trans.drinks,
        'activity': trans.activity,
        'notes': trans.notes
    };
    
    const placeholders = {
        'restaurant': trans.restaurant_placeholder,
        'snacks': trans.snacks_placeholder,
        'drinks': trans.drinks_placeholder,
        'activity': trans.activity_placeholder,
        'notes': trans.notes_placeholder
    };
    
    for (let field in labels) {
        const label = document.querySelector(`label[for="${field}"]`);
        const input = document.getElementById(field);
        if (label) label.textContent = labels[field];
        if (input) input.placeholder = placeholders[field];
    }
    
    // Update submit button
    const submitBtn = document.getElementById('submit-preferences');
    if (submitBtn) submitBtn.textContent = trans.submit;
}

// Handle form submission with FormSubmit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preferences-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-preferences');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = form_translations[language].sending;
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(form);
            
            try {
                // Send to FormSubmit
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Show success message
                    alert(form_translations[language].confirmation);
                    // Optionally clear the form
                    form.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Oops! Something went wrong. Please try again.');
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
