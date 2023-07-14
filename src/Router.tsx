import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoadingSkeleton } from "./pages/LoadingSkeleton";
import { LayoutPagesWithNavbar } from "./layouts/LayoutPagesWithNavbar";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPagesWithNavbar />}>
        <Route path="/" element={<Home />}/>
        <Route path='/loading-skeleton' element={<LoadingSkeleton />} />
        <Route path="/styled-components" />
        <Route path="/react-router-dom" />
      </Route>
    </Routes>
  );
}
