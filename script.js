function submitForm(event) {
    event.preventDefault();

    var projectName = document.getElementById("project-name").value;
    var projectDescription = document.getElementById("project-description").value;
    var budget = document.getElementById("budget").value;

    // Отправка данных на сервер с использованием fetch
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'project-name=' + encodeURIComponent(projectName) +
              '&project-description=' + encodeURIComponent(projectDescription) +
              '&budget=' + encodeURIComponent(budget),
    });

    // Добавьте здесь код для обработки успешной отправки формы или отображения сообщения пользователю
}


function submitForm(event) {
    event.preventDefault();

    var projectName = document.getElementById("project-name").value;
    var projectDescription = document.getElementById("project-description").value;
    var budget = document.getElementById("budget").value;

    // Отправка данных на сервер с использованием fetch
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'project-name=' + encodeURIComponent(projectName) +
              '&project-description=' + encodeURIComponent(projectDescription) +
              '&budget=' + encodeURIComponent(budget),
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Вернуть текст ответа
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        // Обработка успешного ответа
        if (data === 'success') {
            alert('Your project brief has been submitted successfully!');
        } else {
            throw new Error('Server response was not as expected');
        }
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
}

