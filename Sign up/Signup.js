document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращениее отправки формы по умолчанию

        var formData = new FormData(form); // Сбор данных формы

        // AJAX 
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'YII URL', true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // Устанавливаем заголовок, указывающий на AJAX запрос
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.error('Произошла ошибка:', xhr.status);
                }
            }
        };
        xhr.send(formData); // Отправка данных формы на серв
    });
});
