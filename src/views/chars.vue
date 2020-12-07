<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" :gutter="10">
      <el-col :span="6"> <search v-on:termChange="onTermChange" /> </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div v-if="character === null">Nothing</div>
        <div v-else>
          <div v-loading="isLoading">
            <p>{{ character._id }}</p>
            <p>{{ character.name }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { search } from "../components";
import api from "../api/instanceAPI.js";
export default {
  name: "charsView",
  components: {
    search,
  },
  data() {
    return {
      character: null,
      isLoading: false,
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      console.log("get new data from: " + searchTerm);
      
      this.isLoading = true;
      await api
        .get("character", {
          params: {
            name: searchTerm,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.docs.length > 0) {
            this.character = response.data.docs[0]
          }else{
            this.character = null;
          }

          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>