<template>
  <div>
    <h1>Acun The Game</h1>
    <br/>
    <p class="box"></p>
    <p class="remaining"></p>
    <p class="offer"></p>
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
      for(let i=0; i<boxes.length; i++){
      var html = "<div>" + boxes[i].worth + "</div>"
      }
      return html
    },

    drawBoxes () {
      document.querySelector('.remaining').innerHTML = '<br>' + 'remaining boxes: 24';
  },

    openBox(boxes) {
      var random = Math.floor(Math.random() * boxes.length);
      if(!boxes[random]){
        document.querySelector('.remaining').innerHTML = 'out of box!';
        return;
      }
      document.querySelector('.remaining').innerHTML = "opened box's worth: " +  (this.boxes[random].worth) + "₺" + "<br>" + 'remaining boxes: ' + (24-this.counter);
      if(this.counter<24){
      this.counter++;
      }
      if(this.counter==6 || this.counter==11 || this.counter==16 || this.counter==19 || this.counter==23){
        this.hamdiBey(boxes);
      }
      else{
        document.querySelector('.offer').innerHTML = " ";
      }
      boxes.splice(random,1);
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
      offer = ((maxWorth/(i*(i-1)))+(potential/200+i));
      offer = offer/100
      offer = parseInt(offer)
      alert("Hamdi Bey Teklif yapıyor!")
      document.querySelector('.offer').innerHTML = "Hamdi Bey's offer: " + parseInt(offer*100) + "₺"
      potential = 0;
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
