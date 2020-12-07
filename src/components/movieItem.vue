<template>
  <div class="movie-item">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>{{ movie.name }}</span>
        <el-button
          @click="dialogVisible = true"
          style="float: right; padding: 3px 0"
          type="text"
          >Read More</el-button
        >
        <el-row
          ><span
            >Rotten Tomatoes: {{ movie.rottenTomatesScore.toFixed(0) }}%</span
          ></el-row
        >
      </div>
      <div class="text item">
        <div v-if="movie.boxOfficeRevenueInMillions >= 900">
          {{ movie.boxOfficeRevenueInMillions }}$ - Awesome
        </div>
        <div v-if="movie.boxOfficeRevenueInMillions < 900">
          {{ movie.boxOfficeRevenueInMillions }}$ - Great
        </div>
      </div>
    </el-card>

    <el-dialog title="Detail" :visible.sync="dialogVisible" width="30%">
      <div>
        <span>
          <b>Name:</b> {{ movie.name }} - <b>Period:</b>
          {{ movie.runtimeInMinutes }} Minutes</span
        >
      </div>
      <el-divider></el-divider>
      <div>
        <span>
          <b>Academy Award Wins:</b> {{ movie.academyAwardWins }} -
          <b> Academy Award Nominations:</b>
          {{ movie.academyAwardNominations }}</span
        >
      </div>
      <el-divider></el-divider>
      <div>
        <span> <b>Budget In Millions:</b> {{ movie.budgetInMillions }} </span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: ["movie"],
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
          console.log(_);
        })
        .catch((_) => {
          console.log(_);
        });
    },
  },
};
</script>

<style scoped>
.box-card {
  margin: 5px;
}
</style>