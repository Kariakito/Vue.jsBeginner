const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks, ahora si se ve todo lo q yop quier q se vea no joda !!!! att Pilar',
            description: 'arcoires y unicornios bling bling',
            image: './assets/images/socks_green.jpg',
            url: 'https://img.freepik.com/free-vector/cute-unicorn-drinking-boba-milk-tea-with-rainbow-cartoon-vector-icon-illustration-animal-drink-icon_138676-7412.jpg?size=626&ext=jpg',
            inventory: 2,
            onSale: false,
            inStock: true,
            details: [ '50% algodon', '30% lana', '20% polyester' ],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: [ 5, 6, 7, 8 ,9],
        }
    }
})
