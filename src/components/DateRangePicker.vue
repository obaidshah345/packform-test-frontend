<template>
  <DatePicker v-model="range" mode="dateTime" :columns="2" is-range>
    <template v-slot="{ inputValue, inputEvents }">
      <div class="group">
        <label class="button groupItem btn-label" for="start">Start Date</label>
        <input
          type="text"
          id="start"
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="input groupItem"
        />
        <label class="button groupItem btn-label" for="end">End Date</label>
        <input
          type="text"
          id="end"
          :value="inputValue.end"
          v-on="inputEvents.end"
          readonly
          class="input groupItem"
        />
      </div>
    </template>
  </DatePicker>
</template>

<script>
import { ref, watch } from "vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

export default {
  components: {
    DatePicker,
  },
  props: {
    startDate: Date,
    endDate: Date,
  },
  setup(props, { emit }) {
    const range = ref({
      start: props.startDate,
      end: props.endDate,
    });
    // Watch for changes in the date picker component's range
    watch(
      () => range.value,
      (newRange) => {
        emit("update:startDate", newRange.start);
        emit("update:endDate", newRange.end);
      }
    );
    return {
      range,
    };
  },
};
</script>
<style scoped>
@use form {
  field: label, group, input, button;
}
.btn-label {
  width: 300px;
}
</style>
