function cartPriceUpdate(){
    var fee2 = document.getElementById("cart-fee2").textContent;
    var num = document.getElementById("cart-quantity-input").value;
    var num1 = document.getElementById("cart-quantity-input-1").value;
    var item = document.getElementById("item-price").textContent;
    var item1 = document.getElementById("item-price-1").textContent;
    var tot = document.getElementById("cart-total");
    var agr = document.getElementById("agree-price");

    fees = parseInt(fee2);
    var subtotal = item*num;
    var subtotal1 = item1*num1;
    finaltotal = parseInt(subtotal)+parseInt(subtotal1)+parseInt(fees);

    tot.innerHTML = finaltotal+".00";
    agr.innerHTML = finaltotal+".00";
}

function updateProgress(){
    document.getElementById("days").value = "7";
    document.getElementById("image").src = "bar_unlock.png";
}

function switchProgress(){
    document.getElementById("unlocked").style.display = "block";
    document.getElementById("locked").style.display = "none";
}
