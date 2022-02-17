import './App.css';
import {Header} from '../header/header';
import { Main } from '../main/main';
import {Footer} from '../footer/footer';
import {ThemeProvider} from 'styled-components';
import {baseTheme} from '../theme/theme';

function App() {
  return (

    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </ThemeProvider>

  );
}

export default App;
