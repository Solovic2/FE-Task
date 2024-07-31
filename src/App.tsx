import { Route, Routes } from "react-router-dom";
import LayoutRoute from "./components/ui/LayoutRoute";
import Details from "./pages/Details";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-darkBlue min-h-[100svh]  text-white">
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route element={<Movie />} path="/" />
          <Route element={<Details />} path="/movie/:id" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
