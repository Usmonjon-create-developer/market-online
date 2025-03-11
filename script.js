let category = [
    {
        name:"women",
        image: "image/image.jpg"
    },
    {
        name:"men",
        image: "image/image (1).jpg"
    },
    {
        name:"boys",
        image: "image/image (2).jpg"
    },
]

let data = [
    {
        "id":1,
        "star": 2,
        "image": "image/.",
        "like": false,
        "description": "Green baby romper",
        "price":"20.40",
        "category":{
            "gender":"women",
            "product_name": "top",
            "discount": {
                "value": true,
                "persantage": 50
            }
        }
    },
    {
        "id":2,
        "star": 2,
        "image": "image/.",
        "like": false,
        "description": "Green baby romper",
        "price":"20.40",
        "category":{
            "gender":"boys",
            "product_name": "top",
            "discount": {
                "value": true,
                "persantage": 50
            }
        }
    },
    {
        "id":3,
        "star": 1,
        "image": "image/.",
        "like": false,
        "description": "Green baby romper",
        "price":"20.40",
        "category":{
            "gender":"women",
            "product_name": "top",
            "discount": {
                "value": true,
                "persantage": 50
            }
        }
    },
    {
        "id":4,
        "star": 0,
        "image": "image/.",
        "like": false,
        "description": "Green baby romper",
        "price":"20.40",
        "category":{
            "gender":"men",
            "product_name": "top",
            "discount": {
                "value": true,
                "persantage": 50
            }
        }
    },
]

function handleLogin(){
    let login = document.getElementById("login")
    login.style.display = "block"
}
function handleregister(){
    let login = document.getElementById("login2")
    login.style.display = "block"
}
function Handlex2(){
    let login = document.getElementById("login2")
    login.style.display = "none"
}

function textColor(){
    let color = document.getElementById("textColor")
    color.style.color = "red"
}

function drawCategory() {
    let s = ``;
    category.map(i => {
        s += `
            <div id="inner" onclick="handleCategory('${i.name}')" class="categories_card">
                <img src="${i.image}" alt="" class="categories_image">
                <p class="category_text">${i.name}</p>
            </div>
        `;
    });
    document.getElementById("categoryInner").innerHTML = s;
}


drawCategory()

function handleCategory(categoryName){
    console.log(categoryName);
    let filterData = data.filter(i => i.category.gender === categoryName )
    
    let filterdraw = ``
   filterData.map(item => {
    let totalCount = 5
    let countStar = item.star
    let yulduz = ``

    for(let i = 1; i<= totalCount; i++){
        if(i <= countStar){
            yulduz+= `<i class="fa-solid fa-star"></i>`
        }else{
            yulduz +=  `<i class="fa-regular fa-star"></i>`
        }
    }
    filterdraw += `
       <div class="card_product">
        <div class="photos">
            <img src="image/product.jpg" alt="" class="cards_image">
            <div class="stars">
            ${yulduz}
            </div>
            <i class="fa-regular fa-heart like"></i>
        </div>
        <p class="card_descr">${item.description}</p>
        <p class="product_price">${"$"  + item.price}</p>
      </div>
    `
   })
   document.getElementById("fil").innerHTML = filterdraw
}

function draw(){
    let s = ``
    data.map(item  => {
        let totalCount = 5
        let countStar = item.star
        let yulduz = ``
    
        for(let i = 1; i<= totalCount; i++){
            if(i <= countStar){
                yulduz+= `<i class="fa-solid fa-star"></i>`
            }else{
                yulduz +=  `<i class="fa-regular fa-star"></i>`
            }
        }
        s += `
           <div class="card_product">
            <div class="photos">
                <img src="image/product.jpg" alt="" class="cards_image">
                <div class="stars">
                ${yulduz}
                </div>
                <div onclick="handleLike(${item.id})" class="likes">
               <div id="like" class="like"> <i class="fa-regular fa-heart "></i></div>
               <div id="dislike" class="dislike"> <i class="fa-solid fa-heart"></i></div>
                </div>
            </div>
            <p class="card_descr">${item.description}</p>
            <p class="product_price">${"$"  + item.price}</p>
          </div>
        `
       })
       document.getElementById("fill").innerHTML = s
}

draw()

function handleLike(i){
    
   document.getElementById("like").style.display = "none"
   document.getElementById("dislike").style.display = "block"
}