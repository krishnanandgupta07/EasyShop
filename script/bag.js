let Cart = JSON.parse(localStorage.getItem("cart"))||[];
    let Container = document.getElementById("cart-container");
    function DisplayProduct(data) {
      let total=document.getElementById("cart-total")
      Container.innerHTML = "";
      Cart.forEach((product) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let brand = document.createElement("h3");
        let category = document.createElement("p");
        let details = document.createElement("p");
        let quantity = document.createElement("span");
        let price = document.createElement("h4");
        let Remove = document.createElement("button");
        let Buy = document.createElement("button");
        let Increment = document.createElement("button");
        let Decrement = document.createElement("button");
        quantity.textContent=product.quantity
        Remove.textContent = "Remove";
        Buy.textContent="Buy"
        Buy.style.paddingleft="60px";
        Increment.textContent="+"
        Decrement.textContent="-"
        image.src = product.img;
        brand.textContent = product.brand;
        category.textContent = product.category;
        price.textContent = `₹${product.price}`;
        details.textContent = product.details;
        Buy.addEventListener("click",function(){
          window.location="payment.html";
        })

        Remove.addEventListener("click", () => {
            Cart=Cart.filter((ele)=>{
              return ele.id!==product.id
            })
            localStorage.setItem("cart",JSON.stringify(Cart))
            DisplayProduct()
        });
        Increment.addEventListener("click", () => {
          product=product.quantity++
          localStorage.setItem("cart",JSON.stringify(Cart))
          DisplayProduct()
        });
        Decrement.addEventListener("click", () => {
          if(product.quantity>1){
            product=product.quantity--
          localStorage.setItem("cart",JSON.stringify(Cart))
          DisplayProduct()
          }
        });
        card.append(image, brand, price, details, category, Increment,quantity,Decrement,Remove,Buy);
        Container.append(card);
      });

      let sum=0
      for(let i=0;i<Cart.length;i++){
        sum+=Cart[i].price*Cart[i].quantity
      }
   total.textContent=sum

    }
    DisplayProduct()