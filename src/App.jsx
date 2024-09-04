import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { theme } from './Theme';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Router from './routes';
import './App.css';
import Header from './Pages/Components/Header';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import Footer from './Pages/Components/Footer';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            <ErrorBoundary>
              <Header />


              <Router />
<Footer/>



            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
