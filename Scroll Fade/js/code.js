window.addEventListener("load", function(){
    this.window.addEventListener("scroll", function(){
        var img = document.querySelector("header img");
        img.style.width = (100 + (window.scroll / 20)) + "%";
        img.style.left = (0 - (window.scrollY / 50)) + "%";
        img.style.opacity = 1-(1/(window.innerHeight/window.scrollY));
    });
});