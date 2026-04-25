import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageNew from './pages/LandingPageNew';
import LoginWithNricFin from './pages/LoginWithNricFin';
import CreateAccountWithNric11 from './pages/CreateAccountWithNric11';
import SingpassLogin from './pages/SingpassLogin';
import SingpassDataForFormFilling from './pages/SingpassDataForFormFilling';
import Dashboard from './pages/Dashboard';
import OpenNotification from './pages/OpenNotification';
import DashboardNew from './pages/DashboardNew';
import Policies from './pages/Policies';
import PolicyDetails from './pages/PolicyDetails';
import Claims from './pages/Claims';
import Rewards from './pages/Rewards';
import FAQ from './pages/FAQ'
import FAQExpanded from './pages/FAQExpanded';

function App() {
  return (
    <div className="font-[Noto_Sans]">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageNew />} />
          <Route path="/landing-old" element={<LandingPage />} />
          <Route path="/login-with-nric-fin" element={<LoginWithNricFin />} />
          <Route path="/create-account" element={<CreateAccountWithNric11 />} />
          <Route path="/singpass-login" element={<SingpassLogin />} />
          <Route path="/singpass-data-for-form-filling" element={<SingpassDataForFormFilling />} />
          <Route path="/dashboard" element={<DashboardNew />} />
          <Route path="/open-notification" element={<OpenNotification />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policy-details" element={<PolicyDetails />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/faq" element={<FAQ />} />
                <Route path="/faqexpanded" element={<FAQExpanded />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;