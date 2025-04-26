export default {
  data() {
    return {
      count: 0
    };
  },
  name: "Counter",
  template: `
  <button @click="count++">
    You clicked me {{ count }} times.
    </button>`
};