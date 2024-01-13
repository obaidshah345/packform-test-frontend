<template>
  <div class="search-bar">
    <button>Search</button>
    <input
      type="text"
      v-model="searchQuery"
      @input="updateSearchQuery"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearchQuery() {
      // Emit an event to trigger the search in real-time
      this.$emit("live-search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  margin-right: 8px;
  width: 100%;
  border: solid #ddd 1px;
  border-radius: 6px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
