
export default function reducer(state, action) {
  console.log("state :", state)
  switch(action.type) {
    case 'checkedBtnTheme':
        return {
          themeCaption : state.themeCaption === "Night"? "Light": "Night",
          theme: !state.theme,
        }

    default:
      throw new Error("ошибка из файла reducer")
  }
}
