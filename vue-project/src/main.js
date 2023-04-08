const app = Vue.createApp({
    data() {
        return {
            phones: [
                {
                    name: "IPhone 14",
                    price: 2000,
                    capacity: "256GB",
                    color: "White",
                    site: "https://www.apple.com/pl/store",
                    image: "./img/Iphone 14.jpg",
                    image2: "./img/Iphone 13.jpg",
                    image3: "./img/Iphone 12.jpg"
                },
                {
                    name: "IPhone 13",
                    price: 1500,
                    capacity: "256GB",
                    color: "White",
                    site: "https://www.apple.com/pl/store",
                    image: "./img/Iphone 13.jpg",
                    image2: "./img/Iphone 13.jpg",
                    image3: "./img/Iphone 12.jpg"
                },
                {
                    name: "IPhone 12",
                    price: 1000,
                    capacity: "256GB",
                    color: "Black",
                    site: "https://www.apple.com/pl/store",
                    image: "./img/Iphone 12.jpg",
                    image2: "./img/Iphone 13.jpg",
                    image3: "./img/Iphone 12.jpg"
                }
            ],
            phone: null,
            selectPhoneIndex: 0,
            phoneVisibility: false,
            search: "",
            modalVisibility: false,
            buyVisibility: false,
            check: null
        };
    },
    methods: {
        selectPhone(index) {
            console.log("Clicked", index);
            this.phone = this.phones[index];
            this.selectPhoneIndex = index;
        },
        showAlert() {
            if (this.check !== null) {
                alert("Thank you for payment");
            } else {
                alert("Input Detail");
            }
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? "Hide Phone" : "Show phone";
        },
        selectReceipt() {
            this.showReceipt();
        },
        filterPhone() {
            return this.phones.filter(phone =>
                phone.name.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    mounted() {
        this.phone = this.phones[this.selectPhoneIndex];
    }
});

app.mount("#app");
