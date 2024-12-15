function hero() {
    if(document.querySelector(".rightbar span a ").innerHTML == "01 /"){
        document.querySelector(".rightbar span a ").innerHTML = "02 /";
        console.log("01")
    }else{
        document.querySelector(".rightbar span a ").innerHTML = "01 /";
        console.log("out")
    }
}
