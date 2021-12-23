let app = new Vue({
  el: "#app",
  data: {
    message: "test",
    dataLoaded: false,
    barchartData: [],
    filmData: [],
    bData: [],
    pieData: [],
    piechartData: [],
    //data of top 10 movies
    carousels: [
      { title: "Slide 1", color: "info" },
      { title: "Slide 2", color: "success" },
      { title: "Slide 3", color: "warning" },
      { title: "Slide 4", color: "danger" },
    ],
    //data of table
    tableData: [],
    beautyData: [],
  },
  created() {
    Promise.all([d3.json("https://api.npoint.io/eede5986a18bbe773cc4")])
      .then((data) => {
        console.log(data[0]);

        let tempPie = [0, 0, 0, 0];
        let tempBar = [0, 0, 0, 0, 0];
        let genreStr = "";
        //console.log(data[0]);
        let sortedData = [];
        //console.log(currD);
        dataLoaded = true;
        let dataObj = data[0];
        const keys = Object.keys(dataObj);
        keys.forEach((key, index) => {
          let currMovie = dataObj[key]; // the current movie object
          //filtering the data for the pie chart
          if (currMovie.imdbRating < 6) tempPie[0]++;
          else if (currMovie.imdbRating >= 6 && currMovie.imdbRating < 7)
            tempPie[1]++;
          else if (currMovie.imdbRating >= 7 && currMovie.imdbRating < 8)
            tempPie[2]++;
          else tempPie[3]++;
          //filtering the data for the bar chart
          let votes = parseInt(currMovie.imdbVotes);
          //console.log(votes);
          if (votes < 100) tempBar[0]++;
          else if (votes >= 100 && votes < 200) tempBar[1]++;
          else if (votes >= 200 && votes < 300) tempBar[2]++;
          else if (votes >= 300 && votes < 400) tempBar[3]++;
          else tempBar[4]++;
          //filtering the data for the word chart
          //filtering the data for the top 10 movies
          sortedData.push(currMovie);
          genreStr = genreStr + currMovie.Genre;
          //filtering the data for the top movies
        });
        //filtering the data for the top 10 table
        this.sortDataByRate(sortedData); // sort the data by imdbRating
        this.tableData = sortedData.slice(-10);

        //update the datasets
        this.beautyData = [
          {
            name: "Lithuania",
            steps: tempBar[0],
            // "units": 250
          },
          {
            name: "Czech Republic",
            steps: tempBar[1],
            // "units": 500
          },
          {
            name: "Ireland",
            steps: tempBar[2],
            // "units": 170
          },
          {
            name: "Germany",
            steps: tempBar[3],
            // "units": 122
          },
          {
            name: "Australia",
            steps: tempBar[4],
            // "units": 99
          },
        ];
        this.barchartData = [4, 8, 15, 16, 23, 42];
        this.piechartData = tempPie;
        //console.log(this.piechartData);
        this.filmData = genreStr;
        this.bData = [
          {
            country: "<100k",
            litres: tempBar[0],
          },
          {
            country: "100~200k",
            litres: tempBar[1],
          },
          {
            country: "200~300k",
            litres: tempBar[2],
          },
          {
            country: "300~400k",
            litres: tempBar[3],
          },
          {
            country: ">400k",
            litres: tempBar[4],
          },
        ];
        //console.log(this.piechartData);
      })
      .catch((err) => console.log(err));

    // this.barchartData = [4, 8, 15, 16, 23, 42];
    // this.filmData="Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son.";

    this.pieData = [
      {
        ratings: "under6",
        values: this.piechartData[0],
      },
      {
        ratings: "6to7",
        values: this.piechartData[1],
      },
      {
        ratings: "7to8",
        values: 3,
      },
      {
        ratings: "up8",
        values: 4,
      },
    ];
  },
  watch: {
    dataLoaded() {
      if (!this.dataLoaded) return;
      drawMyChart();
    },
  },
  methods: {
    drawMyChart() {},
    calculatedData() {},
    // fetchData: async function (limit, offset) {
    //   var response = await fetch(
    //     "/bookings/vaginate?limit=" + limit + "&offset=" + offset
    //   );
    //   if (response.ok) {
    //     var bookings = await response.json();
    //     this.bookings = bookings;
    //     this.currentPageNumber = Math.floor(offset / limit) + 1;
    //     // `this` inside methods points to the Vue instance
    //   } else {
    //     alert(response.statusText);
    //   }
    // },
    sortDataByRate(da) {
      let result = [];
      da.sort((a, b) =>
        a.imdbRating > b.imdbRating
          ? 1
          : a.imdbRating === b.imdbRating
          ? a.imdbVotes > b.imdbVotes
            ? 1
            : -1
          : -1
      );
      result = da;
      return result;
    },
  },
  components: {
    D3barchart: httpVueLoader("./components/D3barchart.vue"),
    Wordchart: httpVueLoader("./components/Wordcloud.vue"),
    Piechart: httpVueLoader("./components/pieChart.vue"),
    Barchart: httpVueLoader("./components/barChart.vue"),
    Carousels: httpVueLoader("./components/Carousel.vue"),
    Tablee: httpVueLoader("./components/Table.vue"),
  },
});

//app.$mount("#app");
