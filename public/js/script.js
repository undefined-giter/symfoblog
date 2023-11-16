
// {# flash message hidder #}
let flash_msg = document.querySelector('.flash_msg')
setTimeout(() => {
    if (flash_msg) { flash_msg.style.display = 'none' }
}, 5000)
// {# end flash message hidder #}

// {# btn theme switcher #}
function toggleTheme() {
    const htmlElement = document.documentElement
    const themeSymbol = document.querySelector('#themeSymbol')

    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark')
        themeSymbol.textContent = '🌑'
    } else {
        htmlElement.classList.add('dark')
        themeSymbol.textContent = '🌞'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const themeSymbol = document.querySelector('#themeSymbol')
    const htmlElement = document.documentElement

    if (htmlElement.classList.contains('dark')) {
        themeSymbol.textContent = '🌞'
    }
    else { themeSymbol.textContent = '🌑' }
});
// {# end btn theme switcher #}