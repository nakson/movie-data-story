<template>
  <div id="testChart">
    <h2>D3 Bar Chart</h2>
    <div class="container-chart text-align-left">
      <!-- <svg width="800" height="480"></svg> -->
      <div class="barchart"></div>
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
      colors: ["#f3c300", "#875692", "#f38400", "#a1caf1"],
      perct: [],
      range: ["<6", "6-7", "7-8", ">8"],
    };
  },
  watch: {
    data: function () {
      const count = Object.freeze(this.data);
      this.perct = this.getPercentage(count);
      this.dataset = this.remapData(this.colors, count, this.perct, this.range);
      //console.log(this.dataset);

      this.drawBarchart();
    },
  },
  mounted() {
    // this.updateSize();
    // this.dataset = Object.freeze(this.data);
  },
  methods: {
    drawBarchart() {
      let currWidth = document.getElementById("testChart").offsetWidth;
      let maxPerct = Math.max(...this.perct) + 10;
      maxPerct = maxPerct > currWidth - 10 ? maxPerct + 20 : maxPerct;
      const wScale = d3
        .scaleLinear()
        .domain([0, maxPerct])
        .range([0, currWidth]);
      d3.select(".barchart")
        .selectAll("div")
        .data(this.dataset)
        .enter()
        .append("div")
        .style("width", (d) => {
          return wScale(d.perct) + "px";
        })
        .style("background-color", (d) => {
          return d.color;
        })
        .style("height", "24px")
        .style("padding-top", "7px")
        .text((d) => {
          return "Scores " + d.range + ": " + d.perct + "%";
        });
    },
    getPercentage(arr) {
      const sum = arr.reduce((a, b) => a + b);
      let perc = [];
      arr.forEach((ele, index) => {
        perc.push(Math.trunc((arr[index] * 100) / sum));
      });
      return perc;
    },
    remapData(color, count, perc, range) {
      let obj = [];

      count.forEach((ele, index) => {
        obj.push({
          color: color[index],
          count: ele,
          perct: perc[index],
          range: range[index],
        });
      });

      return obj;
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
  width: 80%;
  margin: auto;
}
</style>
