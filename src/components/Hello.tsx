import { defineComponent } from 'vue';
const Hello = defineComponent({
  name: 'Hello',
  props: {
    msg: {
      type: String,
      default: 'Hello TSX'
    }
  },
  setup(props) {
    return () => <div>{props.msg}</div>;
  }
});

export default Hello;
