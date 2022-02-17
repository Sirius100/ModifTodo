
export default function reducer(state, action) {
  console.log("state :", state)
  switch(action.type) {
    case 'checkedBtnTheme':
        return {
          themeCaption : state.themeCaption === "Night"? "Light": "Night",
          theme: !state.theme,
        }
    case 'plus':
      return {count: state.count + 1}
    case 'minus':
      return {count: state.count - 1}
    default:
      throw new Error("ошибка в reducer")
  }
}
