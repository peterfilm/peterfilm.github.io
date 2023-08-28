let person;
const emailField = document.getElementById('email_input');
emailField.addEventListener('focus', onInput, true);
emailField.addEventListener('blur', offInput, true);

const email = document.getElementById('email');
email.addEventListener('focus', onInput, true);
email.addEventListener('blur', offInput, true);

const nameField = document.getElementById('name');
nameField.addEventListener('focus', onInput, true);
nameField.addEventListener('blur', offInput, true);

const textField = document.getElementById('textarea');
textField.addEventListener('focus', onInput, true);
textField.addEventListener('blur', offInput, true);

function onInput(event) {
    document.getElementById(event.target.id).value = '';
}

function offInput(event) {
    a = document.getElementById(event.target.id);
    if (a.value === '') {
        switch (event.target.id) {
            case 'email_input':
                a.value = 'Email...';
                break;
            case 'email':
                a.value = 'Email';
                break;
            case 'name':
                a.value = 'Name';
                break;
            case 'textarea':
                a.value = 'Type your message';
                break;
        }
    }
}

const jimmy = document.getElementById('jimmy');
jimmy.addEventListener('mouseover', subNameText, true);
jimmy.addEventListener('mouseout', subNameTextOut, true);

const fred = document.getElementById('fred');
fred.addEventListener('mouseover', subNameText, true);
fred.addEventListener('mouseout', subNameTextOut, true);

const amanda = document.getElementById('amanda');
amanda.addEventListener('mouseover', subNameText, true);
amanda.addEventListener('mouseout', subNameTextOut, true);

const olga = document.getElementById('olga');
olga.addEventListener('mouseover', subNameText, true);
olga.addEventListener('mouseout', subNameTextOut, true);

function subNameText(event) {
    switch (event.target.alt) {
        case 'Jimmy Smith':
            person = document
                .getElementById('jimmy')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 25%; opacity: 0.6');
            break;
        case 'Fred White':
            person = document
                .getElementById('fred')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 25%; opacity: 0.6');
            break;
        case 'Amanda Stone':
            person = document
                .getElementById('amanda')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 25%; opacity: 0.6');
            break;
        case 'Olga Kornilova':
            person = document
                .getElementById('olga')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 25%; opacity: 0.6');
            break;
    }
}

function subNameTextOut(event) {
    switch (event.target.alt) {
        case 'Jimmy Smith':
            person = document
                .getElementById('jimmy')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 0%; opacity: 0');
            break;
        case 'Fred White':
            person = document
                .getElementById('fred')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 0%; opacity: 0');
            break;
        case 'Amanda Stone':
            person = document
                .getElementById('amanda')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 0%; opacity: 0');
            break;
        case 'Olga Kornilova':
            person = document
                .getElementById('olga')
                .querySelector('.team_all_guy_name');
            person.setAttribute('style', 'height: 0%; opacity: 0');
            break;
    }
}

const all = document.getElementById('all');
all.addEventListener('click', showWork);

const print = document.getElementById('print');
print.addEventListener('click', showWork);

const web = document.getElementById('web');
web.addEventListener('click', showWork);

const user = document.getElementById('user');
user.addEventListener('click', showWork);

const mockup = document.getElementById('mockup');
mockup.addEventListener('click', showWork);

function showWork(event) {
    tg = event.target.id;
    let work = document.getElementById('works').querySelectorAll('img');
    for (let i = 0; i < work.length; i++) {
        if (tg === 'all') {
            console.log(work[i]);
            work[i].style.display = 'block';
        } else if (work[i].dataset.group === tg) {
            work[i].style.display = 'block';
        } else {
            work[i].style.display = 'none';
        }
    }
}
