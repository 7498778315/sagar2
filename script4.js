

window.addEventListener("scroll",() => {
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
   document.getElementById("navigation").style.top = "0";
   } 
   else{
    document.getElementById("navigation").style.top = "-50%";
   }
})

const products = [
    {
        id: "1",
        name: "Hoddies",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN4dOclbJzFsfCl4JiBWS2PIINzyb6iPJpQ&usqp=CAU",
        prise: "$2000",
        category: "Mens Cloths"
    },
    {
        id: "2",
        name: "T-Shirt",
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=300&dpr=1.0",
        prise: "$3000",
        category: "Mens Cloths"
    },
    {
        id: "3",
        name: "T-Shirt",
        img:"https://m.media-amazon.com/images/I/51fCXfYKK9L._AC_UY1100_.jpg",
        prise: "$2000",
        category: "Mens Cloths"
    },
    {
        id: "4",
        name: "Shirt",
        img:"https://i5.walmartimages.com/seo/amidoa-Mens-Shirts-Short-Sleeve-Button-Down-Floral-Print-Summer-Casual-Stylish-Hawaiian-Tropical-Holiday-Beach-T-Shirt_8c6ff72f-7e7d-46e4-be74-bcf4217439ff.ccc6c981ac5922fa16f3c7c268e45579.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF",
        prise: "$1000",
        category: "Mens Cloths"
    },
    {
        id: "5",
        name: "Shirt",
        img:"https://m.media-amazon.com/images/I/61y5eveOy7L._AC_UY1000_.jpg",
        prise: "$2000",
        category: "Mens Cloths"
    },
    {
        id: "6",
        name: "T-Shirt",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/9/1/f/xl-all-rbc-one-lieo-trend-original-imagtr7cv7chznch.jpeg?q=70&crop=false",
        prise: "$4000",
        category: "Mens Cloths"
    },
    {
        id: "7",
        name: "Hoddies",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/8/w/r/m-all-rbc-white-one-nb-nicky-boy-original-imagnfdezpp2bvqt.jpeg?q=70&crop=false",
        prise: "$1000",
        category: "Mens Cloths"
    },
    {
        id: "8",
        name: "Hoddies",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70&crop=false",
        prise: "$500",
        category: "Mens Cloths"
    }
]

   let shopcontainer = document.getElementById("shop-container");

products.forEach(element => {
    shopcontainer.innerHTML +=
    `
    <div class="product">
             <h3>${element.name}</h3>
             <img src=${element.img}>
             <p>${element.prise}</p>
             <div class="desc">
             <p>${element.category}</p>
             </div>
             <button class="add-btn" type="button">Add To Cart</button>
     </div>
    `
})


let cartContainer = document.getElementById("cart-container");
let cartRemove = document.querySelectorAll("#cart-remove");
let cartdetails = document.querySelectorAll(".cart-details")
let cartsubtotal = document.getElementById("cart-subtotal");
let addbtn = document.querySelectorAll(".add-btn")

addbtn.forEach((btn =>{
    btn.addEventListener("click",() => {
        
    })
}))




// products.forEach(Element => {
//     console.log(Element.img)
//     let product = document.createElement("div");
//     product.className = ("product")
//     let h3 = document.createElement("h3")
//     h3.innerText = `${Element.name}`;
//     h3.appendChild(product)
//     let img = document.createElement("img")
//     img.src =`${Element.img}`;
//     img.appendChild(product)
//     let prise = document.createElement("p");
//     prise.innerHTML =`${Element.prise}`;
//     prise.appendChild(product)
//     let category = document.createElement("div")
//     category.className = ("desc")
//     category.innerHTML = `${Element.category}`;
//     category.appendChild(product);

//     product.appendChild(shopcontainer)
// })

// Cart Conatiner

// let addbtn = document.querySelectorAll(".add-btn");
// addbtn.addeventlistner("click", () =>{
//     console.log("btn clicked")
// })





































function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
