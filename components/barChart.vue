<template>
  <div id="barChartDiv"></div>
</template>

<script>
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

module.exports = {
  name: "Barchart",
  props: ["bardata"],
  data() {
    return {
      dataset: [],
    };
  },
  watch: {
    bardata: function () {
      this.dataset = Object.freeze(this.bardata);
      this.drawBarchart();
    },
  },
  mounted() {},
  methods: {
    drawBarchart() {
      // Create chart instance
      var chart = am4core.create("barChartDiv", am4charts.XYChart);

      // Add data
      chart.data = this.dataset;

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.title.text = "Votes";

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Numbers";

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Amount";
      series.tooltipText = "{name}: [bold]{valueY}[/]";

      // Add legend
      // chart.legend = new am4charts.Legend();

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      // Add simple vertical scrollbar
      chart.scrollbarY = new am4core.Scrollbar();

      this.chart = chart;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#barChartDiv {
  width: 100%;
  height: 500px;
}
</style>
