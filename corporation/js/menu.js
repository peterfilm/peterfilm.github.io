window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_links'),
        menuItem = document.querySelectorAll('.menu_links_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_links_active');
    });

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_links_active');
        });
    });
});
