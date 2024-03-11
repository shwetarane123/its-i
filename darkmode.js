let getdark = localStorage.getItem('darkmode');
   
if(getdark === null){
    localStorage.setItem('darkmode','false');
}
    let darkchange = document.querySelector('.light__dark--btn');
     darkchange.id ='darkmode';

    let darkmode_btn = document.querySelector('#darkmode');
    let head = document.querySelector('head');

let link = document.createElement('link');
link.rel = 'stylesheet';
head.appendChild(link);
let panel = document.querySelector('.articles_mobile_menu div div');
let darkmode = document.querySelector('.light__dark--btn');
let li = document.createElement('li');
let a = document.createElement('a');
a.id = 'darkmode';
let logo1 =  darkmode.children[0];
let logo2 =  darkmode.children[1];

let add = logo1.cloneNode(true);
add.setAttribute('height','30');
add.setAttribute('width','30');
add.style.marginRight = '1.5rem';
add.setAttribute('viewBox','0 0 30 30');
let add1 = logo2.cloneNode(true);
add1.setAttribute('height','30');
add1.setAttribute('width','30');
let parser = '<svg xmlns="http://www.w3.org/2000/svg" width="30.005" height="30.005" viewBox="0 0 30.005 30.005"><g id="vuesax_linear_sun" data-name="vuesax/linear/sun" transform="translate(0)"><g id="sun" transform="translate(0 0)"><path id="Vector" d="M16.253,8.126A8.126,8.126,0,1,1,8.126,0,8.126,8.126,0,0,1,16.253,8.126Z" transform="translate(6.876 6.876)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-2" data-name="Vector" d="M21.266,3.738l.163-.163ZM3.576,21.428l.163-.163ZM12.5.1v0Zm0,24.9v0ZM.1,12.5h0Zm24.9,0h0ZM3.738,3.738l-.163-.163Zm17.69,17.69-.163-.163" transform="translate(2.5 2.5)" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Vector-3" data-name="Vector" d="M0,0H30V30H0Z" transform="translate(30.005 30.005) rotate(180)" fill="none" opacity="0"/></g></g></svg>'
add1 = new DOMParser().parseFromString(parser,'text/html').querySelector('svg');
let  deskadd1 = new DOMParser().parseFromString(parser,'text/html').querySelector('svg');
 deskadd1.id="vuesax_linear_moon";
 deskadd1.removeAttribute('style');
add1.style.marginRight = '1.5rem';
console.log(add1)
let realsvg = '';
let real  = '';
let first  =darkchange.children[0];
function checkdark(){
     if(localStorage.getItem('darkmode') === 'true'){
      //   localStorage.setItem('darkmode','false');
        link.href = '../assets/css/darkcsscolor.css';
        realsvg = add1;
        real = deskadd1.outerHTML;
        
      }  else{
         //   localStorage.setItem('darkmode','true');
      link.href = '';
      realsvg = add;
      real = first.outerHTML;
        
     }     
}

function dark(){
 
//  add1.style.marginRight = '1.5rem';
 if(localStorage.getItem('darkmode') === 'true'){
      localStorage.setItem('darkmode','false');
      link.href = '';
      realsvg = add;
      real = first.outerHTML;
   
   }  else{
      localStorage.setItem('darkmode','true');
      link.href = '../assets/css/darkcsscolor.css';
      real = deskadd1.outerHTML;
      realsvg = add1;

   }     
let status = localStorage.getItem('darkmode') == 'true' ? 'false':'true';
   pageDashboard1(status === 'false')
   pageDashboard3(status === 'false')
   pageDashboard7(status === 'false')
   a.appendChild(realsvg); 
a.innerHTML = realsvg.outerHTML + 'dark mode'; 
darkchange.innerHTML=real;   
}
checkdark()
darkmode_btn.addEventListener('click', dark);
darkchange.innerHTML=real;   

a.innerHTML = realsvg.outerHTML + 'dark mode'; 
a.addEventListener('click', dark );
li.appendChild(a);
panel.children[0].appendChild(li)
a.addEventListener('click', dark );
function pageDashboard1(){
   // don't write anything here
         }
         function pageDashboard3(){
            // don't write anything here
         }
         function pageDashboard7(){
            // don't write anything here
            
         }
         var myChart = null;

   



       