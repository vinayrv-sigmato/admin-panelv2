import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Reports from "./pages/Reports"
import Users from "./pages/Users"
import Campaign from "./pages/Campaign"
import Signup from './components/Signup';
import Login from "./components/Login";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./components/ForgotPassword";
import AddUserReports from "./pages/reports/AddUserReport"
import HealthCard from "./pages/reports/HealthCard"
import HealthCard1 from "./pages/reports/HealthCard1"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <div>
    <AuthContextProvider>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/signup" exact element={<Signup/>}></Route>
      <Route path="/resetpassword" exact element={<ForgotPassword/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path='/users'element={<ProtectedRoute><Users /></ProtectedRoute>}/>
      <Route path='/home'element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      <Route path='/reports'element={<ProtectedRoute><Reports/></ProtectedRoute>}/>
      <Route path='/campaign'element={<ProtectedRoute><Campaign/></ProtectedRoute>}/>
      <Route path='/adduserreport'element={<ProtectedRoute><AddUserReports/></ProtectedRoute>}/>
      <Route path='/adduserreport/healthandactivitycard'element={<ProtectedRoute><HealthCard/></ProtectedRoute>}/>
      <Route path='/adduserreport/healthandactivitycard1'element={<ProtectedRoute><HealthCard1/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
