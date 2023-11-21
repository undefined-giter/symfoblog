(self["webpackChunk"] = self["webpackChunk"] || []).push([["script"],{

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ (() => {

// {# flash message hidder #}
var flash_msg = document.querySelector('.flash_msg');
setTimeout(function () {
  if (flash_msg) {
    flash_msg.style.display = 'none';
  }
}, 5000);
// {# end flash message hidder #}

// {# btn theme switcher #}
var htmlElement = document.documentElement;
var themeSymbol = document.querySelector('#themeSymbol');
function toggleTheme() {
  var icons = document.querySelectorAll('.icons');
  var cards = document.querySelectorAll('.cards');
  var titles_cards = document.querySelectorAll('.titles_cards');
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    themeSymbol.textContent = '🌑';
    icons.forEach(function (icon) {
      icon.removeAttribute('fill');
    });
    cards.forEach(function (card) {
      card.style.backgroundColor = '#37ADFF';
    });
    titles_cards.forEach(function (title_card) {
      title_card.style.color = '#8A6500';
    });
  } else {
    htmlElement.classList.add('dark');
    themeSymbol.textContent = '🌞';
    icons.forEach(function (icon) {
      icon.setAttribute('fill', '#fff');
    });
    cards.forEach(function (card) {
      card.style.backgroundColor = '#0029E0';
    });
    titles_cards.forEach(function (title_card) {
      title_card.style.color = '#DD8507';
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  if (htmlElement.classList.contains('dark')) {
    themeSymbol.textContent = '🌞';
  } else {
    themeSymbol.textContent = '🌑';
  }
});
// {# end btn theme switcher #}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/js/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNwREMsVUFBVSxDQUFDLFlBQU07RUFDYixJQUFJSCxTQUFTLEVBQUU7SUFBRUEsU0FBUyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQUM7QUFDdEQsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNSOztBQUVBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHTCxRQUFRLENBQUNNLGVBQWU7QUFDNUMsSUFBTUMsV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFFMUQsU0FBU08sV0FBV0EsQ0FBQSxFQUFHO0VBRW5CLElBQU1DLEtBQUssR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFDakQsSUFBTUMsS0FBSyxHQUFHWCxRQUFRLENBQUNVLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNqRCxJQUFNRSxZQUFZLEdBQUdaLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBRS9ELElBQUlMLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeENULFdBQVcsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BDUixXQUFXLENBQUNTLFdBQVcsR0FBRyxJQUFJO0lBRTlCUCxLQUFLLENBQUNRLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7TUFDbEJBLElBQUksQ0FBQ0MsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFDRlIsS0FBSyxDQUFDTSxPQUFPLENBQUMsVUFBQUcsSUFBSSxFQUFJO01BQ2xCQSxJQUFJLENBQUNqQixLQUFLLENBQUNrQixlQUFlLEdBQUcsU0FBUztJQUMxQyxDQUFDLENBQUM7SUFDRlQsWUFBWSxDQUFDSyxPQUFPLENBQUMsVUFBQUssVUFBVSxFQUFJO01BQy9CQSxVQUFVLENBQUNuQixLQUFLLENBQUNvQixLQUFLLEdBQUcsU0FBUztJQUN0QyxDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSGxCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDVyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDakIsV0FBVyxDQUFDUyxXQUFXLEdBQUcsSUFBSTtJQUU5QlAsS0FBSyxDQUFDUSxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO01BQ2xCQSxJQUFJLENBQUNPLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUNGZCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDbEJBLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2tCLGVBQWUsR0FBRyxTQUFTO0lBQzFDLENBQUMsQ0FBQztJQUNGVCxZQUFZLENBQUNLLE9BQU8sQ0FBQyxVQUFBSyxVQUFVLEVBQUk7TUFDL0JBLFVBQVUsQ0FBQ25CLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxTQUFTO0lBQ3RDLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQXZCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBSXJCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeENQLFdBQVcsQ0FBQ1MsV0FBVyxHQUFHLElBQUk7RUFDbEMsQ0FBQyxNQUNJO0lBQUVULFdBQVcsQ0FBQ1MsV0FBVyxHQUFHLElBQUk7RUFBQztBQUMxQyxDQUFDLENBQUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHsjIGZsYXNoIG1lc3NhZ2UgaGlkZGVyICN9XHJcbmxldCBmbGFzaF9tc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxhc2hfbXNnJylcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoZmxhc2hfbXNnKSB7IGZsYXNoX21zZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIH1cclxufSwgNTAwMClcclxuLy8geyMgZW5kIGZsYXNoIG1lc3NhZ2UgaGlkZGVyICN9XHJcblxyXG4vLyB7IyBidG4gdGhlbWUgc3dpdGNoZXIgI31cclxuY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuY29uc3QgdGhlbWVTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVTeW1ib2wnKVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XHJcblxyXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbnMnKVxyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHMnKVxyXG4gICAgY29uc3QgdGl0bGVzX2NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlc19jYXJkcycpXHJcblxyXG4gICAgaWYgKGh0bWxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpKSB7XHJcbiAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXHJcbiAgICAgICAgdGhlbWVTeW1ib2wudGV4dENvbnRlbnQgPSAn8J+MkSdcclxuXHJcbiAgICAgICAgaWNvbnMuZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVBdHRyaWJ1dGUoJ2ZpbGwnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzN0FERkYnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRpdGxlc19jYXJkcy5mb3JFYWNoKHRpdGxlX2NhcmQgPT4ge1xyXG4gICAgICAgICAgICB0aXRsZV9jYXJkLnN0eWxlLmNvbG9yID0gJyM4QTY1MDAnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yeJ1xyXG5cclxuICAgICAgICBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjZmZmJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAyOUUwJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRpdGxlc19jYXJkcy5mb3JFYWNoKHRpdGxlX2NhcmQgPT4ge1xyXG4gICAgICAgICAgICB0aXRsZV9jYXJkLnN0eWxlLmNvbG9yID0gJyNERDg1MDcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGh0bWxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpKSB7XHJcbiAgICAgICAgdGhlbWVTeW1ib2wudGV4dENvbnRlbnQgPSAn8J+MnidcclxuICAgIH1cclxuICAgIGVsc2UgeyB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yRJyB9XHJcbn0pO1xyXG4vLyB7IyBlbmQgYnRuIHRoZW1lIHN3aXRjaGVyICN9Il0sIm5hbWVzIjpbImZsYXNoX21zZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJodG1sRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsInRoZW1lU3ltYm9sIiwidG9nZ2xlVGhlbWUiLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkcyIsInRpdGxlc19jYXJkcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwiaWNvbiIsInJlbW92ZUF0dHJpYnV0ZSIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZV9jYXJkIiwiY29sb3IiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==