window.onload = function(){
    var press = document.getElementById("lookup");
    var results = document.querySelector('#result');
     press.addEventListener("click", function(){
        var name = document.getElementById('country').value;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let r = this.responseText;
                results.innerHTML = r;
                
                
            }
            };
        req.open("GET", "world.php?country=" +name,true);
        req.send();
        
     })
}