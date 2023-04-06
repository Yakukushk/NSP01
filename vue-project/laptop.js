function Show_Info(name, color, capacity, processor,system, image, price){
    return{
        name, color, capacity, processor,system, image, price

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
var laptop = [
    Show_Info("MacBook 13", "White", "2556GB", "Apple M1", "macOS Big Sur", "./img/macbook 13.3.jpg", "3000"),
    Show_Info("MacBook AIR", "Silver", "2556GB", "Apple M3", "macOS Big Sur", "./img/macbookair.jpg", "3000"),
    Show_Info("MacBook PRO", "Silver", "2556GB", "Apple M3", "macOS Big Sur", "./img/makbookpro.jpg", "3000")
]

new Vue({
    el : '#app',
    data: {
        laptops: laptop,
        laptop: laptop[0],
        selectPhoneIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        buyVisibility: false
    },
    methods: {
        selectPhone: function(index) {

            console.log("Clicked", index);
            this.laptop = laptop[index];
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
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide laptop' : 'Show laptop'
        },
        selectReceipt() {
            Show_Receipt()
        },
        filterPhone() {
            var self = this;
            const newFilter = this.laptops.filter(function (laptop) {
                return laptop.name.indexOf(self.search) > -1
            })
            return newFilter

        }
    }
})