const getWeatherData = () => {
    const url =
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=Krakow,pl&units=metric&appid=be45fea377f32d5e3f469489e86cdfc2';

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json.list;
        })
        .catch((error) => {
            console.log(error);
        });
};

const getDateTime = (value) => {
    const dateTime = new Date(value * 1000);
    const date = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();

    console.log(date, month, year);

    return `${date}.${month}.${year}`;
};

const createWidget = (day) => {
    const titleValue = day.weather[0].main;
    const tempValue = day.temp.day;
    const dateValue = day.dt;

    const widget = document.createElement('div');
    const title = document.createElement('span');
    const icon = document.createElement('img');
    const temp = document.createElement('span');
    const date = document.createElement('span');

    widget.classList.add('card', titleValue.toLowerCase());
    title.classList.add('title');
    temp.classList.add('temp');

    icon.setAttribute('src', `img/${titleValue.toLowerCase()}.png`);
    title.textContent = titleValue;
    temp.textContent = Math.floor(tempValue);
    date.textContent = getDateTime(dateValue);

    widget.appendChild(title);
    widget.appendChild(icon);
    widget.appendChild(temp);
    widget.appendChild(date);

    return widget;
};

const renderWeather = () => {
    const weather = document.querySelector('.weather');

    getWeatherData().then((data) => {
        data.forEach((day) => {
            const element = createWidget(day);

            weather.appendChild(element);
        });
    });
};

renderWeather();
