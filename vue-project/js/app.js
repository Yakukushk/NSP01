


function Show_Info(name, price, capacity, color, site, image){
return{
    name, price, capacity, color, site, image
}
}
function Output_Info(name, card, ExpMonth, ExpYear, CVV){
    return{
        name, card, ExpMonth, ExpYear, CVV
    }
}
var check = Output_Info();
function Show_Receipt(){
    alert("Thank you for payment");
}


const phone = [
    Show_Info("IPhone 14", 2000, "256GB", "White", 'https://www.apple.com/pl/store', './img/Iphone 14.jpg'),
    Show_Info("IPhone 13", 1500, "256GB", "White", 'https://www.apple.com/pl/store', './img/Iphone 13.jpg'),
    Show_Info("IPhone 12", 1000, "256GB", "Black", 'https://www.apple.com/pl/store', './img/Iphone 12.jpg')
]
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
        Show_Receipt();
    },
    filterPhone(){
      var self = this;
      const newFilter = this.phones.filter(function(phone){
        return phone.name.indexOf(self.search) > -1 || phone.color.indexOf(this.search) > -1
      })
      return newFilter;
       
    }
}
})


