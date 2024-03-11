// Add content wrapper
const addContentWrapper = document.getElementById("add_content--wrapper");

// Add header 1
const headerOne = document.querySelector(".header_1--button");
headerOne?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Header 2</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput">
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
}); 
// Add header 2
const headerTwo = document.querySelector(".header_2--button");
headerTwo?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Header 3</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput">
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});
// Add header 3
const headerThree = document.querySelector(".header_3--button");
headerThree?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Header 4</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput">
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});
// Add header 4
const headerFour = document.querySelector(".header_4--button");
headerFour?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Header 4</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button  class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput">
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});

// Add paragraph
const addParagraph = document.querySelector(".add__paragraph--button");
addParagraph?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
    <h5 class="infotopia_heading-title">Paragraph</h5>
    <ul class="infotopia_heading-btn d-flex">
            <li>
                <button  class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
  </div>
      
    <div class="infotopia_heading-ipnput">
        <textarea></textarea>
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});

// Add Figure
const addFigure = document.querySelector(".add__figure--button");
addFigure?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Figure</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button  class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput mb-30">
        <label class="articles_select-items_label">Title</label>
        <input type="text">
    </div>
    <div class="infotopia_heading-ipnput mb-30">
        <label class="articles_select-items_label">Image - Light</label>
        <input type="text">
    </div>
    <div class="infotopia_heading-ipnput mb-30">
        <label class="articles_select-items_label">Image - Dark</label>
        <input type="text">
    </div>
    <div class="infotopia_heading-ipnput">
        <label class="articles_select-items_label">Image - Source</label>
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});

// Add Bullet point
const bulletPoint = document.querySelector(".add__bullet-point--button");
bulletPoint?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Bullet Point</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput">
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
}); 

// Add Figure
const addQuote = document.querySelector(".add__quote--button");
addQuote?.addEventListener("click", function(event){
    event.preventDefault();

    // Create parent div
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("infotopia_heading-items");
    headerDiv.innerHTML = `<div class="infotopia_heading-topbar d-flex justify-content-between align-items-center">
        <h5 class="infotopia_heading-title">Quote</h5>
        <ul class="infotopia_heading-btn d-flex">
            <li>
                <button  class="arrow__down--button">
                    <svg id="vuesax_linear_arrow-square-down" data-name="vuesax/linear/arrow-square-down" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-down">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,0,4.412,4.4,8.824,0" transform="translate(10.587 13.299)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>               
                </button>
            </li>
            <li>
                <button class="arrow__up--button">
                    <svg id="vuesax_linear_arrow-square-up" data-name="vuesax/linear/arrow-square-up" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="arrow-square-up">
                    <path id="Vector" d="M8.749,25h7.5C22.5,25,25,22.5,25,16.249v-7.5C25,2.5,22.5,0,16.249,0h-7.5C2.5,0,0,2.5,0,8.749v7.5C0,22.5,2.5,25,8.749,25Z" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M0,4.4,4.412,0,8.824,4.4" transform="translate(10.587 12.424)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(29.998 29.998) rotate(180)" fill="none" opacity="0"/>
                    </g>
                </svg>              
                </button>
            </li>
            <li>
                <button class="remove__header--button">
                    <svg id="vuesax_linear_tag-cross" data-name="vuesax/linear/tag-cross" xmlns="http://www.w3.org/2000/svg" width="29.998" height="29.998" viewBox="0 0 29.998 29.998">
                    <g id="tag-cross">
                    <path id="Vector" d="M10.359,20.624h8.4a6.252,6.252,0,0,0,6.25-6.25V6.25A6.252,6.252,0,0,0,18.758,0h-8.4A6.222,6.222,0,0,0,5.734,2.05L1.322,6.9a5.065,5.065,0,0,0,0,6.825l4.412,4.85A6.222,6.222,0,0,0,10.359,20.624Z" transform="translate(2.49 4.687)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Vector-2" data-name="Vector" d="M6.175,6.175,0,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-3" data-name="Vector" d="M0,6.175,6.175,0" transform="translate(13.824 11.912)" fill="none" stroke="#464646" stroke-linecap="round" stroke-width="1.5"/>
                    <path id="Vector-4" data-name="Vector" d="M0,0H30V30H0Z" fill="none" opacity="0"/>
                    </g>
                </svg>                                                              
                </button>
            </li>
        </ul>
    </div>
    <div class="infotopia_heading-ipnput mb-30">
        <label class="articles_select-items_label">Message</label>
        <input type="text">
    </div>
    <div class="infotopia_heading-ipnput">
        <label class="articles_select-items_label">Author</label>
        <input type="text">
    </div>`;
    addContentWrapper.appendChild(headerDiv);
});

// Remove header
document.querySelector("#add_content--wrapper").addEventListener("click", function(event){
    if(event.target.classList.contains("remove__header--button")){
        event.target.parentElement.parentElement.parentElement.parentElement.remove()
    }
})

addContentWrapper?.addEventListener('click', function(event){
    if(event.target.classList.contains("arrow__up--button")){
        let wrapper = event.target.parentElement.parentElement.parentElement.parentElement;
        if (wrapper.previousElementSibling)
        wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
    }
    if(event.target.classList.contains("arrow__down--button")){
        console.log("arrow down");
        let wrapper = event.target.parentElement.parentElement.parentElement.parentElement;
        if (wrapper.nextElementSibling)
                    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
    }

})

