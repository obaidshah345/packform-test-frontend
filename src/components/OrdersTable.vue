<template v-if="ordersData">
  <div class="orders-table">
    <table>
      <thead>
        <tr>
          <th>Order Name</th>
          <th>Customer Company Name</th>
          <th>Customer Name</th>
          <th>Order Date</th>
          <th>Delivered Amount</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in paginatedOrders" :key="order.id">
          <td>{{ order.order_name }}</td>
          <td>{{ order.customer_company_name }}</td>
          <td>{{ order.customer_name }}</td>
          <td>{{ order.order_date }}</td>
          <td>{{ order.delivered_amount }}</td>
          <td>{{ order.total_amount }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <VPagination
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
        :per-page="itemsPerPage"
        :pages="totalPages"
        :range-size="1"
        v-model="page"
      />
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: {
    VPagination,
  },
  props: {
    ordersData: Array,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.ordersData.length / this.itemsPerPage);
    },
    paginatedOrders() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.ordersData.slice(start, end);
    },
  },
  methods: {
    updateHandler(newPage) {
      this.currentPage = newPage;
    },
  },
};
</script>
<style scoped>
.orders-table {
  margin: 20px;
  text-align: center;
}

.pagination {
  display: inline-block;
  margin-top: 10px;
}

table {
  width: 100%;
  border-collapse: separate;
  border: solid #ddd 1px;
  border-radius: 6px;
}

td,
th {
  border-left: solid #ddd 1px;
  border-top: solid #ddd 1px;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  border-top: none;
}

td:first-child,
th:first-child {
  border-left: none;
}
</style>
