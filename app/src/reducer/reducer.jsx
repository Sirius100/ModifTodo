
export default function reducer(state, action) {
  switch(action.type) {
    /*раздел смены темы*/
    case 'changeTheme':
      return {
        btnCaption : state.btnCaption === "Night"? "Light": "Night",
        theme: !state.theme,
      }

    case 'add': // нажатие на кнопку "Add"
      return { visibleForm: !state.visibleForm}
    case 'addTask': {// нажатие на кнопку "Add Task"
      return [
        ...state,
        {
          ...action.payload
        },
      ]
    }
    case 'isComplete':{
      return [
        ...state
      ]
    }
    default:
      throw new Error("ошибка в reducer")
  }
}
