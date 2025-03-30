document.addEventListener("DOMContentLoaded", function () {
    // Плавный скролл при клике на ссылки меню (центрирование секции)
    document.querySelectorAll("nav a, .btnaccept").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href")?.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });
    });

    // Появление элементов при скролле
    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("_active");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(revealOnScroll, { threshold: 0.2 });
    document.querySelectorAll(".fade-in, .feature").forEach(element => observer.observe(element));

    // Модальное окно
    const modal = document.getElementById("modal");
    const body = document.body;
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const confirmDownloadButton = document.getElementById("confirmDownload");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");

    // Изначально делаем кнопку "Скачать сейчас" неактивной
    confirmDownloadButton.disabled = true;
    confirmDownloadButton.classList.add("disabled");

    // Функция проверки чекбоксов
    function checkCheckboxes() {
        if (checkbox1.checked && checkbox2.checked) {
            confirmDownloadButton.disabled = false;
            confirmDownloadButton.classList.remove("disabled");
        } else {
            confirmDownloadButton.disabled = true;
            confirmDownloadButton.classList.add("disabled");
        }
    }

    // Слушатели событий для галочек
    checkbox1.addEventListener("change", checkCheckboxes);
    checkbox2.addEventListener("change", checkCheckboxes);

    // Открытие модального окна
    openModalButton.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
        body.style.overflow = "hidden";
    });

    // Закрытие модального окна
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
        body.style.overflow = "";
    });

    // Скачивание файла при нажатии на "Скачать сейчас"
    confirmDownloadButton.addEventListener("click", function () {
        const downloadLink = document.createElement("a");
        downloadLink.href = "https://github.com/666AISTROM666/hogsos/raw/main/HogsOS.zip";
        downloadLink.setAttribute("download", "HogsOS.zip");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        modal.style.display = "none";
        body.style.overflow = "";
    });
    //центрирование кнопки установить
    document.querySelectorAll("nav a, .btn").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetElement.clientHeight / 2);

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
     });
   }); 
});
document.addEventListener("DOMContentLoaded", function () {
    // Проверяем ширину экрана или User-Agent устройства
    if (window.innerWidth < 768 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Очищаем весь контент страницы
        document.body.innerHTML = `
    <div style="
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
        text-align: center; 
        font-family: Arial, sans-serif;
    ">
        <h2>Пожалуйста, зайдите с компьютера 🖥️</h2>
        <img src="images/error.png" alt="Изображение" style="max-width: 80%; max-height: 60vh; margin-top: 20px;">
    </div>
`;
        document.body.style.background = "#000"; // Задаем черный фон для лучшей читаемости
        document.body.style.color = "#fff"; // Делаем текст белым
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const win10Button = document.getElementById("win10");
    const win11Button = document.getElementById("win11");

    if (win10Button) { 
        win10Button.addEventListener("click", function () {
            window.location.href = "https://software.download.prss.microsoft.com/dbazure/Win10_22H2_English_x64v1.iso?t=8df99b30-e9c1-4862-98cc-73b98df15dca&P1=1743442979&P2=601&P3=2&P4=wbXAEUNlk%2Bb1ondFE2zd1eczQuToORnFMDOMByHwy3iJl6RxNh0whhKmTQg%2FQJVu8N7nOSafx14uxW3KoVFpFHEt7%2FwoQMmh8b4UUcydPsuO%2FhMqlbAHdDTn8wsEwxWmgIcsnp2ytCky33ZRu8mPclN98Tw7X6GvJc25Hrw3S%2Brd9DWiQSVwQaIMHrB5C5j8nD1iCXGvLDs4Ru16tQDBcaGhrj%2F85ZzbpTviUk4aJqB7NN%2FFYLkvYC4O0rkQ5UCgfNe8Xn1aZI%2FlJ%2ByRBCXwF5Qm7WQGGV%2BlJwdeVjzx1mCerx%2BZop1nAnpm1rvYR1WG5gRFkjGmpovyJxqHAR3qoA%3D%3D";
        });
    }

    if (win11Button) { 
        win11Button.addEventListener("click", function () {
            window.location.href = "https://software.download.prss.microsoft.com/dbazure/Win11_24H2_EnglishInternational_x64.iso?t=8327df1a-5078-417d-b3a1-a744c443e000&P1=1743357504&P2=601&P3=2&P4=P62wcLoeWhotd2MqktZZ6BY2b3aBqbmEfqoQQWRucGwSVyEV%2Fw3gy%2FDvZlmQXAtuDno8TUEvyaQ1WUan2TOSWFHIdMKUIL1NeULQsYEVIkWYBDoWh0qpSsUx2VYzWRrC2IsTWk8cllJn0EQPNzzBTcwttZaUeLKkQrIwuiwZHhX1F2nYvyRagp%2BGQoJRbe7eep2SpdbNlL5SDcK%2BMZgRFO8TtiuKKQo0a5JxQf%2B8rYIC%2BWkWJp9T152mE0d61wZNwg9Eyy%2FoKPPT7UccmRMpBb96Snn14YKblm98Vhlu5zhz7IPuKGpBpdvcQ01RMLBzsSxwom1Y6TomkdeKC7v61A%3D%3D";
        });
    }
});
    document.getElementById("videoSelector").addEventListener("change", function() {
        const videoPlayer = document.getElementById("videoPlayer");
        const videoSource = document.getElementById("videoSource");

        videoSource.src = this.value;
        videoPlayer.load(); // Перезагрузить видео для смены источника
    });



