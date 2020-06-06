// Select element function
const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let header = selectElement('header');

menuToggler.addEventListener('click', function() {
    header.classList.toggle('open');
});

// $(document).ready(function () {
//       $nav = $('.nav');
//       $toggleCollapse = $('.toggle-collapse');

//       /* click event on toggle menu */
//       $toggleCollapse.click(function () {
//         $nav.toggleClass('collapse');
//       });