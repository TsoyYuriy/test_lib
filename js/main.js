document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});

function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}


class CustomPaymentWidget {
  constructor(config) {
    this.confirmationToken = config.confirmation_token;
    this.returnUrl = config.return_url;
    this.errorCallback = config.error_callback || function(error) {
      console.error('Ошибка:', error);
    };
  }

  sendPaymentData(data) {
    // Эмулируем отправку данных на сервер (замените этот код на реальный HTTP-запрос)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Проверка успешности отправки (здесь нужно реальное взаимодействие с сервером)
        const success = Math.random() < 0.8; // Пример: 80% успешных запросов

        if (success) {
          resolve({ status: 'success', message: 'Данные успешно отправлены' });
        } else {
          reject({ status: 'error', message: 'Ошибка при отправке данных на сервер' });
        }
      }, 1000); // Имитация задержки отправки данных на сервер
    });
  }

  init() {
    return {
      sendPaymentData: this.sendPaymentData.bind(this)
    };
  }
}