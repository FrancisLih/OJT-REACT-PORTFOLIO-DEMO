import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home";
import Works from "./components/pages/developer/dashboard/works/Works";


function App() {
  const queryClient = new QueryClient;
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
      </Router>
     </StoreProvider>
     </QueryClientProvider>
    </>
  )
}

export default App
