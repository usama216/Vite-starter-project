import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { theme } from './Theme';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Router from './routes';
import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook

function App() {
  const location = useLocation(); // Get the current location using useLocation hook
  const showHeaderAndFooter = location.pathname !== '/admin/dashboard' && location.pathname !== '/seller/dashboard'; // Determine whether to show header and footer based on current path

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
              {/* Conditionally render Header and Footer */}
              {showHeaderAndFooter && <Header />}
              <Router />
              {showHeaderAndFooter && <Footer />}
            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
