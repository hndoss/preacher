<template>
  <div>
    <h1>{{ message }}</h1>
    <button class="changebtn" @click="change_message">Change message</button>
    <br /><br />___________________________
    <h2>Calculator</h2>
  </div>

  <input class="imput" type="number" v-model="number1" />
  <input class="imput" type="number" v-model="number2" />
  <br /><br />
  <button class="actbut" @click="add">+</button>

  <button class="actbut" @click="minus">-</button>

  <button class="actbut" @click="divide">/</button>

  <button class="actbut" @click="multiply">*</button>
  <br /><br />

  <h3>Result</h3>

  <input class="result" type="number" v-model="result" />
  <br /><br />

  <button class="changebtn" @click="view_preaches">View Preaches</button>
  <br /><br />

  <input class="imput" type="type" v-model="preach" />
  <button class="changebtn" @click="create_preach">Add Preach</button>
    <button class="btn btn-danger" >Boton de ejemplo</button>
  
  
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
  data() {
    return {
      message: "Hello World Vue",
      number1: 0,
      number2: 0,
      result: 0,
      preaches: [],
      preach: ""
      
    };
  },

  methods: {
    change_message() {
      alert("Hello World");
      
    },

    view_preaches() {
      
    axios
      .get("http://localhost:8081/api/preaches")
      .then((response) => {
        this.preaches = response.data;
        alert(`Listar todos los preaches ${ this.preaches }`);
        console.log(this.preaches);
      });
    },

    create_preach() {
       alert(`Añadiendo ${ this.preach } a preaches`);
       let preach = {
        "title": this.preach
    }

    axios.post('http://localhost:8081/api/preaches', preach);
        
      },

      add() {
      this.result = this.number1 + this.number2;
    },

    minus() {
      this.result = this.number1 - this.number2;
    },

    divide() {
      if (this.number2 > 0) this.result = this.number1 / this.number2;
      else alert("You shall not divide by 0");
    },

    multiply() {
      this.result = this.number1 * this.number2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.changebtn {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
  height: 2em;
  width: 12em;
  padding: 0px 0px 0px 0px;
  font-size: large;
  font-weight: 400;
  margin: 0px 20px 0px 20px;
}

.imput {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
  height: 2em;
  width: 8em;
  padding: 0px 0px 0px 15px;
  font-size: large;
  font-weight: 400;
  margin: 10px 5px 0px 5px;
}

.actbut {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
  height: 2em;
  width: 4em;
  font-size: large;
  font-weight: 400;
  margin: 10px 5px 0px 5px;
}

.result {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
  height: 2em;
  width: 5em;
  padding: 0px 0px 0px 15px;
  font-size: large;
  font-weight: 400;
  margin: 10px 0px 0px 0px;
}
</style>