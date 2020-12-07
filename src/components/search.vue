<template>
  <div class="search">
    <div>
      <el-input
        align="center"
        placeholder="Search ..."
        v-on:input="searchInputMethod"
        v-model="searchInput"
        prefix-icon="el-icon-search"
        clearable
      ></el-input>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      searchInput: null,
    };
  },
  methods: {
    searchInputMethod(event) {
      this.searchInput = event;

      this.$emit("termChange", event);
    },
  },
};
</script>

<style scopped>

.el-input {
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin:20px;
}
</style>