import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpdateInfo from './pages/UpdateInfo';
import Statements from './pages/Statements';
import Resources from './pages/Resources';
import ProfileSettings from './pages/ProfileSettings';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import TourGuide from './components/TourGuide';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isTourActive, setIsTourActive] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard onNavigate={handleNavigate} onStartTour={() => setIsTourActive(true)} />;
      case 'update':
        return <UpdateInfo onNavigate={handleNavigate} onStartTour={() => setIsTourActive(true)} />;
      case 'statements':
        return <Statements onNavigate={handleNavigate} onStartTour={() => setIsTourActive(true)} />;
      case 'resources':
        return <Resources onNavigate={handleNavigate} onStartTour={() => setIsTourActive(true)} />;
      case 'profile':
        return <ProfileSettings onNavigate={handleNavigate} onBack={() => setCurrentPage('home')} onStartTour={() => setIsTourActive(true)} />;
      case 'change-password':
        return <ChangePassword onNavigate={handleNavigate} onBack={() => setCurrentPage('home')} onStartTour={() => setIsTourActive(true)} />;
      case 'logout':
        setIsLoggedIn(false);
        setCurrentPage('home');
        return <Login onLogin={() => setIsLoggedIn(true)} />;
      default:
        return <Dashboard onNavigate={handleNavigate} onStartTour={() => setIsTourActive(true)} />;
    }
  };

  return (
    <div className="App">
      {!isLoggedIn && showForgotPassword ? (
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      ) : !isLoggedIn && showLogin ? (
        <Login 
          onLogin={() => setIsLoggedIn(true)} 
          onForgotPassword={() => setShowForgotPassword(true)}
          onBack={() => setShowLogin(false)}
        />
      ) : isLoggedIn ? (
        <>
          {renderPage()}
          <TourGuide
            isActive={isTourActive}
            onClose={() => setIsTourActive(false)}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />
        </>
      ) : (
        <LandingPage onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
