<template>
  <div class="home" v-loading.fullscreen.lock="movies === null">
 
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <h2>MOVIES</h2>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <div v-if="errorMessage !== null">
          <h2>Error code: {{ errorMessage.code }}</h2>
          <p>Message:</p>
          <div v-html="errorMessage.message"></div>
          <!-- <p>{{errorMessage.errors[0].message}}</p> -->
        </div>
        <div v-else>
          <div v-if="movies !== null" >
            <list-movies v-bind:listMoviesProp="movies"  />
          </div>
          
        </div>
    </el-row>
    
  </div>
</template>

<script>
import { listMovies } from "../components";
import api from "../api/instanceAPI";

export default {
  name: "Home",
  data: function () {
    return { movies: null, errorMessage: null, loading: true };
  },
  beforeMount() {
    this.getMovies();
  },
  components: {
    listMovies
  },
  computed: {},
  methods: {
  
    async getMovies() {
      await api
        .get("movie")
        .then((response) => {
          console.log(response.data);
          // the request will return an object that contains other properties: list / string .. etc
          this.movies = response.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = err;
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
