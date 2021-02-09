const twoDigits = (value) => {
    return value.toString().padStart(2, '0');
};

const renderTime = () => {
    const dateTime = new Date();
    const time = document.querySelector('.time');

    const hours = dateTime.getHours().toString();
    const minutes = dateTime.getMinutes().toString();
    const seconds = dateTime.getSeconds().toString();

    time.textContent = `${twoDigits(hours)} : ${twoDigits(minutes)} : ${twoDigits(seconds)}`;
};

setInterval(renderTime, 1000);

const initAlarm = () => {
    const btn = document.querySelector('#setTimerBtn');
    console.log('🚀 -> btn', btn);
    btn.addEventListener('click', () => {
        const seconds = document.querySelector('#seconds-field').value;
        callAlarm(seconds);
    });
};

const callAlarm = (delay) => {
    const alarmModal = document.querySelector('#alarm-modal');
    const alarmSound = document.querySelector('#alarm-sound');
    const alarmStop = document.querySelector('#stop-alarm');

    setTimeout(() => {
        alarmModal.classList.add('show');
        alarmSound.play();

        alarmStop.addEventListener('click', () => {
            alarmSound.pause();
            alarmModal.classList.remove('show');
        });
    }, delay * 1000);
};

initAlarm();
