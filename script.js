function cartPriceUpdate(){
    var fee1 = document.getElementById("cart-fee1").textContent;
    var fee2 = document.getElementById("cart-fee2").textContent;
    var num = document.getElementById("cart-quantity-input").value;
    var item = document.getElementById("item-price").textContent;
    var tot = document.getElementById("cart-total");
    var agr = document.getElementById("agree-price");

    fees = parseInt(fee1)+parseInt(fee2);
    var subtotal = item*num;
    finaltotal = parseInt(subtotal)+parseInt(fees);

    tot.innerHTML = finaltotal+".00";
    agr.innerHTML = finaltotal+".00";
}

function DcartPriceUpdate(){
    var fee3 = document.getElementById("Dcart-fee1").textContent;
    var fee4 = document.getElementById("Dcart-fee2").textContent;
    var fee5 = document.getElementById("Dcart-fee3").textContent;
    var fee6 = document.getElementById("Dcart-fee4").textContent;
    var fee7 = document.getElementById("Dcart-fee5").textContent;
    var fee8 = document.getElementById("Dcart-fee6").textContent;
    var fee9 = document.getElementById("Dcart-fee7").textContent;


    var Dnum = document.getElementById("Dcart-quantity-input").value;
    var Ditem = document.getElementById("Ditem-price").textContent;
    var Dtot = document.getElementById("Dcart-total");
    var Dagr = document.getElementById("Dagree-price");


    Dfees = parseInt(fee3)+parseInt(fee4)+parseInt(fee5)+parseInt(fee6)+parseInt(fee7)+parseInt(fee8)+parseInt(fee9);
    console.log(Dfees)
    var Dsubtotal = Ditem*Dnum;
    console.log(Dsubtotal)
    Dfinaltotal = parseInt(Dsubtotal)+parseInt(Dfees);
    console.log(Dfinaltotal)
    Dtot.innerHTML = Dfinaltotal+".00";
    Dagr.innerHTML = Dfinaltotal+".00";
}
