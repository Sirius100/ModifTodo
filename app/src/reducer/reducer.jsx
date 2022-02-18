
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

    case 'add': // нажатие на кнопку add
      return { visibleForm: !state.visibleForm}
    case 'addTask': {// нажатие на кнопку addTask
      const {text} = action.payload
      return [
        ...state,
        {
          id:state.length+1,
          time: new Date(),
          text,
          isComplete: false
        },
      ]
      }
    default:
      throw new Error("ошибка в reducer")
  }
}
