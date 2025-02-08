let product = document.querySelector("#detailsbutton");
let defaultdiv = document.querySelector("#defaultdiv")

product.addEventListener("click",(e)=>{
     localStorage.setItem("productId",e.target.dataset.id)
})



let count = 0;
let sum = 0 ;
let cart = {};

if (localStorage.getItem("count")){
  count = parseInt(localStorage.getItem("count"));
}
if (localStorage.getItem("sum")){
sum = parseFloat(localStorage.getItem("sum"));
}
if (localStorage.getItem("cart")){
  cart = JSON.parse(localStorage.getItem("cart"));
  }

updateCart();





let data = [];
async function data1(){
   let fetchdata = await fetch("https://fakestoreapi.com/products");
   let  source = await fetchdata.json();
    source.forEach(ele => {
        data.push(ele);
    });

 carts(source);

} 

data1();






  // function cartmatter(elementid,quantity,data){


   

  // }



  function updateCart() {
    // document.getElementById(".sum").textContent = sum;
    document.getElementById("count").textContent = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
   
    
  }

function increment(cart){
  let increbtns = document.querySelectorAll(".increment")
  
  
  increbtns.forEach((ele)=>{
  
       ele.addEventListener("click",(e)=>{
            let cartid = e.target.dataset.id;
            let number =  cart[cartid].qty++;  
             localStorage.setItem("cart", JSON.stringify(cart));  
            
             carts(data);
            
            })
  })
  
}


function decrement(cart){
  let decrebtns = document.querySelectorAll(".decrement")

  decrebtns.forEach((ele)=>{

       ele.addEventListener("click",(e)=>{
        
            let cartid = e.target.dataset.id;
            cart[cartid].qty--;
           
             localStorage.setItem("cart", JSON.stringify(cart));  
             
             carts(data);
             
            })
  })
 
  // cart = JSON.parse(localStorage.getItem("cart"));
  // for(let ele in cart){
  //   if(cart[ele].qty==0){

  //   }

  // }
  }





function carts(data){
 
    cart = JSON.parse(localStorage.getItem("cart"));
    
  if(!localStorage.getItem("cart")){
      display=alert("Cart is Empty");
      let cartempty=` <div style="text-align:center;">
                <h1 style="font-weight:100; margin-top:60px; margin-left:600px; background-color:lightgrey; width:310px;">Your Cart is Empty</h1>
                <button type="button" onclick="window.location.href='./index.html'" style="border:1px solid black; margin-top:15px; " class="btn btn-light"><ion-icon style="position: relative; top:3px; right:2px; "  name="arrow-back-outline"></ion-icon>Continue Shoppping</button>
      </div>`
      defaultdiv.innerHTML=cartempty;
  }
  else{

   var cartele=""
   for(let ele in cart){
      if(cart[ele].qty!==0){
  
      let elementid = ele
      let quantity = cart[ele].qty

      let productdata = data.find(ele=>ele.id== elementid );
  
   let image= productdata.image;
   let title = productdata.title;
   let price = productdata.price; 
  
   
     cartele += ` <div style="display:flex;  border:1px solid lightgrey">

        <img style="height:120px; width:120px; padding:10px; margin-right:60px;" src="${image}"/>
        <p style="width:400px; margin-top:30px; font-weight:bold;">${title}</p>
        <div style="display:flex; flex-direction:column; margin-right:20px;">
        <div style="display:flex;">
         <button class="decrement" data-id=${elementid}  style="border:0px; background-color:white; padding:0px 20px; font-size:25px; position:relative; height:10px;  margin-right:30px; ">_</button>
         <span class="numberchange" style="padding-top:10px;">${quantity}</span>
         <button class="increment" data-id=${elementid} style="margin-left:30px; position:relative; top:0px; border:0px;  background-color:white;  padding:10px 20px; font-size:25px;">+</button>
        </div>
        <div>
          <p style="text-align: center;">${quantity} <span style="font-weight:bold;">x $${price}<span/></p>
        </div>
      </div>
    </div> 
    
    `
  }
     
   }

  // let totalprice=0
  //  for(let ele in cart){
  //   console.log(cart[ele].qty);
    
  //     totalprice +=(cart[ele].qty*cart[ele].price);
  // } 
  let totalprice =  orderSummary(cart);
 

   defaultdiv.innerHTML=`<div style="display:flex;">
   <div style="margin:0px 0px 0px 200px; width:750px;">
    <div style="border:1px solid lightgrey; background-color:rgba(234,234,234,1); border-top-left-radius:5px; border-top-right-radius:5px;">
      <p style="margin:10px; font-weight:bold;">Item List</p>
  </div>
 ${cartele}
  </div>
  <div style="margin:0px 0px 0px 50px; width:320px;">
      <div style="border:1px solid lightgrey; background-color:rgba(234,234,234,1);  border-top-left-radius:5px; border-top-right-radius:5px;">
        <p style="margin:10px; font-weight:bold;">Order Summary</p>
      </div>
      <div style="padding:20px; border:1px solid lightgrey;">
        <div style="display:flex; justify-content: space-between;" >
        <p>Products()</p>
        <p>$${totalprice}</p>
      </div>
      <div style="display:flex; justify-content: space-between;">
        <p>Shipping</p>
        <p>$30</p>
      </div>
      <div style="display:flex; justify-content: space-between;">
        <p style="font-weight:bold;">Total amount</p>
        <p style= "font-weight:bold;">$${totalprice+30}</p>
      </div>
        <button  style="width:270px; padding:8px;" type="button" class="btn btn-dark">Go to checkout</button>
      </div>
    </div>
</div>`
increment(cart);
decrement(cart);


  }
}



function orderSummary(cart){
 let totalprice = 0;
for(let ele in cart){
  console.log(cart[ele].qty);
  
    totalprice +=(cart[ele].qty*cart[ele].price);
}
return totalprice
}




