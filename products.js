

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
  
 function filterproduct(source){
        
       let product = source.find(ele=>ele.id==locid)
        console.log(product);
     
     if(locid == 6 || 8 || 10 || 11 || 13  || 14){
   
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
     <button type="button" style="margin-right:12px;" class="btn btn-outline-dark">Add to Cart</button>
     <button type="button" class="btn btn-dark">Go to Cart</button>
    </div>

   </div>
 </div>`

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
     <button type="button" style="margin-right:12px;" class="btn btn-outline-dark">Add to Cart</button>
     <button type="button" class="btn btn-dark">Go to Cart</button>
    </div>

   </div>
 </div>`
}
maindiv.innerHTML=element;


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
             <button  class = "add">
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



    