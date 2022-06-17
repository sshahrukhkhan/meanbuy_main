data.filter(function(elem)
{
    var itemdata=[];
    var box=document.createElement("div");
    box.addEventListener("click",function(){
        addlickevent(elem);
    });
    var img=document.createElement("img");
    img.setAttribute("src",elem.Image);

 
    var item_Name=document.createElement("span");
    item_Name.textContent=elem.Item_Name;
    var reating=document.createElement("span");
    reating.textContent=elem. Reating;
    reating.style.backgroundColor="rgb(79, 238, 79)";
    reating.style.borderRadius="5px";
    reating.style.padding="0 15px";
    var boxx=document.createElement("div");
    
    var hr=document.createElement("hr");
    
    var price= document.createElement("h3");
    price.textContent=elem.Price;
    price.style.margin=("0px");
    price.style.padding=("0 15px");
    var delev= document.createElement("p");
    delev.textContent=elem.Freeship;

    delev.style.margin=("0px");
    delev.style.padding="0 15px";
    delev.style.fontSize="12px";
    delev.style.color="green";
  
   
    boxx.append(item_Name,reating);
    box.append(img,boxx,hr,price,delev);

    document.querySelector("#tradingitem").append(box);
});
function addlickevent(elem){
    
    window.location.href="product.html"
    
}


function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }