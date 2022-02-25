
export default function reducer(state, action) {
  switch(action.type) {
    /*раздел смены темы*/
    case 'changeTheme':
      return {
        btnCaption : state.btnCaption === "Night"? "Light": "Night",
        theme: !state.theme,
      }
    /*раздел вызов формы для ввода задачи*/
    case 'add': // нажатие на кнопку "Add"
      return { visibleForm: !state.visibleForm}
    /*раздел изменения статуса задачи (добавить, выполненая задача, удалить задачу)*/
    case 'addTask': {// нажатие на кнопку "Add Task"
      console.log('im run in addTask')
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
    case 'isDelete':{
      const newState = state.filter((task) => !task.isDelete);
      return [...newState]
    }
    default:
      throw new Error("ошибка в reducer")
  }
}
