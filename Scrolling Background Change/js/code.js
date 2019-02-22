window.addEventListener("load", function(){
    window.addEventListener("scroll", function() {
        var screen = Math.round(window.scrollY/window.innerHeight);
        document.body.setAttribute("data-screen", screen);
    })
})