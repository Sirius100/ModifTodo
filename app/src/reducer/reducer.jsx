
export default function reducer(state, action) {
  switch(action.type) {
    case 'changeTheme':
        return {
          btnCaption : state.btnCaption === "Night"? "Light": "Night",
          theme: !state.theme,
        }

    case 'plus':
      return {count: state.count + 1}
    case 'minus':
      return {count: state.count - 1}

    case 'add':
      return { visibleForm: !state.visibleForm}
    default:
      throw new Error("ошибка в reducer")
  }
}
