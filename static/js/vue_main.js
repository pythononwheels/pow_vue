/*
    vue main.js
*/


var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        variants: [
            {
                vId: 12,
                vcolor: "green"
            },
            {
                vId: 13,
                vcolor: "blue"
            }
        ]
    }
})

Vue.mixin({ delimiters: ['[[',']]'] });