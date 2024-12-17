function hero() {
    if(document.querySelector(".rightbar span a ").innerHTML == "01 /"){
        document.querySelector(".rightbar span a ").innerHTML = "02 /";
        console.log("01")
    }else{
        document.querySelector(".rightbar span a ").innerHTML = "01 /";
        console.log("out")
    }
}    

let a = 1;
setInterval(() => {

    const selectedElement = document.querySelector('.client>:first-child'); // replace with your element's selector
    selectedElement.remove();
    document.querySelector(".client").innerHTML += `<img src="images/${a}.png" alt="">`
    a++;
    if(a>5){a =1};     
}, 6000)