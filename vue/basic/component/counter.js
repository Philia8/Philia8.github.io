// export default {
//   data() {
//     return {
//       buttonName: "红色按钮",
//       count: 0
//     }
//   },
//   template: `#counter`
// }

// 模板字符串
export default {
  data() {
    return {
      count: 0
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
};