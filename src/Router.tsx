import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoadingSkeleton } from "./pages/LoadingSkeleton";
import { LayoutPagesWithNavbar } from "./layouts/LayoutPagesWithNavbar";
import { StyledComponents } from "./pages/StyledComponents";
import { ReactRouterDom } from "./pages/ReactRouterDom";
import { PhosphorIcon } from "./pages/PhosphorIcon";
import { Axios } from "./pages/Axios";
import { ConxtexApi } from "./pages/ContextApi";
import { ReactHookForm } from "./pages/ReactHookForm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPagesWithNavbar />}>
        <Route path="/" element={<Home />}/>
        <Route path='/loading-skeleton' element={<LoadingSkeleton />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/react-router-dom" element={<ReactRouterDom />} />
        <Route path="/phosphor-icons" element={<PhosphorIcon />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/context-api" element={<ConxtexApi />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
      </Route>
    </Routes>
  );
}
