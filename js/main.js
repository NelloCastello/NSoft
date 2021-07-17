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

