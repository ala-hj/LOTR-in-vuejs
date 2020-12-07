<template>
  <div>
    
    <el-col
       :span="12"
      v-for="movie in listMoviesProp.docs"
      :key="movie._id"
      :xs="12"
      :sm="10"
      :md="8"
      :lg="7"
      :xl="6"  
    >
    <movie-item v-bind:movie="movie"></movie-item>
    </el-col>
  </div>
</template>

<script>
import movieItem from './movieItem';
export default {
  name: "listMovies",

  props: ["listMoviesProp"],
  components: {movieItem},
  methods: {
    load() {
      console.log("loaded again");
    },
  },
  computed: {},
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}


</style>