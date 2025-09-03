const header = document.querySelector('.header');

function headerBgChange() {
    const headerSwitch = header;
    headerSwitch.style.color = "green";
}

header.addEventListener('click', headerBgChange);