new Vue({
    el: "#app",
    data: {
        myHealth: "100",
        monsterHealth: "100",
        newGame: true,
        myLog: [],
    },
    methods: {
       startGame: function() {
            console.log("starting game")
            this.newGame = false
       },
       attack: function() {
           let myAttack = Math.floor(Math.random() * 10) + 1;
           let monsterAttack = Math.floor(Math.random() * 10) + 1;
           this.myHealth = this.myHealth - monsterAttack;
           this.monsterHealth = this.monsterHealth - myAttack;
           console.log("my attack: " + myAttack)
           console.log("monster attack: " + monsterAttack)
           this.myLog.push({ myStyle: "hits monster ", monsterStyle: "hits player ", myValue: myAttack, monsterValue: monsterAttack})
           console.log(this.myLog)
       },
       giveUp: function() {
           console.log("gave up")
           this.myHealth = 100;
           this.monsterHealth = 100;
           this.newGame = true;
           this.myLog = [];
       },
       heal: function() {
           console.log("healing")
           let myHeal = Math.floor(Math.random() * 10) + 1;
           let monsterAttack = Math.floor(Math.random() * 10) + 1;
           this.myHealth = this.myHealth + myHeal - monsterAttack;
           this.myLog.push({ myStyle: "heals himself ", monsterStyle: "hits player ", myValue: myHeal, monsterValue: monsterAttack})
       },
       specialAttack: function() {
           console.log("special attack")
           let mySpecial = Math.floor(Math.random() * 20) + 1;
           let monsterSpecial = Math.floor(Math.random() * 20) + 1;
           this.myHealth = this.myHealth - monsterSpecial;
           this.monsterHealth = this.monsterHealth - mySpecial;
           this.myLog.push({ myStyle: "special attacks monster ", monsterStyle: "special attacks player ", myValue: mySpecial, monsterValue: monsterSpecial})
       }
    },
    computed: {

    }
})