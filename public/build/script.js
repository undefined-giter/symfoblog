(self["webpackChunk"] = self["webpackChunk"] || []).push([["script"], {

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
        var icons = document.querySelectorAll('.icon');
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

      /***/
})

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/js/script.js"));
  /******/
}
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNwREMsVUFBVSxDQUFDLFlBQU07RUFDYixJQUFJSCxTQUFTLEVBQUU7SUFBRUEsU0FBUyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQUM7QUFDdEQsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNSOztBQUVBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHTCxRQUFRLENBQUNNLGVBQWU7QUFDNUMsSUFBTUMsV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFFMUQsU0FBU08sV0FBV0EsQ0FBQSxFQUFHO0VBRW5CLElBQU1DLEtBQUssR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7RUFDaEQsSUFBTUMsS0FBSyxHQUFHWCxRQUFRLENBQUNVLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNqRCxJQUFNRSxZQUFZLEdBQUdaLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBRS9ELElBQUlMLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeENULFdBQVcsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BDUixXQUFXLENBQUNTLFdBQVcsR0FBRyxJQUFJO0lBRTlCUCxLQUFLLENBQUNRLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7TUFDbEJBLElBQUksQ0FBQ0MsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFDRlIsS0FBSyxDQUFDTSxPQUFPLENBQUMsVUFBQUcsSUFBSSxFQUFJO01BQ2xCQSxJQUFJLENBQUNqQixLQUFLLENBQUNrQixlQUFlLEdBQUcsU0FBUztJQUMxQyxDQUFDLENBQUM7SUFDRlQsWUFBWSxDQUFDSyxPQUFPLENBQUMsVUFBQUssVUFBVSxFQUFJO01BQy9CQSxVQUFVLENBQUNuQixLQUFLLENBQUNvQixLQUFLLEdBQUcsU0FBUztJQUN0QyxDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSGxCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDVyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDakIsV0FBVyxDQUFDUyxXQUFXLEdBQUcsSUFBSTtJQUU5QlAsS0FBSyxDQUFDUSxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO01BQ2xCQSxJQUFJLENBQUNPLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUNGZCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDbEJBLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2tCLGVBQWUsR0FBRyxTQUFTO0lBQzFDLENBQUMsQ0FBQztJQUNGVCxZQUFZLENBQUNLLE9BQU8sQ0FBQyxVQUFBSyxVQUFVLEVBQUk7TUFDL0JBLFVBQVUsQ0FBQ25CLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxTQUFTO0lBQ3RDLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQXZCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBSXJCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeENQLFdBQVcsQ0FBQ1MsV0FBVyxHQUFHLElBQUk7RUFDbEMsQ0FBQyxNQUNJO0lBQUVULFdBQVcsQ0FBQ1MsV0FBVyxHQUFHLElBQUk7RUFBQztBQUMxQyxDQUFDLENBQUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHsjIGZsYXNoIG1lc3NhZ2UgaGlkZGVyICN9XHJcbmxldCBmbGFzaF9tc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxhc2hfbXNnJylcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoZmxhc2hfbXNnKSB7IGZsYXNoX21zZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIH1cclxufSwgNTAwMClcclxuLy8geyMgZW5kIGZsYXNoIG1lc3NhZ2UgaGlkZGVyICN9XHJcblxyXG4vLyB7IyBidG4gdGhlbWUgc3dpdGNoZXIgI31cclxuY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuY29uc3QgdGhlbWVTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVTeW1ib2wnKVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XHJcblxyXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbicpXHJcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkcycpXHJcbiAgICBjb25zdCB0aXRsZXNfY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGVzX2NhcmRzJylcclxuXHJcbiAgICBpZiAoaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHtcclxuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yRJ1xyXG5cclxuICAgICAgICBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUF0dHJpYnV0ZSgnZmlsbCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM3QURGRic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGl0bGVzX2NhcmRzLmZvckVhY2godGl0bGVfY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHRpdGxlX2NhcmQuc3R5bGUuY29sb3IgPSAnIzhBNjUwMCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxyXG4gICAgICAgIHRoZW1lU3ltYm9sLnRleHRDb250ZW50ID0gJ/CfjJ4nXHJcblxyXG4gICAgICAgIGljb25zLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdmaWxsJywgJyNmZmYnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDI5RTAnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGl0bGVzX2NhcmRzLmZvckVhY2godGl0bGVfY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHRpdGxlX2NhcmQuc3R5bGUuY29sb3IgPSAnI0REODUwNyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHtcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yeJ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7IHRoZW1lU3ltYm9sLnRleHRDb250ZW50ID0gJ/CfjJEnIH1cclxufSk7XHJcbi8vIHsjIGVuZCBidG4gdGhlbWUgc3dpdGNoZXIgI30iXSwibmFtZXMiOlsiZmxhc2hfbXNnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImh0bWxFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwidGhlbWVTeW1ib2wiLCJ0b2dnbGVUaGVtZSIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNhcmRzIiwidGl0bGVzX2NhcmRzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJpY29uIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FyZCIsImJhY2tncm91bmRDb2xvciIsInRpdGxlX2NhcmQiLCJjb2xvciIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9