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
      path: "/resume-Analytics",
      element:
        <PageTransition>
          <ResumeAnalytics />
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
