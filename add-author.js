// Add author js
const addAuthor = document.querySelector("#add__author--button");
const authorContainer = document.querySelector("#author__list--container");
let authorCount = 2;
let authorContent = `<div class="new__author--item library__input--author d-flex align-items-end mt-30">
<div class="input__box">
  <label class="input__label mb-12 author__count--item" for="author">Author (<span class="author__count">${authorCount}</span>) </label>
  <input class="input__field" id="author" type="text">
</div>
<button class="classroom__info--close__btn author__remove--button">
  <svg xmlns="http://www.w3.org/2000/svg" width="19.997" height="19.997" viewBox="0 0 19.997 19.997">
    <g id="vuesax_linear_close-circle" data-name="vuesax/linear/close-circle" transform="translate(-236 -252)">
      <g id="close-circle" transform="translate(236 252)">
        <path id="Vector" d="M8.332,16.664A8.332,8.332,0,1,0,0,8.332,8.356,8.356,0,0,0,8.332,16.664Z" transform="translate(1.666 1.666)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-2" data-name="Vector" d="M0,4.716,4.716,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-3" data-name="Vector" d="M4.716,4.716,0,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-4" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"></path>
      </g>
    </g>
  </svg>                                  
</button>
</div>`;

addAuthor?.addEventListener("click", (event) => {
    event.preventDefault();
    authorContainer.insertAdjacentHTML("beforeend", authorContent);
  
    let lessonList = document.querySelector("#author__list--container").querySelectorAll(".library__input--author");

    lessonList.forEach((item, i) => {
      item.querySelector(".author__count").innerText = ++i;
    })
    
});
authorContainer?.addEventListener("click", (event) => {
    if(event.target.classList.contains("author__remove--button")){
        event.target.parentElement.remove();
    }
    let lessonList = document.querySelector("#author__list--container").querySelectorAll(".library__input--author");

    lessonList.forEach((item, i) => {
      item.querySelector(".author__count").innerText = ++i;
    })
})