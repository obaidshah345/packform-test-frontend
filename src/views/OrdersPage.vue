<template>
  <div class="orders-page">
    <div class="search-bar">
      <SearchBar @live-search="handleLiveSearch" />
    </div>
    <div class="content-container">
      <div class="date-filter">
        <DateFilter @live-filter="handleLiveFilter" />
      </div>
      <div class="orders-table">
        <div v-if="loading">Loading...</div>
        <div v-else>
          <OrdersTable :ordersData="filteredOrders" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../components/SearchBar.vue";
import DateFilter from "../components/DateFilter.vue";
import OrdersTable from "../components/OrdersTable.vue";

export default {
  components: {
    SearchBar,
    DateFilter,
    OrdersTable,
  },
  data() {
    return {
      orders: [],
      loading: false,
      searchQuery: "",
      dateFilter: null,
    };
  },
  mounted() {
    this.fetchOrders();
  },
  computed: {
    filteredOrders() {
      let filtered = this.orders;
      // Filter orders based on the search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter((order) =>
          order.order_name.toLowerCase().includes(query)
        );
      }
      if (this.dateFilter) {
        const { startDate, endDate } = this.dateFilter;
        // Convert start and end date strings to Date objects
        const startDateTime = startDate ? new Date(startDate) : null;
        const endDateTime = endDate ? new Date(endDate) : null;
        // Filter orders based on the date range
        filtered = filtered.filter((order) => {
          const orderDate = new Date(order.order_date);
          return (
            (!startDateTime || orderDate >= startDateTime) &&
            (!endDateTime || orderDate <= endDateTime)
          );
        });
      }
      return filtered;
    },
  },
  methods: {
    async fetchOrders() {
      this.loading = true;
      try {
        const response = await axios.get("http://localhost:8081/api/orders");
        this.orders = response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
        this.errorMessage = "Failed to fetch orders. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    handleLiveSearch(query) {
      this.searchQuery = query;
    },
    handleLiveFilter(dateRange) {
      this.dateFilter = dateRange;
    },
  },
};
</script>
<style scoped>
.search-bar {
  margin: auto;
  margin-bottom: 30px;
  width: 90%;
}
.date-filter {
  display: flex;
  max-width: 90%;
  margin-bottom: 20px;
}
.orders-table {
  width: 90%;
  margin: auto;
}
</style>
