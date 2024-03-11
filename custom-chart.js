/**
 * Rgister user by age chart js
 */
 const ChartAxisID = document.getElementById('chart__axis_value');
 if(ChartAxisID){
    const ChartAxisValue = ChartAxisID.dataset.value;
    const AxisIncrementValue = Math.ceil(ChartAxisValue / 6);
    
    var i = 0;
    var last=0;
    while(i <= ChartAxisValue){
        const AxisLi = document.createElement('li');
        AxisLi.innerHTML = i;
        ChartAxisID.appendChild(AxisLi);
        last=i;
        i += AxisIncrementValue
    };
    if(ChartAxisValue > last){
        let newVal = document.createElement('li');
        newVal.innerHTML = i;
        ChartAxisID.appendChild(newVal);
    }
    // Day Session 
    const DaySession = document.querySelectorAll('.chart__verticle--line__item');
    DaySession.forEach((element, index) => {
        let DarkGreenSessionValue = element.children[1].dataset.value;
        
        // Dark Green Item
        let DarkGreenItemHeight = DarkGreenSessionValue * 100 / ChartAxisValue;
        element.children[1].style.height = `${DarkGreenItemHeight}%`;
    });
 }

/**
 * Register by education chart js
 */
 
 const educationChartID = document.getElementById('edcuation--chart__verticle--value');
 if(educationChartID){
    const educationCharValue = educationChartID.dataset.value;
    const educationChartIncrementValue = Math.ceil(educationCharValue / 10);
    var eductionInit = 0;
    var educationLastValue = 0;
    while(eductionInit <= educationCharValue){
        let eduVerticleList = document.createElement('li');
        eduVerticleList.classList.add('education--chart__verticle--item');
        // Inner HTML Tag
        let eduVerticleLineSpan = document.createElement('span');
        eduVerticleLineSpan.classList.add('education--chart__verticle--item__line');
        eduVerticleList.appendChild(eduVerticleLineSpan);

        let eduVerticleLineLabel = document.createElement('span');
        eduVerticleLineLabel.classList.add('education--chart__verticle--item__label');
        eduVerticleLineLabel.innerHTML = eductionInit;
        eduVerticleList.appendChild(eduVerticleLineLabel);

        educationChartID.appendChild(eduVerticleList);
        educationLastValue = eductionInit;
        eductionInit += educationChartIncrementValue
    };
    if(educationCharValue > educationLastValue){
        let newVal = document.createElement('li');
        newVal.classList.add('education--chart__verticle--item');
        // Inner HTML Tag
        let educationVerticleLineSpan = document.createElement('span');
        educationVerticleLineSpan.classList.add('education--chart__verticle--item__line');
        newVal.appendChild(educationVerticleLineSpan);

        let educationVerticleLineLabel = document.createElement('span');
        educationVerticleLineLabel.classList.add('education--chart__verticle--item__label');
        educationVerticleLineLabel.innerHTML = genderInit;
        newVal.appendChild(educationVerticleLineLabel);

        educationChartID.appendChild(newVal);
    }
    const educationRegisterProgressList = document.querySelectorAll('.education--chart__horizontal--line__item');
    educationRegisterProgressList.forEach((item, index) => {
        let DarkGreenSessionValue = item.children[1].children[1];
        // Dark Green Item
        let DarkGreenItemHeight = DarkGreenSessionValue.dataset.value * 100 / educationCharValue;
        DarkGreenSessionValue.style.width = `${DarkGreenItemHeight}%`;
    });
 }

/**
 * Gender chart js
 */
 const genderChartID = document.getElementById('gender--chart__verticle--value');
 if(genderChartID){
    const genderCharValue = genderChartID.dataset.value;
    const genderChartIncrementValue = Math.ceil(genderCharValue / 9);
    var genderInit = 0;
    var genderLastValue = 0;
    while(genderInit <= genderCharValue){
        let genderVerticleList = document.createElement('li');
        genderVerticleList.classList.add('education--chart__verticle--item');
        // Inner HTML Tag
        let genderVerticleLineSpan = document.createElement('span');
        genderVerticleLineSpan.classList.add('education--chart__verticle--item__line');
        genderVerticleList.appendChild(genderVerticleLineSpan);

        let genderVerticleLineLabel = document.createElement('span');
        genderVerticleLineLabel.classList.add('education--chart__verticle--item__label');
        genderVerticleLineLabel.innerHTML = genderInit;
        genderVerticleList.appendChild(genderVerticleLineLabel);

        genderChartID.appendChild(genderVerticleList);
        genderLastValue = genderInit;
        genderInit += genderChartIncrementValue
    };
    if(genderCharValue > genderLastValue){
        let newVal = document.createElement('li');
        newVal.classList.add('education--chart__verticle--item');
        // Inner HTML Tag
        let genderVerticleLineSpan = document.createElement('span');
        genderVerticleLineSpan.classList.add('education--chart__verticle--item__line');
        newVal.appendChild(genderVerticleLineSpan);

        let genderVerticleLineLabel = document.createElement('span');
        genderVerticleLineLabel.classList.add('education--chart__verticle--item__label');
        genderVerticleLineLabel.innerHTML = genderInit;
        newVal.appendChild(genderVerticleLineLabel);

        genderChartID.appendChild(newVal);
    }
    const genderRegisterProgressList = document.querySelectorAll('.gender--chart__horizontal--line__item');
    genderRegisterProgressList.forEach((item, index) => {
        let DarkGreenSessionValue = item.children[1].children[1];
        // Dark Green Item
        let DarkGreenItemHeight = DarkGreenSessionValue.dataset.value * 100 / genderCharValue;
        DarkGreenSessionValue.style.width = `${DarkGreenItemHeight}%`;
    });
 }
 
 /**
  * Clicks or posts per view
*/
const perViewChart = document.getElementById('clicks--posts__per--view');
const clickPerViewChart = document.querySelector('.clicks__button--per__button');
const postPerViewChart = document.querySelector('.posts__button--per__button');

clickPerViewChart?.addEventListener('click', (event) => {
    event.preventDefault();
    perViewChart.classList.add('clicks--per__view--active')
    if(perViewChart.classList.contains('posts--per__view--active')){
        perViewChart.classList.remove('posts--per__view--active')
    };
})
postPerViewChart?.addEventListener('click', (event) => {
    event.preventDefault();
    perViewChart.classList.add('posts--per__view--active')
    if(perViewChart.classList.contains('clicks--per__view--active')){
        perViewChart.classList.remove('clicks--per__view--active')
    };
})