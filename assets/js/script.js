document.getElementById('copyNumber').addEventListener('click', function() {
        // Получаем текст для копирования
        const textToCopy = document.getElementById('numberTextToCopy').innerText;

        // Создаем временный элемент для копирования текста
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Выделяем текст
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Для мобильных устройств

        // Копируем текст в буфер обмена
        document.execCommand('copy');

        // Удаляем временный элемент
        document.body.removeChild(tempInput);

        // Уведомление об успешном копировании
        alert('Текст скопирован: ' + textToCopy);
    });