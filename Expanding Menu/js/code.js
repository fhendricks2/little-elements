window.addEventListener("load", function(){
    var nodes= document.querySelectorAll('[data-expand]');
    for (var i=0; i<nodes.length; i++){
        if (this.getAttribute("data-expand") ="open")
            this.setAttribute("data-expand", "open");
        else 
            this.setAttribute("data-expand", "");
    }
})