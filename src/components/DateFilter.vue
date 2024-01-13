<template>
  <div class="date-filter">
    <button>Date Filter</button>
    <div class="container mt-30px">
      <DateRangePicker
        :start-date="startDate"
        :end-date="endDate"
        @update:startDate="updateStartDate"
        @update:endDate="updateEndDate"
      />
    </div>
  </div>
</template>
<script>
import DateRangePicker from "./DateRangePicker.vue";

export default {
  components: { DateRangePicker },
  data() {
    return {
      startDate: new Date(),
      endDate: new Date(),
    };
  },
  methods: {
    updateStartDate(newStartDate) {
      this.startDate = newStartDate;
    },
    updateEndDate(newEndDate) {
      this.$emit("live-filter", {
        startDate: this.startDate,
        endDate: newEndDate,
      });
    },
  },
};
</script>
<style>
@use base;
@use container;

.container {
  width: 500px;
}
.date-filter {
  display: flex;
  justify-content: center;
}
</style>
