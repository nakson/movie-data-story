<template>
  <div id="chartdiv"></div>
</template>

<script>
am4core.useTheme(am4themes_animated);

module.exports = {
  name: "Wordcloud",
  props: ["filmdata"],
  data() {
    return {
      dataset: [],
    };
  },
  watch: {
    filmdata: function () {
      this.dataset = Object.freeze(this.filmdata);
      console.log("Dataset for wordchart: " + this.dataset);
      this.drawWordchart();
    },
  },
  mounted() {},
  methods: {
    drawWordchart() {
      let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
      let series = chart.series.push(
        new am4plugins_wordCloud.WordCloudSeries()
      );

      this.dataset = Object.freeze(this.filmdata);

      series.maxCount = 150;
      series.minWordLength = 2;
      series.excludeWords = ["the", "an", "to"];
      series.text = this.dataset;

      this.chart = chart;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
