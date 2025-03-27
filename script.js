document.addEventListener("DOMContentLoaded", function () {
    // Плавный скролл при клике на ссылки меню (центрирование секции)
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center" // Прокручивает секцию ровно в центр экрана
                });
            }
        });
    });

    // Функция для появления элементов при скролле
    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("_active");
                observer.unobserve(entry.target); // Останавливаем наблюдение после появления
            }
        });
    }

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2 // 20% элемента должно быть видно, чтобы он появился
    });

    // Добавляем наблюдателя для всех элементов с классами fade-in и feature
    document.querySelectorAll(".fade-in, .feature").forEach(element => {
        observer.observe(element);
    });
});
