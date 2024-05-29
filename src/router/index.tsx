import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout"
import ComponentExcercise from "../pages/excercise"
import StateExcercise from "../pages/excercise2"

const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={} /> */}
        <Route index element={<ComponentExcercise />} />
        <Route path="state" element={<StateExcercise />} />
        
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default AppRouter