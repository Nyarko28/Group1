

   


    //  cart button
const close=document.querySelector('.cls');
close.addEventListener('click',()=>{
    document.querySelector('.popup').style.display='none';
})
function  showPop(itemName,price,description,images)
{

const popup=document.querySelector('.popup');
document.querySelector('.item_name').innerHTML=itemName;
document.querySelector('.item_price').innerHTML=`${price}`;
document.querySelector('.item_description').innerHTML=description;
document.querySelector('.images').src=`${images}`;
popup.style.display='flex';

//  was created by emmanuel nyarko 0534086538
//  was created by emmanuel nyarko 0534086538

}


// form switching
const user=document.querySelector('.user');
const guest=document.querySelector('.guest');
const login=document.querySelector('.login');
const register=document.querySelector('.register');
user.addEventListener('click',()=>{
login.style.display='flex';
register.style.display='none'
user.classList.add('push');
guest.classList.remove('push')

})
guest.addEventListener('click',()=>{

register.style.display='flex';
login.style.display='none'
guest.classList.add('push');
user.classList.remove('push');


})



// page switching
const feat= document.querySelector('#featured_main');
const prod= document.querySelector('.product');
const me= document.querySelector('.about');
const call= document.querySelector('.Contact');
const log= document.querySelector('.account');
const sel= document.querySelector('.cart');


const home=document.querySelector('.homepage');


const items=document.querySelector('.prod_page');
const about=document.querySelector('.about_page');
const contact=document.querySelector('.contact_page');
const accnt=document.querySelector('.acc_page');
const cart=document.querySelector('.cart_page');

home.addEventListener('click',(e)=>{

    e.preventDefault();

feat.style.display='block';
if(feat.style.display='block'){
    log.style.display='none'
    prod.style.display='none'
    me.style.display='none'
    sel.style.display='none'
    call.style.display='none'
}
//  was created by emmanuel nyarko 0534086538
//  was created by emmanuel nyarko 0534086538


else{
    feat.style.display='none'
}
})

items.addEventListener('click',(e)=>{
    e.preventDefault();

prod.style.display='flex';
if(prod.style.display='flex'){
    feat.style.display='none'
    log.style.display='none'
    me.style.display='none'
    sel.style.display='none'
    call.style.display='none'
}

else{
    prod.style.display='none'
}

})

contact.addEventListener('click',(e)=>{
    e.preventDefault();

    call.style.display ='block';
if(call.style.display ='block'){


  feat.style.display='none'
  prod.style.display='none'
  me.style.display='none'
  sel.style.display='none'
  log.style.display='none'
  document.querySelector('.desk').style.display='none';
  document.querySelector('.chair').style.display='none';
  document.querySelector('inner_curtain').style.display='none';
}

else{
    call.style.display='none';
    document.querySelector('.desk').style.display='block';
  document.querySelector('.chair').style.display='block';
  document.querySelector('inner_curtain').style.display='block';
}

})
//  was created by emmanuel nyarko 0534086538
//  was created by emmanuel nyarko 0534086538

about.addEventListener('click',(e)=>{
    e.preventDefault();


me.style.display='block';
if(me.style.display='block'){
    feat.style.display='none'
    prod.style.display='none'
    log.style.display='none'
    sel.style.display='none'
    call.style.display='none'

}else{
    me.style.display='none'
}

})

accnt.addEventListener('click',(e)=>{
    e.preventDefault();

    log.style.display='block';
if( log.style.display='block'){
  feat.style.display='none'
  prod.style.display='none'
  me.style.display='none'
  sel.style.display='none'
  call.style.display='none'
}

else{
    log.style.display='none'
}
})



cart.addEventListener('click',(e)=>{
    e.preventDefault();

    sel.style.display ='block'
if(sel.style.display='block'){

    feat.style.display='none'
    prod.style.display='none'
    me.style.display='none'
    log.style.display='none'
    call.style.display='none'
}
else{
    sel.style.display='none'
}

})


// bringing input to cart page

function add(){
    
    const allitems =document.querySelector('.carttable');
   const valuein=document.querySelector('.cartvalue')
   total=valuein;
   const price=document.querySelector('.item_price').innerHTML;
   const name=document.querySelector('.item_name').innerHTML;
  
   allitems.querySelector('tbody').innerHTML+=`<tr> 
    <td>${name} </td>  
    <td>${price } </td>
    <td>${valuein.value} </td>
    <td class='td'>${price * valuein.value} </td>

    </tr>`;
   

    sound.play();
    
    // update total
//  was created by emmanuel nyarko 0534086538
     
    const tds =document.querySelectorAll('.td');
    
       let sum=0;
       tds.forEach(td => {
           sum+=parseInt(td.textContent);
           console.log(sum)
           document.querySelector('.total').innerHTML=sum;
       });
}
// updating notification
const notification= document.querySelector('.notify');
const puShn= document.querySelector('.mybtn');
const sound= document.querySelector('.sound');

puShn.addEventListener('click',()=>{


const notcount= document.querySelector('.notifycount')
const curValue=parseInt(notcount.value);
const newValue = curValue+1;
notcount.value=newValue.toString();
notification.innerHTML = `${notcount.value}`;
let headshow=document.querySelector('header');

headshow.style.position='fixed';
setTimeout(() => {
headshow.style.position ='relative';

}, 2000);

//  was created by emmanuel nyarko 0534086538
})
let roll=document.querySelector('.inner_curtain');
roll.classList.add('flip');
// login credential
const customer= document.querySelector('.costo');
const new_customer= document.querySelector('.costonew');
const customer_code= document.querySelector('.costo_code');
const new_customer_code= document.querySelector('.costonew_code');

admin = document.querySelector('.admin');
admin.addEventListener('click',()=>{


if(customer.value ==='ace@group1.com' || (customer.value ==='khedd@group1.com') ||(customer.value ==='kwasi@group1.com') || (customer.value ==='kwofie@group1.com') || (customer.value ==='qwaqulas@group1.com') || (customer.value ==='tessa@group1.com') || (customer.value ==='nyarkor') || (customer.value ==='ableGod@group1.com') && (customer_code.value ==='group1')){
    alert('Login successful');
    document.querySelector('.account').style.display='none';

    // curtain animation

    roll.style.display='block';
    document.querySelector('header').style.display='flex';

setInterval(() => {
    roll.style.display='none';
   
     document.querySelector('#featured_main').style.display='block';
    const desk= document.querySelector('.desk');
    const chair= document.querySelector('.chair');
    desk.classList.add('animy');
    chair.classList.add('animin');
}, 8300);
}
else{
    alert('email and password incorrect  please create new accont');
    const first_letter=new_customer.value.charAt(0);
    document.querySelector('.userId').innerHTML=first_letter;
    console.log('SubmitEvent')
}
})
//  was created by emmanuel nyarko 0534086538
//  was created by emmanuel nyarko 0534086538


reg_submit = document.querySelector('.reg_submit');


reg_submit.addEventListener('click',(e)=>{
    e.preventDefault();
     
    if(new_customer.value && new_customer_code.value !=null){
    if(new_customer.value ==='ace@group1.com' || (new_customer.value ==='khedd@group1.com') ||(new_customer.value ==='kwasi@group1.com') || (new_customer.value ==='kwofie@group1.com') || (new_customer.value ==='qwaqulas@group1.com') || (new_customer.value ==='tessa@group1.com') || (new_customer.value ==='nyarkor') || (new_customer.value ==='ableGod@group1.com') ){
        alert('Email already exist choose another email');
    }
    else{
    
      
    alert('Account created successfully');
    document.querySelector('.account').style.display='none';
    document.querySelector('header').style.display='flex';
    roll.style.display='block';

    // curtain animation
roll=document.querySelector('.inner_curtain');
roll.classList.add('flip');
setInterval(() => {
    roll.style.display='none';
   
    
    const desk= document.querySelector('.desk');
    const chair= document.querySelector('.chair');
    desk.classList.add('animy');
    chair.classList.add('animin');
}, 8300);
setTimeout(() => {
    document.querySelector('#featured_main').style.display='block';
    
}, 8000);
    const first_letter=new_customer.value.charAt(0);
    document.querySelector('.userId').innerHTML=first_letter;
    console.log('SubmitEvent')
    }
//  was created by emmanuel nyarko 0534086538
//  was created by emmanuel nyarko 0534086538

}else{
    alert('file the forms')
}
    
})












