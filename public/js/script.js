
// {# flash message hidder #}
let flash_msg = document.querySelector('.flash_msg')
setTimeout(() => {
    if (flash_msg) { flash_msg.style.display = 'none' }
}, 5000)
// {# end flash message hidder #}

// {# btn theme switcher #}
const htmlElement = document.documentElement
const themeSymbol = document.querySelector('#themeSymbol')

function toggleTheme() {

    const icons = document.querySelectorAll('.icons')
    const cards = document.querySelectorAll('.cards')
    const titles_cards = document.querySelectorAll('.titles_cards')

    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark')
        themeSymbol.textContent = '🌑'

        icons.forEach(icon => {
            icon.removeAttribute('fill');
        })
        cards.forEach(card => {
            card.style.backgroundColor = '#37ADFF';
        });
        titles_cards.forEach(title_card => {
            title_card.style.color = '#8A6500';
        });
    } else {
        htmlElement.classList.add('dark')
        themeSymbol.textContent = '🌞'

        icons.forEach(icon => {
            icon.setAttribute('fill', '#fff');
        })
        cards.forEach(card => {
            card.style.backgroundColor = '#0029E0';
        })
        titles_cards.forEach(title_card => {
            title_card.style.color = '#DD8507';
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (htmlElement.classList.contains('dark')) {
        themeSymbol.textContent = '🌞'
    }
    else { themeSymbol.textContent = '🌑' }
});
// {# end btn theme switcher #}