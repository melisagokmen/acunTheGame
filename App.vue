<template>
  <div>
    <h1>Acun The Game</h1>
    <br/>
    <div>
    <p class="box"></p>
    <p class="remaining"></p>
    <p class="offer"></p>
    <div class="boxes">

    </div>
    </div>
    <button @click="openBox(boxes)">open a box</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      boxes: [],
      counter: 1,
    };
  },
  methods: {
    buildList(boxes) {
      var html = "<div class='grid-container'>"
      for(let i=0; i<boxes.length; i++){
        if(i==0){
          html += "<div class='low'>"
        }
        if(i==13){
          html +=  "</div>" + "<div class='med'>"
        }
        if(i==18){
          html +=  "</div>" + "<div class='high'>"
        }
      html +=  (boxes[i].worth) + "₺"  + "<br>"
      }
      html += "</div>" + "</div>"
      return html
    },

    drawBoxes () {
      document.querySelector('.remaining').innerHTML = '<br>' + 'remaining boxes: 24' + '<br>';
      document.querySelector('.boxes').innerHTML = this.buildList(this.boxes);
  },

    openBox(boxes) {
      var random = Math.floor(Math.random() * boxes.length);

      if(boxes.length == 1){
        document.querySelector('.remaining').innerHTML = 'out of box!';
        alert('You just won '+ boxes[0].worth + ' !')
      return;
      }

      document.querySelector('.remaining').innerHTML = "opened box's worth: " +  (boxes[random].worth) + "₺" + "<br>" + 'remaining boxes: ' + (24-this.counter);
      
      this.counter++;
      boxes.splice(random,1);
      document.querySelector('.boxes').innerHTML = this.buildList(boxes);

      if(this.counter==6 || this.counter==11 || this.counter==16 || this.counter==20 || this.counter==23){
        this.hamdiBey(boxes);
      }
      else{
        document.querySelector('.offer').innerHTML = " ";
      }
    },


  hamdiBey(boxes) {
      var potential = 0;
      var maxWorth = 0;
      var offer = 0;
      var i = 0;
      for( i=0 ;i<boxes.length;i++){
        potential += boxes[i].worth;
        if(boxes[i].worth>maxWorth){
          maxWorth = boxes[i].worth;
        }
      }
      offer = ((maxWorth/(i+3))+(potential/100+i));
      offer = offer/100
      offer = parseInt(offer)
      alert("Hamdi Bey Teklif yapıyor!")
      document.querySelector('.offer').innerHTML = "Hamdi Bey's offer: " + parseInt(offer*100) + "₺"
  }

  },
  mounted() {
    axios.get("http://localhost:3400/").then(response => {
      this.boxes = response.data;
      this.drawBoxes();
    });
  }
}
</script>

<style>
.low, .med, .high {
  border: solid black;
  width: 150px;
}

.low {
  background-color: rgba(35, 226, 226, 0.925);
  grid-area: header; 
}
.med {
  background-color: rgba(214, 214, 52, 0.877);
  grid-area: menu;
}
.high {
  background-color: rgb(202, 28, 28);
  grid-area: right;
}


.grid-container {
  display: grid;
  grid-template-areas:
    'header header main main menu menu'
    'header header main main right right';
  grid-gap: 10px;
  padding: 10px;
}
.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}


</style>
