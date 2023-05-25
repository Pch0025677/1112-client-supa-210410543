import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage_43";
import MenuStaticPage_43 from "./pages/local/MenuStaticPage_43";
import SupaMenuPage_43 from "./pages/supabase/MenuPage_43";
import SupaMenuByCategoryPage_43 from "./pages/supabase/MenuByCategoryPage_43";
import MenuNodePage_43 from "./pages/node/MenuNodePage_43";

const App_43 = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/static_43' element={<MenuStaticPage_43 />} />
      <Route path='/supa_menu_43' element={<SupaMenuPage_43 />} />
      <Route path='/supa_menu_43/:category' element={<SupaMenuByCategoryPage_43 />} />
      <Route path='/node_menu_43' element={<MenuNodePage_43 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App_43;
