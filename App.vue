<template>
  <div>
    <h1>Acun The Game</h1>
    <br />
    <p class="box"></p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      boxes: []
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
      document.querySelector('.box').innerHTML = this.buildList(this.boxes)
  }
  },
  mounted() {
    axios.get("http://localhost:3400/").then(response => {
      this.boxes = response.data;
      this.drawBoxes()
    });
  }
}
</script>
