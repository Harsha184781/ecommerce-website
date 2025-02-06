let product = document.querySelector("#detailsbutton");
let defaultdiv = document.querySelector("#defaultdiv")

product.addEventListener("click",(e)=>{
     localStorage.setItem("productId",e.target.dataset.id)
})


var cartele=""
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

 carts();

} 

data1();






  function cartmatter(elementid,quantity,data){


   let productdata = data.find(ele=>ele.id== elementid );
  
   let image= productdata.image;
   let title = productdata.title;
   let price = productdata.price; 
  
   
     cartele += ` <div style="display:flex;  border:1px solid lightgrey">

        <img style="height:120px; width:120px; padding:10px; margin-right:60px;" src="${image}"/>
        <p style="width:400px;">${title}</p>
        <div style="display:flex; flex-direction:column; margin-right:20px;">
        <div style="display:flex;">
         <button class="decrement" data-id=${elementid}  style="border:0px; background-color:white; padding:0px 20px; font-size:25px; position:relative; height:10px;  margin-right:30px; ">_</button>
         <span class="numberchange" style="padding-top:10px;">${quantity}</span>
         <button class="increment" data-id=${elementid} style="margin-left:30px; position:relative; top:0px; border:0px;  background-color:white;  padding:10px 20px; font-size:25px;">+</button>
        </div>
        <div>
          <p style="text-align: center;">${quantity} x $${price}</p>
        </div>
      </div>
    </div> 
     
    `

  }



  function updateCart() {
    // document.getElementById(".sum").textContent = sum;
    document.getElementById("count").textContent = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
   
    
  }

function increment(){
  let increbtns = document.querySelectorAll(".increment")
  
  
  increbtns.forEach((ele)=>{
    console.log(ele);
       ele.addEventListener("click",(e)=>{
            let cartid = e.target.dataset.id;
            let number =  cart[cartid].qty++;  
            let quantityEle = document.querySelector(".numberchange")
            quantityEle.innerHTML=number
            //  if (e.target.classList.closest("numberchange")){
              
            //  }
            // e.target.closest(".numberchange").innerHTML=number;
             localStorage.setItem("cart", JSON.stringify(cart));  
             updateCart();

            
            })
  })

}


function decrement(){
  let decrebtns = document.querySelector(".decrement")
  
}





function carts(){
  if(!localStorage.getItem("cart")){
      display=alert("Cart is Empty");
      let cartempty=` <div style="text-align:center;">
                <h1 style="font-weight:100; margin-top:60px; margin-left:600px; background-color:lightgrey; width:310px;">Your Cart is Empty</h1>
                <button type="button" onclick="window.location.href='./index.html'" style="border:1px solid black; margin-top:15px; " class="btn btn-light"><ion-icon style="position: relative; top:3px; right:2px; "  name="arrow-back-outline"></ion-icon>Continue Shoppping</button>
      </div>`
      defaultdiv.innerHTML=cartempty;
  }
  else{
  
   for(let ele in cart){
      
  
      let elementid = ele
      let quantity = cart[ele].qty
      cartmatter(elementid,quantity,data);
     
   }   
       
   defaultdiv.innerHTML=`<div style="display:flex;">
   <div style="margin:0px 0px 0px 200px; width:750px;">
    <div style="border:1px solid lightgrey; background-color:rgba(234,234,234,1); border-top-left-radius:5px; border-top-right-radius:5px;">
      <p style="margin:10px;">Item List</p>
  </div>
 ${cartele}
  </div>
  <div style="margin:0px 0px 0px 50px; width:320px;">
      <div style="border:1px solid lightgrey; background-color:rgba(234,234,234,1);  border-top-left-radius:5px; border-top-right-radius:5px;">
        <p style="margin:10px;">Order Summary</p>
      </div>
      <div style="padding:20px; border:1px solid lightgrey;">
        <div style="display:flex; justify-content: space-between;" >
        <p>Products()</p>
        <p>$451</p>
      </div>
      <div style="display:flex; justify-content: space-between;">
        <p>Shipping</p>
        <p>$30</p>
      </div>
      <div style="display:flex; justify-content: space-between;">
        <p style="font-weight:bold;">Total amount</p>
        <p>$451</p>
      </div>
        <button  style="width:270px; padding:8px;" type="button" class="btn btn-dark">Go to checkout</button>
      </div>
    </div>
</div>`

increment();

  }
}