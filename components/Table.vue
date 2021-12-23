<template>
  <section>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :columns="columns"
          :selected.sync="selected"
          focusable
        >
        </b-table>
      </b-tab-item>

      <b-tab-item label="Selected">
        <pre><div class="columns m-0 p-0"><div class="column is-3 is-half-mobile"><b-image :src="selected.img" class="m-0 p-0"></b-image></div><div class="column is-7"> 
    <b>Movie Name:</b> {{selected.movie_name}}
    <b>Year:</b> {{selected.year}}
    <b>Director:</b> {{selected.director}}
    <b>IMDb Rating:</b> {{selected.imdbRating}}
    <b>Actors:</b> {{selected.actors}}
    <b>Awards:</b> {{selected.awards}}
    <b>Plot:</b> {{selected.plot}}</div>
          </div></pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
module.exports = {
  name: "Tablee",
  props: ["movieinfo"],
  data() {
    let data = [
      {
        top: 1,
        movie_name: "w",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 2,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 3,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the ratingle",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 4,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 5,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the ratingle",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 6,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 7,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 8,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the ratingle",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 9,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the rating",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
      {
        top: 10,
        movie_name: "the name",
        year: "the year",
        director: "the director",
        imdbRating: "the ratingle",
        img: "https://ia.media-imdb.com/images/M/MV5BNjc5NjQ1ODIzN15BMl5BanBnXkFtZTgwMjkwNTg4NjE@._V1_SX300.jpg",
        actors: "the actor",
        awards: "the award",
        plot: "the plot",
      },
    ];

    return {
      data,
      selected: data[1],
      columns: [
        {
          field: "top",
          label: "Top",
          wtopth: "40",
          numeric: true,
        },
        {
          field: "movie_name",
          label: "Movie Name",
          centered: true,
        },
        {
          field: "year",
          label: "Year",
        },
        {
          field: "director",
          label: "Director",
          centered: true,
        },
        {
          field: "imdbRating",
          label: "IMDb Rating",
        },
      ],
    };
  },
  watch: {
    movieinfo: function () {
      this.data = [
        {
          top: 1,
          movie_name: this.movieinfo[9].Title,
          year: this.movieinfo[9].Year,
          director: this.movieinfo[9].Director,
          imdbRating: this.movieinfo[9].imdbRating,
          img: this.movieinfo[9].Poster,
          actors: this.movieinfo[9].Actors,
          awards: this.movieinfo[9].Awards,
          plot: this.movieinfo[9].Plot,
        },
        {
          top: 2,
          movie_name: this.movieinfo[8].Title,
          year: this.movieinfo[8].Year,
          director: this.movieinfo[8].Director,
          imdbRating: this.movieinfo[8].imdbRating,
          img: this.movieinfo[8].Poster,
          actors: this.movieinfo[8].Actors,
          awards: this.movieinfo[8].Awards,
          plot: this.movieinfo[8].Plot,
        },
        {
          top: 3,
          movie_name: this.movieinfo[7].Title,
          year: this.movieinfo[7].Year,
          director: this.movieinfo[7].Director,
          imdbRating: this.movieinfo[7].imdbRating,
          img: this.movieinfo[7].Poster,
          actors: this.movieinfo[7].Actors,
          awards: this.movieinfo[7].Awards,
          plot: this.movieinfo[7].Plot,
        },
        {
          top: 4,
          movie_name: this.movieinfo[6].Title,
          year: this.movieinfo[6].Year,
          director: this.movieinfo[6].Director,
          imdbRating: this.movieinfo[6].imdbRating,
          img: this.movieinfo[6].Poster,
          actors: this.movieinfo[6].Actors,
          awards: this.movieinfo[6].Awards,
          plot: this.movieinfo[6].Plot,
        },
        {
          top: 5,
          movie_name: this.movieinfo[5].Title,
          year: this.movieinfo[5].Year,
          director: this.movieinfo[5].Director,
          imdbRating: this.movieinfo[5].imdbRating,
          img: this.movieinfo[5].Poster,
          actors: this.movieinfo[5].Actors,
          awards: this.movieinfo[5].Awards,
          plot: this.movieinfo[5].Plot,
        },
        {
          top: 6,
          movie_name: this.movieinfo[4].Title,
          year: this.movieinfo[4].Year,
          director: this.movieinfo[4].Director,
          imdbRating: this.movieinfo[4].imdbRating,
          img: this.movieinfo[4].Poster,
          actors: this.movieinfo[4].Actors,
          awards: this.movieinfo[4].Awards,
          plot: this.movieinfo[4].Plot,
        },
        {
          top: 7,
          movie_name: this.movieinfo[3].Title,
          year: this.movieinfo[3].Year,
          director: this.movieinfo[3].Director,
          imdbRating: this.movieinfo[3].imdbRating,
          img: this.movieinfo[3].Poster,
          actors: this.movieinfo[3].Actors,
          awards: this.movieinfo[3].Awards,
          plot: this.movieinfo[3].Plot,
        },
        {
          top: 8,
          movie_name: this.movieinfo[2].Title,
          year: this.movieinfo[2].Year,
          director: this.movieinfo[2].Director,
          imdbRating: this.movieinfo[2].imdbRating,
          img: this.movieinfo[2].Poster,
          actors: this.movieinfo[2].Actors,
          awards: this.movieinfo[2].Awards,
          plot: this.movieinfo[2].Plot,
        },
        {
          top: 9,
          movie_name: this.movieinfo[1].Title,
          year: this.movieinfo[1].Year,
          director: this.movieinfo[1].Director,
          imdbRating: this.movieinfo[1].imdbRating,
          img: this.movieinfo[1].Poster,
          actors: this.movieinfo[1].Actors,
          awards: this.movieinfo[1].Awards,
          plot: this.movieinfo[1].Plot,
        },
        {
          top: 10,
          movie_name: this.movieinfo[0].Title,
          year: this.movieinfo[0].Year,
          director: this.movieinfo[0].Director,
          imdbRating: this.movieinfo[0].imdbRating,
          img: this.movieinfo[0].Poster,
          actors: this.movieinfo[0].Actors,
          awards: this.movieinfo[0].Awards,
          plot: this.movieinfo[0].Plot,
        },
      ];
    },
  },
};
</script>
<style scoped></style>

<style></style>
