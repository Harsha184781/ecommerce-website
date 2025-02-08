

let alldata =[];
async function getdata(){
        let datafetch =  await fetch("https://fakestoreapi.com/products");
        let data = await datafetch.json();
        data.forEach((ele)=>{
             alldata.push(ele);
        })
        let locid = localStorage.getItem("productId");
        if(locid=="details"){
        createcards(data);
        }
        else{
         filterproduct(data);
        }
          
 }
 getdata();

 let maindiv=document.querySelector("#details");
 let defaultdiv = document.querySelector("#defaultdiv");
 let buttons = document.querySelectorAll(".filter");
 let locid = localStorage.getItem("productId");
 

 let product = document.querySelector("#detailsbutton");
 product.addEventListener("click",(e)=>{
    localStorage.setItem("productId",e.target.dataset.id)
});
  

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
  updateCart()
}




 function filterproduct(source){
        
       let product = source.find(ele=>ele.id==locid)
     
        
     if(locid == 6){
         var element = `<div style="display:flex; margin:70px 0px;">
   <div>
  <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
   </div>

   <div style="margin:40px 0px;" >
     <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
     <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
    <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
    <h1 style="font-weight:100;">$${product.price}</h1>
    <p style="font-size:18px; margin-right:200px;">${product.description}</p>
    <div style="display:flex;">
     <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"   data-id=${product.id} data-image=${product.image} data-title=${product.title}  data-price =${product.price} >Add to Cart</button>
        <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark" >Go to Cart</button>
      
    </div>
   </div>
 </div>`

let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"  data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})
     }

     else if(locid == 8){
   
        var element = `<div style="display:flex; margin:70px 0px;">
  <div>
 <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
  </div>

  <div style="margin:40px 0px;" >
    <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
    <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
   <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
   <h1 style="font-weight:100;">$${product.price}</h1>
   <p style="font-size:18px; margin-right:200px;">${product.description}</p>
   <div style="display:flex;">
    <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"   data-id=${product.id} data-title=${product.title} data-image=${product.image}  data-price =${product.price}>Add to Cart</button>
    <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark">Go to Cart</button>
   </div>

  </div>
</div>`

let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})

    }
    else if(locid == 10){
   
        var element = `<div style="display:flex; margin:70px 0px;">
  <div>
 <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
  </div>

  <div style="margin:40px 0px;" >
    <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
    <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
   <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
   <h1 style="font-weight:100;">$${product.price}</h1>
   <p style="font-size:18px; margin-right:200px;">${product.description}</p>
   <div style="display:flex;">
    <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"   data-id=${product.id} data-title=${product.title} data-image=${product.image}  data-price =${product.price}>Add to Cart</button>
    <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark">Go to Cart</button>
   </div>

  </div>
</div>`

let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-image=${ele.image} data-title=${ele.title}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})
    }
    else if(locid == 11){
   
        var element = `<div style="display:flex; margin:70px 0px;">
  <div>
 <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
  </div>

  <div style="margin:40px 0px;" >
    <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
    <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
   <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
   <h1 style="font-weight:100;">$${product.price}</h1>
   <p style="font-size:18px; margin-right:200px;">${product.description}</p>
   <div style="display:flex;">
    <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"  data-id=${product.id} data-image=${product.image} data-title=${product.title}  data-price =${product.price}>Add to Cart</button>
    <button  onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark">Go to Cart</button>
   </div>

  </div>
</div>`

let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image} data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})

    }
    else if(locid == 13){
   
        var element = `<div style="display:flex; margin:70px 0px;">
  <div>
 <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
  </div>

  <div style="margin:40px 0px;" >
    <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
    <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
   <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
   <h1 style="font-weight:100;">$${product.price}</h1>
   <p style="font-size:18px; margin-right:200px;">${product.description}</p>
   <div style="display:flex;">
    <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"  data-id=${product.id} data-title=${product.title} data-image=${product.image}  data-price =${product.price}>Add to Cart</button>
    <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark">Go to Cart</button>
   </div>

  </div>
</div>`

let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px; " >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})

    }
    else if(locid == 14){
   
        var element = `<div style="display:flex; margin:70px 0px;">
  <div>
 <img style="height:250px;  margin:0px 200px;" src="${product.image}"/>
  </div>

  <div style="margin:40px 0px;" >
    <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
    <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
   <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
   <h1 style="font-weight:100;">$${product.price}</h1>
   <p style="font-size:18px; margin-right:200px;">${product.description}</p>
   <div style="display:flex;">
    <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"  data-id=${product.id} data-title=${product.title} data-image=${product.image}  data-price =${product.price}>Add to Cart</button>
    <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark">Go to Cart</button>
   </div>

  </div>
</div>`


let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})
    }
    
     else{
       var element = `<div style="display:flex; margin:70px 0px;">
   <div>
  <img style="height:500px;  margin:0px 200px;" src="${product.image}"/>
   </div>

   <div style="margin:40px 0px;" >
     <p style="color:grey;font-size:20px;font-weight:600;">${product.category.toUpperCase()}</p>
     <h1 style="font-weight:100;font-size:45px; margin-right:200px;">${product.title}</h1>
    <p>${product.rating.rate}<ion-icon style="font-size:18px; position:relative; left:4px; top:2px;" name="star"></ion-icon></p>
    <h1 style="font-weight:100;">$${product.price}</h1>
    <p style="font-size:18px; margin-right:200px;">${product.description}</p>
    <div style="display:flex;">
     <button type="button" style="margin-right:12px;" class="btn btn-outline-dark localadd"  data-id=${product.id} data-title=${product.title} data-image=${product.image}  data-price =${product.price}>Add to Cart</button>
     <button onclick="window.location.href='./cart.html'" type="button" class="btn btn-dark" >Go to Cart</button>
    </div>

   </div>
 </div>`

 let maylikedata = source.filter(ele=>ele.category==product.category);
var mayliked =""
maylikedata.map((ele)=>{
mayliked +=` <div style="border:2px solid lightgrey; border-radius:5px; width:220px; text-align:center; margin:0px 20px;" >
      <img style="height:220px; width:180px; margin-top:10px;" src="${ele.image}"/>
      <div style="margin:30px 50px;">
      <p style="overflow:hidden; font-weight:600; text-overflow:ellipsis; width:120px; white-space:nowrap;">${ele.title}</p>
    </div>
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button  onclick="window.location.href='./details.html'"  data-id=${ele.id} type="button" class="btn btn-dark details">Details</button>
        <button style="margin-left:10px;" type="button" class="btn btn-dark add localadd"   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price}>Add to Cart</button>
      </div>
    </div>`
})
}


element = element+`<div style="font-weight:500; margin:220px 200px 0px;"><h2>You may also Like</h2> </div>
<div class="scroll-container"><div class="scroll-content">${mayliked}${mayliked}${mayliked}${mayliked}</div></div>`

maindiv.innerHTML=element;


const detailBtns = document.querySelectorAll(".details")
        
        
detailBtns.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        localStorage.setItem("productId", e.target.dataset.id)
    })
})

button();

// const addBtns= document.querySelectorAll(".localadd")
        
        
// addBtns.forEach((ele)=>{
//     ele.addEventListener("click", (e)=>{
//         localStorage.setItem("productId", e.target.dataset.id)
//         localStorage.setItem("productTitle", e.target.dataset.title)
//         localStorage.setItem("productPrice", e.target.dataset.price)

//     })
// })

 }


         
 function createcards(source){
        filterdata="";
        source.map((ele)=>{
     filterdata += `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
     <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
         <img style="height:360px; width:360px;" src= "${ele.image}"/>
         <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${ele.title}</p>
         <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${ele.description}</p>
     </div>
     <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
        <p style="position:relative; top:10px;">$ ${ele.price}</p>
     </div>
     <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
             <button onclick="window.location.href='./details.html'" data-id=${ele.id} class = "details">
                 Details
             </button>
             <button    data-id=${ele.id} data-title=${ele.title} data-image=${ele.image} data-price =${ele.price} class = "add localadd">
                 Add to Cart
             </button>
     </div>
 </div>`
       
})
defaultdiv.innerHTML=filterdata;

const detailBtns = document.querySelectorAll(".details")
        
        
detailBtns.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        localStorage.setItem("productId", e.target.dataset.id)
    })
})

        
 button();      
// addBtns.forEach((ele)=>{
//     ele.addEventListener("click", (e)=>{
//         localStorage.setItem("productId", e.target.dataset.id)
//         localStorage.setItem("productTitle", e.target.dataset.title)
//         localStorage.setItem("productPrice", e.target.dataset.price)

//     })
// })


    }


    


buttons.forEach((ele)=>{
   ele.addEventListener("click",()=>{

    let category = ele.getAttribute("data-id");
    if(category =="all"){
        createcards(alldata);
    }
    else{
       let resultdata = alldata.filter(ele=>ele.category==category);
       createcards(resultdata);  
    }

   })

})



function button(){

  let btns = document.querySelectorAll(".localadd")
  console.log(btns);
  
  btns.forEach((ele)=>{

    ele.addEventListener("click",add)
  

  })
  
} 



function add(e){
  let title = e.target.dataset.title;
  let image = e.target.dataset.image;
  let price = e.target.dataset.price;
  let id = e.target.dataset.id;

if(id in cart){
  cart[id].qty++;
}else{
 let  cartItem = {
    title: title,
    price: price,
    qty : 1,
    image : image
  }
  cart[id] = cartItem;
}


localStorage.setItem("cart", JSON.stringify(cart));
updateCart();

}



function updateCart(){
  cart = JSON.parse(localStorage.getItem("cart"));
  cartArr = [];
  for(let ele in cart){
    cartArr.push(cart[ele]);
  }
  console.log(cartArr);
 let cartcount = cartArr.filter(ele=>ele.qty!=0).length;
 document.getElementById("count").textContent = cartcount;
}