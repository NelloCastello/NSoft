let registerCount = 1;


function eventPopUpForImageOfNewsItem(index, parent) {
    const popup = parent.querySelector('.news-item__image__pop-up');
    const readmore = parent.querySelector('.news-item__image__pop-up__read-more');
    switch (index) {
        case 0:
            readmore.style.transition = 'border-width 200ms ease 400ms, font-size 200ms ease 400ms, color 200ms, border-color 200ms, background 200ms, box-shadow 200ms';
            popup.style.transition = 'width 200ms, height 200ms';
            popup.style.width = '100%';
            popup.style.height = "100%";
            readmore.style.borderWidth = '3px';
            readmore.style.fontSize = '18px';
            break;

        case 1:
            popup.style.transition = 'width 200ms ease 400ms, height 200ms ease 400ms';
            readmore.style.transition = 'border-width 200ms ease 0ms, font-size 200ms ease 0ms, color 200ms, border-color 200ms, background 200ms, box-shadow 200ms';
            readmore.style.borderWidth = '0';
            popup.style.width = '0';
            popup.style.height = "0";
            readmore.style.fontSize = '0';
            break;
    }

}

function switchNightDay(index) {
    const head = document.querySelector('head');
    const nightSwitch = document.querySelector('.night-switch');
    const daySwitch = document.querySelector('.day-switch');

    const link = document.createElement('link');
    link.id = "NIGHTORDAYSWITCH"
    link.rel = 'stylesheet';
    link.href = 'css/night.css';


    switch (index) {
        case 0:
            nightSwitch.style.display = "none";
            daySwitch.style.display = "block";
            head.appendChild(link);
            break;

        case 1:
            nightSwitch.style.display = "block";
            daySwitch.style.display = "none";
            head.removeChild(document.getElementById('NIGHTORDAYSWITCH'));
            break;
    }
}

function navRegister(click) {
    const $ = document;

    const btnStart = $.querySelector('.header__register__start-btn');
    const btnPrev = $.querySelector('.header__register__prev-btn');
    const btnNext = $.querySelector('.header__register__next-btn');
    const btnDone = $.querySelector('.header__register__done-btn');

    const inputEmail = $.querySelector('.header__register__email-input');
    const inputNickname = $.querySelector('.header__register__nickname-input');
    const inputPassword = $.querySelector('.header__register__password-input');
    const inputConfirmPassword = $.querySelector('.header__register__confirm-password-input');
    const inputCode = $.querySelector('.header__register__code-input');

    switch (click) {
        case 'start':
            registerCount = 2;

            $.querySelector('.header__register__input.id-1').classList.add('hidden');
            $.querySelector('.header__register__input.id-2').classList.remove('hidden');

            btnStart.classList.add('hidden');
            btnNext.classList.remove('hidden');
            btnPrev.classList.remove('hidden');
            break;

        case 'prev':
            registerCount -= 1;

            $.querySelector(`.header__register__input.id-${registerCount}`).classList.remove('hidden');
            $.querySelector(`.header__register__input.id-${registerCount+1}`).classList.add('hidden');

            btnDone.classList.add('hidden');
            btnNext.classList.remove('hidden');

            if (registerCount == 1) {
                btnNext.classList.add('hidden');
                btnPrev.classList.add('hidden');
                btnStart.classList.remove('hidden');
            } else {

            }
            break;

        case 'next':
            registerCount += 1;

            $.querySelector(`.header__register__input.id-${registerCount}`).classList.remove('hidden');
            $.querySelector(`.header__register__input.id-${registerCount-1}`).classList.add('hidden');

            if (registerCount == 5) {
                btnNext.classList.add('hidden');
                btnDone.classList.remove('hidden');
            }
            break;

        case 'done':
            registerCount = 1;
    }
}