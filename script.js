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
});
