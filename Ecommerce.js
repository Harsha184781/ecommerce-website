

    async function dataretrive(){
              let calldata = await fetch("https://fakestoreapi.com/products");
              let data = await calldata.json();
    createcards(data);
    filtermens(data);
    alldata(data);
    filterwom(data);
    filterjel(data);
    filterelec(data);
    
    
 }
    
    dataretrive();
   
    let maindiv = document.querySelector(".maindiv")
    let mensclo = document.querySelector("#mensclo");
    let all = document.querySelector("#all");
    let womclo = document.querySelector("#womclo");
    let jel = document.querySelector("#jel");
    let elec = document.querySelector("#elec");
    let product = document.querySelector("#detailsbutton");



    product.addEventListener("click",(e)=>{
         localStorage.setItem("productId",e.target.dataset.id)
    })


    function createcards(source){
        source.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button onclick="window.location.href='./details.html'" data-id=${ele.id} class = "details">
                Details
            </button>
            <button   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price} class = "add localadd">
                Add to Cart
            </button>
    </div>
</div>`
            maindiv.insertAdjacentHTML("beforeend",card)
        })

        const detailBtns = document.querySelectorAll(".details")
        
        
        detailBtns.forEach((ele)=>{
            ele.addEventListener("click", (e)=>{
                localStorage.setItem("productId", e.target.dataset.id)
            })
        })
        button();
    }


    function filtermens(source){
        
         mensclo.addEventListener("click",()=>{
             let mensourc = source.filter((ele)=>{
                return ele.category === "men's clothing";
             })
            let mendata =""
             mensourc.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button  onclick="window.location.href='./details.html'" data-id=${ele.id} class="details">
                   Details
            </button>
            <button   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price} class="add localadd">
                Add to Cart
            </button>
    </div>
</div>`;    
                    mendata+=card;
                    mensclo.style.backgroundColor="rgb(183, 183, 183)";
                    all.style.backgroundColor="white"
                    womclo.style.backgroundColor="white"
                    jel.style.backgroundColor="white"
                    elec.style.backgroundColor="white"
             })
                maindiv.innerHTML=mendata;

                let x = document.querySelectorAll(".details");

                x.forEach((ele)=>{
                     ele.addEventListener("click",(e)=>{
                      localStorage.setItem("productId",e.target.dataset.id)
                     })
                })
                button();     
         })
       
    }


    function alldata(source){
           all.addEventListener("click",()=>{
           let alldata = ""
            source.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button onclick="window.location.href='./details.html'" data-id=${ele.id} class="details">
                   Details
            </button>
            <button   data-id=${ele.id} data-image=${ele.image} data-title=${ele.title}  data-price =${ele.price}  class="add localadd">
                Add to Cart
            </button>
    </div>
</div>`
  alldata+=card;
  all.style.backgroundColor="rgb(183, 183, 183)";
  mensclo.style.backgroundColor="white";
  womclo.style.backgroundColor="white"
  jel.style.backgroundColor="white"
  elec.style.backgroundColor="white"
})
               maindiv.innerHTML=alldata;
               let x = document.querySelectorAll(".details");

               x.forEach((ele)=>{
                    ele.addEventListener("click",(e)=>{
                     localStorage.setItem("productId",e.target.dataset.id)
                    })
               })
               button();

           })
 }


    function filterwom(source){
    womclo.addEventListener("click",()=>{
        let wosourc = source.filter((ele)=>{
                return ele.category === "women's clothing";
             })
            let wodata =""
             wosourc.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button onclick="window.location.href='./details.html'" data-id=${ele.id} class="details">
                   Details
            </button>
            <button   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price} class="add localadd">
                Add to Cart
            </button>
    </div>
</div>`;    
                    wodata+=card;
                    mensclo.style.backgroundColor="white";
                    all.style.backgroundColor="white"
                    womclo.style.backgroundColor="rgb(183, 183, 183)"
                    jel.style.backgroundColor="white"
                    elec.style.backgroundColor="white"
             })
                maindiv.innerHTML=wodata;

                let x = document.querySelectorAll(".details");

                x.forEach((ele)=>{
                     ele.addEventListener("click",(e)=>{
                      localStorage.setItem("productId",e.target.dataset.id)
                     })
                })
                button();
    })
    }


    function filterjel(source){
    jel.addEventListener("click",()=>{
        let jelsourc = source.filter((ele)=>{
                return ele.category === "jewelery";
             })
            let jeldata =""
             jelsourc.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button onclick="window.location.href='./details.html'" data-id=${ele.id} class="details">
                   Details
            </button>
            <button   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image}  data-price =${ele.price} class="add localadd">
                Add to Cart
            </button>
    </div>
</div>`;    
                    jeldata+=card;
             })
                maindiv.innerHTML=jeldata;

                mensclo.style.backgroundColor="white";
                all.style.backgroundColor="white";
                womclo.style.backgroundColor="white";
                jel.style.backgroundColor="rgb(183, 183, 183)";
                elec.style.backgroundColor="white";

                let x = document.querySelectorAll(".details");
                  
                x.forEach((ele)=>{
                     ele.addEventListener("click",(e)=>{
                      localStorage.setItem("productId",e.target.dataset.id)
                     })
                })
                button();
            
    })
    }
   

    function filterelec(source){
        elec.addEventListener("click",()=>{
        let elecsourc = source.filter((ele)=>{
                return ele.category === "electronics";
             })
            let elecdata =""
             elecsourc.forEach((ele)=>{
            let title = ele.title;
            let price = ele.price;
            let image = ele.image;
            let describe = ele.description;
            let card = `<div style="width:450px; border:1px solid rgb(183, 183, 183); border-radius:5px;">
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183); border-top-left-radius:5px; border-top-right-radius:5px; padding:20px;">
        <img style="height:360px; width:360px;" src= "${image}"/>
        <p style="font-weight:bold; font-size:20px; overflow:hidden; text-overflow:ellipsis; width:100px; white-space:nowrap; position:relative; left:180px; margin-top:40px;">${title}</p>
        <p style="overflow:hidden; text-overflow:ellipsis; width:340px; height:70px; position:relative; left:40px;">${describe}</p>
    </div>
    <div style=" text-align:center;  border:1px solid rgb(183, 183, 183);">
       <p style="position:relative; top:10px;">$ ${price}</p>
    </div>
    <div style=" padding:10px;  display:flex; justify-content:center;  border:1px solid rgb(183, 183, 183); border-bottom-left-radius:5px; border-bottom-right-radius:5px;">
            <button onclick="window.location.href='./details.html'" data-id=${ele.id} class="details">
                   Details
            </button>
            <button   data-id=${ele.id} data-title=${ele.title} data-image=${ele.image} data-price =${ele.price} class="add localadd">
                Add to Cart
            </button>
    </div>
</div>`;    
                    elecdata+=card;
             })
                maindiv.innerHTML=elecdata;

                mensclo.style.backgroundColor="white";
                all.style.backgroundColor="white";
                womclo.style.backgroundColor="white";
                jel.style.backgroundColor="white";
                elec.style.backgroundColor="rgb(183, 183, 183)";
                let x = document.querySelectorAll(".details");

                x.forEach((ele)=>{
                     ele.addEventListener("click",(e)=>{
                      localStorage.setItem("productId",e.target.dataset.id)
                     })
                })
                button();      
    })


    }





    let count = 0;
    let sum = 0;
    let cart = {};

    if (localStorage.getItem("count")) {
        count = parseInt(localStorage.getItem("count"));
    }
    
    if (localStorage.getItem("sum")) {
        sum = parseFloat(localStorage.getItem("sum"));
    }
    
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        updateCart();
    } 
    
    
    

function button(){
 
    

let btns = document.querySelectorAll(".localadd");



    
btns.forEach((ele)=>{
    ele.addEventListener("click",add)
})

function add(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;
    let image = event.target.dataset.image;
 

if (id in cart) {
    cart[id].qty++;   
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1,
        image : image
    };
    cart[id] = cartItem;
        
}






localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

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
