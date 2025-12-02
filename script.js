const today = new Date();
// (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeek = today.getDay();

const introTextElement = document.getElementById('intro-text');
const logoBg = document.getElementById('logo-bg');

function print(string) {
    console.log(string)
}

print(dayOfWeek)

if (introTextElement) {
    switch (dayOfWeek) {
        case 0: {
            introTextElement.textContent = "It's Sunday! Get some studying done.";
            break;
        }
        case 1: {
            introTextElement.textContent = "It's Monday. Make sure you have no homework.";
            break;
        }
        case 2: {
            introTextElement.textContent = "ITS TACO TUESDAY!!! and you got classes.";
            if (logoBg) {
                logoBg.setAttribute("fill", "#4CAF50");
            }
            break;
        }
        case 3: {
            introTextElement.textContent = "It's Wednesday. Make sure you get some work done.";
            break;
        }
        case 4: {
            introTextElement.textContent = "Thursday, you got class again.";
            if (logoBg) {
                logoBg.setAttribute("fill", "#4CAF50");
            }
            break;
        }
        case 5: {
            introTextElement.textContent = "Friday. Get some rest, you probably deserve it.";
            break;
        }
        case 6: {
            introTextElement.textContent = "Saturday. Maybe get some work done.";
            break;
        }
    }
}


function toggleColorMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
        localStorage.setItem('colorMode', 'dark');
    } else {
        localStorage.setItem('colorMode', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const colorModeToggle = document.getElementById('color-mode-toggle');
    if (colorModeToggle) {
        colorModeToggle.addEventListener('click', toggleColorMode);
    }
});