import { todoConstraints } from "./action-type";
import { v4 as uuid } from "uuid";

const initState = {
  todo: [],
  total: 0,
  totalCompleted: 0,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case todoConstraints.ADD_T0_LIST: {
      let task = {
        id: uuid(),
        title: payload,
        status: false,
      };
      return {
        ...state,
        todo: [...state.todo, task],
        total: state.total + 1,
      };
    }
    case todoConstraints.REMOVE_FROM_LIST: {
      const id = payload;
      let { totalCompleted } = state;
      const newData = state.todo.filter((item) => {
        if (item.id !== id) {
          return true;
        } else {
          item.status && (totalCompleted -= 1);
          return false;
        }
      });

      return {
        ...state,
        todo: newData,
        total: state.total - 1,
        totalCompleted,
      };
    }
    case todoConstraints.TOGGLE_LIST: {
      let totalCompleted = state.totalCompleted;
      const id = payload;
      const newData = state.todo.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          if (item.status) {
            totalCompleted -= 1;
          } else {
            totalCompleted += 1;
          }
          return { ...item, status: !item.status };
        }
      });
      return {
        ...state,
        todo: newData,
        totalCompleted,
      };
    }
    default:
      return state;
  }
};

export default reducer;
