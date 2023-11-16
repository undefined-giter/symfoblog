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
function toggleTheme() {
  var htmlElement = document.documentElement;
  var themeSymbol = document.querySelector('#themeSymbol');
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    themeSymbol.textContent = '🌑';
  } else {
    htmlElement.classList.add('dark');
    themeSymbol.textContent = '🌞';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var themeSymbol = document.querySelector('#themeSymbol');
  var htmlElement = document.documentElement;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNwREMsVUFBVSxDQUFDLFlBQU07RUFDYixJQUFJSCxTQUFTLEVBQUU7SUFBRUEsU0FBUyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQUM7QUFDdEQsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNSOztBQUVBO0FBQ0EsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO0VBQ25CLElBQU1DLFdBQVcsR0FBR04sUUFBUSxDQUFDTyxlQUFlO0VBQzVDLElBQU1DLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBRTFELElBQUlLLFdBQVcsQ0FBQ0csU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeENKLFdBQVcsQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BDSCxXQUFXLENBQUNJLFdBQVcsR0FBRyxJQUFJO0VBQ2xDLENBQUMsTUFBTTtJQUNITixXQUFXLENBQUNHLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqQ0wsV0FBVyxDQUFDSSxXQUFXLEdBQUcsSUFBSTtFQUNsQztBQUNKO0FBRUFaLFFBQVEsQ0FBQ2MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFNTixXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUMxRCxJQUFNSyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sZUFBZTtFQUU1QyxJQUFJRCxXQUFXLENBQUNHLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQ3hDRixXQUFXLENBQUNJLFdBQVcsR0FBRyxJQUFJO0VBQ2xDLENBQUMsTUFDSTtJQUFFSixXQUFXLENBQUNJLFdBQVcsR0FBRyxJQUFJO0VBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyB7IyBmbGFzaCBtZXNzYWdlIGhpZGRlciAjfVxyXG5sZXQgZmxhc2hfbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsYXNoX21zZycpXHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGZsYXNoX21zZykgeyBmbGFzaF9tc2cuc3R5bGUuZGlzcGxheSA9ICdub25lJyB9XHJcbn0sIDUwMDApXHJcbi8vIHsjIGVuZCBmbGFzaCBtZXNzYWdlIGhpZGRlciAjfVxyXG5cclxuLy8geyMgYnRuIHRoZW1lIHN3aXRjaGVyICN9XHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgIGNvbnN0IHRoZW1lU3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lU3ltYm9sJylcclxuXHJcbiAgICBpZiAoaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHtcclxuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yRJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yeJ1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGhlbWVTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVTeW1ib2wnKVxyXG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuXHJcbiAgICBpZiAoaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHtcclxuICAgICAgICB0aGVtZVN5bWJvbC50ZXh0Q29udGVudCA9ICfwn4yeJ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7IHRoZW1lU3ltYm9sLnRleHRDb250ZW50ID0gJ/CfjJEnIH1cclxufSk7XHJcbi8vIHsjIGVuZCBidG4gdGhlbWUgc3dpdGNoZXIgI30iXSwibmFtZXMiOlsiZmxhc2hfbXNnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZVRoZW1lIiwiaHRtbEVsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0aGVtZVN5bWJvbCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==