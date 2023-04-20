function magnify(imgID, zoom){
    let img,glass,h,w,bw;
    img = document.getElementById(imgID);
    glass = document.getElementById("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    img.parentElement.insertBefore(glass,img);
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight/ 2;
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e){
        let pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        if(x > img.width - (w/zoom)) {
            x = img.width - (w / zoom);
        }
        if (x < w / zoom) {
            x = w / zoom;
        }
        if(y > img.height - (h / zoom)) {
            y = img.height - (h/zoom);
        }
        if (y < h / zoom) {
            y = h / zoom;
        }
        glass.style.left = (x-w)+"px";
        glass.style.top = (y-h)+"px";
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";

    }
    function getCursorPos(e){
        let a, x = 0, y =0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};

    }
}


function Show_Info(name, price, capacity, color, site, image, image2, image3){
return{
    name, price, capacity, color, site, image, image2, image3
}
}


const phone = [
    Show_Info("IPhone 14", 2000, "256GB", "White", 'https://www.apple.com/pl/store', './img/Iphone 14.jpg', './img/Iphone 13.jpg', './img/Iphone 12.jpg'),
    Show_Info("IPhone 13", 1500, "256GB", "White", 'https://www.apple.com/pl/store', './img/Iphone 13.jpg', './img/Iphone 13.jpg', './img/Iphone 12.jpg'),
    Show_Info("IPhone 12", 1000, "256GB", "Black", 'https://www.apple.com/pl/store', './img/Iphone 12.jpg', './img/Iphone 13.jpg', './img/Iphone 12.jpg')
]
function Output_Info(name, card, ExpMonth, ExpYear, CVV){
    return{
        name, card, ExpMonth, ExpYear, CVV
    }
}
var check = Output_Info();
function Show_Receipt(){
    alert("Thank you for payment" + phone.length);
}

new Vue({
el : '#app',
data: {

    phones: phone,
    phone: phone[0],
    selectPhoneIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false,
    buyVisibility: false


},

methods: {
    selectPhone: function(index) {

            console.log("Clicked", index);
            this.phone = phone[index];
            this.selectPhoneIndex = index;
    },
    showAlert() {
        if(check != null){
        alert('Thank for payment');
        } else {
            alert('Input Detail');
        }
      }



},
computed: {
    phoneBtnText(){
        return this.phoneVisibility ? 'Hide Phone' : 'Show phone'
    },
    selectReceipt(){
        Show_Receipt()
    },
    filterPhone(){
      var self = this;
       const newFilter = this.phones.filter(function(phone){
        return phone.name.indexOf(self.search) > -1
      })
      return newFilter

    }
}
})




