async function getData() {
    try {
        let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=48eb81ed6c0c63cb222d69b2920c2885");
        let user = await data.json();
        console.log(user);

    }
    catch (err) {
        console.log(`error${err}`);
    }
}

getData();