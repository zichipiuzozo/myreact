const initState = {
  users: [
    {
      id: 1,
      name: "Albert",
    },
    {
      id: 2,
      name: "Tu dong hoa",
    },
    {
      id: 3,
      name: "Thắng ngu",
    },
  ],
  posts: [],
};
const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("check delete user", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      console.log("check delete user", action);
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};
export default rootReducers;
