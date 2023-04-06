function Show_Info(name, price, color, func, site, img){
return {
    name, price, color, func, site, img
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


const hp = [
    Show_Info("AirPods Max", 2000, "Silver", "Smart Case Etui", 'https://www.apple.com/pl/store', './img/og-airpods-max-202011.jpg'),
    Show_Info("Airpods Pro", 1500, "White", "White", 'https://www.apple.com/pl/store', './img/AirPodsPro.jpg')
]

new Vue({
    el : '#app',
    data: {
        headphones: hp,
        hp: hp[0],
        selectPhoneIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        buyVisibility: false

    },

    methods: {
        selectPhone: function(index) {

            console.log("Clicked", index);
            this.hp = hp[index];
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
            return this.phoneVisibility ? 'Hide HeadPhone' : 'Show Headphone'
        },
        selectReceipt(){
            Show_Receipt()
        },
        filterPhone(){
            var self = this;
            const newFilter = this.headphones.filter(function(hp){
                return hp.name.indexOf(self.search) > -1
            })
            return newFilter

        }
    }
})