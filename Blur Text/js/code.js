window.addEventListener("load", function(){
    var nodes = document.querySelectorAll(".blur>*");
    for (var i=0; i<nodes.length; i++){
        nodes[i].style.animationDelay = (i*3) + "s";
    }
})

console.log(nodes)