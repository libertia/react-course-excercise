import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout/index"
import ComponentExcercise from "../pages/excercise"
import StateExcercise from "../pages/excercise2"
import StateExcercisePitfall from "../pages/excercise3"
import HookExcercise from "../pages/excercise4"
import Excercise5 from "../pages/excercise5"
import Excercise7 from "../pages/excercise7"
import Excercise6 from "../pages/excercise6"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={} /> */}
          <Route index element={<ComponentExcercise />} />
          <Route path="state" element={<StateExcercise />} />
          <Route path="state2" element={<StateExcercisePitfall />} />
          <Route path="hook" element={<HookExcercise />} />
          <Route path="context" element={<Excercise5 />} />
          <Route path="redux" element={<Excercise6 />} />
          <Route path="e7" element={<Excercise7 />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default AppRouter