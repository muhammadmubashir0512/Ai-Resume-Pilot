import { Features } from './Pages/Landing-Page/Features/Features'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pricing from './Pages/Landing-Page/Pricing/Pricing'
import { About } from './Pages/Landing-Page/About-Section/About'
import LandingPage from './Pages/Landing-Page/LandingPage'
import Signup from './Pages/auth/Signup'
import Login from './Pages/auth/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import PageTransition from './components/Layout/PageTransition'
import ResumeUpload from './Pages/Resume-Upload/ResumeUpload'
import ResumeAnalytics from './Pages/Resume-Analytics/ResumeAnalytics'
import InterviewPricing from './Pages/Mock-Interview/InterviewPricing'
import Mock_Interview from './Pages/Mock-Interview/Mock_Interview'
import Mock_Interview_Preference from './Pages/Mock-Interview/Mock_Interview_Preference'
import InterviewResult from './Pages/Mock-Interview/InterviewResult'
import Account from './Pages/Account-Settings/Account'
import ImproveResume from './Pages/Improve-Resume/ImproveResume'
import ImproveResult from './Pages/Improve-Resume/ImproveResult'
import OtpVerification from './Pages/auth/OTPVerify'
import MockInterviewInProgress from './Pages/Mock-Interview/MockInterviewInprogress'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/features",
      element: <Features />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/signup",
      element:
        <PageTransition>
          <Signup />
        </PageTransition>
    },
    {
      path: "/login",
      element:
        <PageTransition>
          <Login />
        </PageTransition>
    },
    {
      path: "/verify-otp",
      element:
        <PageTransition>
          <OtpVerification />
        </PageTransition>
    },
    // Protected Routes started here
    {
      path: "/dashboard",
      element:
        <PageTransition>
          <Dashboard />
        </PageTransition>
    },
    {
      path: "/resume-Analyzer",
      element:
        <PageTransition>
          <ResumeUpload />
        </PageTransition>
    },
    {
      path: "/resume-Analyzer/result/:Id",
      element:
        <PageTransition>
          <ResumeAnalytics />
        </PageTransition>
    },
    {
      path: "/resume-Analyzer/improve/:Id",
      element:
        <PageTransition>
          <ImproveResume />
        </PageTransition>
    },
    {
      path: "/resume-Analyzer/improve-resume/result/:jobId",
      element:
        <PageTransition>
          <ImproveResult />
        </PageTransition>
    },
    {
      path: "/Mock-Interview/inprogress",
      element:
        <PageTransition>
          <MockInterviewInProgress />
        </PageTransition>
    },
    {
      path: "/Mock-Interview/pricing",
      element:
        <PageTransition>
          <InterviewPricing />
        </PageTransition>
    },
    {
      path: "/Mock-Interview/Preference",
      element:
        <PageTransition>
          <Mock_Interview_Preference />
        </PageTransition>
    },
    {
      path: "/Mock-Interview",
      element:
        <PageTransition>
          <Mock_Interview />
        </PageTransition>
    },
    {
      path: "/Mock-Interview/result",
      element:
        <PageTransition>
          <InterviewResult />
        </PageTransition>
    },
    {
      path: "/Account-Setting",
      element:
        <PageTransition>
          <Account />
        </PageTransition>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
