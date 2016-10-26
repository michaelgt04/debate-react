export const newPostReducer = (state="", action) => {
  switch (action.type) {
    case "NEW_POST":
      return action.newPost
    default:
      return state
  }
}
