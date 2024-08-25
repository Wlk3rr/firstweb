document.addEventListener('DOMContentLoaded', function() {
    // Функциональность боковой панели
    const sideMenu = document.querySelector('.side-menu');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    document.body.appendChild(hamburger);

    hamburger.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Функциональность вкладок категорий
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

  

   

    // Анимация появления элементов при скролле
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.product-card, .featured-item, .about-content, .testimonial');
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});