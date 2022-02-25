import React, {useReducer} from 'react'
import {Header} from '../header/header';
import { Main } from '../main/main';
import {Footer} from '../footer/footer';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {baseTheme} from '../theme/theme';
import reducer from '../reducer/reducer';

const App = styled.div`
  transition: all .6s;
  text-align: center;
`
export const AppContext = React.createContext()

function WApp() {
  // отвечает за смену темы и надписи на переключателе
  const [themeBgBoolean, dispatch] = useReducer(reducer, {theme:false, btnCaption:'Light'});
  // const [tasks, dispatch] = useReducer(reducer, {task: []});

  const handleBtnThemeClick = ()=>{
    dispatch({type:"changeTheme"})
  }

  return (

    <AppContext.Provider value={{themeBgBoolean, handleBtnThemeClick}}>
      <ThemeProvider theme={baseTheme}>
        <App >

          <Header/>
          <Main/>
          <Footer/>

        </App>
      </ThemeProvider>
    </AppContext.Provider>

  );
}

export default WApp;
