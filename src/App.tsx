import { Container } from 'semantic-ui-react';
import AppBoard from './components/board/Board';
import AppHeader from './components/header/AppHeader';
import { AppContextProvider } from './context/AppContext';
import WorldeContextProvider from './context/WordleContext';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <AppContextProvider>
      <WorldeContextProvider>
        <ToastContainer />
        <div className="App">
          <AppHeader />
          <Container>
            <AppBoard />
          </Container>
        </div>
      </WorldeContextProvider>
    </AppContextProvider>
  );
}

export default App;
