<template>
  <div id="pieChartDiv"></div>
</template>

<script>
am4core.useTheme(am4themes_animated);

module.exports = {
  name: "Piechart",
  props: ["piedata"],
  data() {
    return {
      dataset: [],
    };
  },
  watch: {
    piedata: function () {
      this.dataset = Object.freeze(this.piedata);
      console.log("Dateset for the piechart: " + this.dataset);
      this.drawPiechart();
    },
  },
  mounted() {},
  methods: {
    drawPiechart() {
      let chart = am4core.create("pieChartDiv", am4charts.PieChart);

      // Add data
      chart.data = [
        { ratings: "<6", values: this.dataset[0] },
        {
          ratings: "6-7",
          values: this.dataset[1],
        },
        {
          ratings: "7-8",
          values: this.dataset[2],
        },
        {
          ratings: ">8",
          values: this.dataset[3],
        },
      ];

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "values";
      pieSeries.dataFields.category = "ratings";

      // Let's cut a hole in our Pie chart the size of 40% the radius
      chart.innerRadius = am4core.percent(40);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#4a2abb");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      this.chart = chart;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pieChartDiv {
  width: 100%;
  height: 500px;
}
</style>
