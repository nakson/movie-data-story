<template>
  <div class="testChart">
    <h2>Bar Chart I</h2>
    <div class="container-chart text-align-left">
      <!-- <svg width="800" height="480"></svg> -->
      <div class="barchart"></div>
      <h1>{{ data }}</h1>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["data"],
  data() {
    return {
      who: "world",
      width: 800,
      height: 480,
      dataset: [],
    };
  },
  watch: {
    data:function(){
      this.dataset = Object.freeze(this.data);
      // console.log(this.dataset);
      this.drawBarchart();
    }
  },
  mounted() {

    // this.updateSize();
    // this.dataset = Object.freeze(this.data);

  },
  methods: {
    drawBarchart(){
      d3.select(".barchart")
      .selectAll("div")
      .data(this.dataset)
      .enter()
      .append("div")
      .style("width", function (d) {
        return d * 10 + "px";
      })
      .text(function (d) {
        return d;
      });
    },
  },
  computed: {},
};
</script>
<style scoped></style>

<style>
.barchart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
.container-chart {
  /* width: 50%; */
  margin: auto;
}
</style>
