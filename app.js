new Vue({
    el: "#app",
    data: {
        myHealth: "100",
        monsterHealth: "100",
        newGame: true
    },
    methods: {
       startGame: function() {
            console.log("starting game")
            this.newGame = false
       },
       myHealthPercent: function() {
            console.log(this.myHealth)
            return this.myHealth
       }

    },
    computed: {

    }
})