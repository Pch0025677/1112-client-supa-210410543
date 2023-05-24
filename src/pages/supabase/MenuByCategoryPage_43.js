import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MenuProducts_43 from "../../components/MenuProducts_43";

const base_url = `https://dmnkstwjwvywbbjpyytg.supabase.co/rest/v1/menu_xx?select=*`;

let url = `${base_url}`;

const options = {
  method: 'GET',
  headers: {
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`,
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`
  }
};

const MenuByCategoryPage_43 = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate();

  const changeFilter = (category) => {
    console.log('category', category);
    setCategory(category);
  }

  const getMenuByCategoryPage_43 = async () => {
    if (params.category === 'all'){
      url = `${base_url}`;
    }else {
      url = `${base_url}&category=eq.${params.category}`;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('menu data', data);
    setProducts(data);
  }

  useEffect(() => {
    getMenuByCategoryPage_43();
  }, [category]);

  return (
    <section>
      <div className="btn-container"></div>
      <div className="section-center">
        <section className="menu">
          <div className="title">
            <h2>Menu from Supabase menu table</h2>
            <h3>Kay_Yang, 210410543</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
                        <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter('all');
                        return navigate(`/supa_menu_43/all`);
                         }}>
                          all</button><button type="button" className="filter-btn"
                            data-id="breakfast" onClick={() => { changeFilter('breakfast');
                            return navigate(`/supa_menu_43/breakfast`); }}>
                            breakfast</button><button type="button" className="filter-btn" data-id="lunch" onClick={() => { changeFilter('lunch');
                          return navigate(`/supa_menu_43/lunch`); }}>
                            lunch</button><button type="button" className="filter-btn" data-id="dessert" onClick={() => { changeFilter('dessert');
                          return navigate(`/supa_menu_43/dessert`); }}>
                            dessert</button><button type="button" className="filter-btn" data-id="shakes" onClick={() => { changeFilter('shakes');
                          return navigate(`/supa_menu_43/shakes`); }}>
                            shakes
                        </button>
                    </div>
                    <MenuProducts_43 products={products}/>
        </section>
      </div>
    </section>
  );
}

export default MenuByCategoryPage_43;
