import { useState, useEffect } from "react";

import MenuProducts_43 from "../../components/MenuProducts_43";

const base_url = `https://dmnkstwjwvywbbjpyytg.supabase.co/rest/v1/menu_xx?select=*`

let url = `${base_url}`;

const options = {
  method: 'GET',
  headers: {
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`,
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`
  }
};

const MenuPage_43 = () => {
  const [products, setProducts] = useState([]);

  const changeFilter = (filter) => {
    if (filter === 'all') {
      url = `${base_url}`;
    }else {
      url = `${base_url}&category=eq.${filter}`;
    }
    getMenuData_43(filter);
}

  const getMenuData_43 = async (filter = 'all') => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(`${filter} data`, data);
    setProducts(data);
  }

  useEffect(() => {
    getMenuData_43();
  }, []);

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
                        <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter(); }}>all</button><button type="button" className="filter-btn"
                            data-id="breakfast" onClick={() => { changeFilter('breakfast'); }}>
                            breakfast</button><button type="button" className="filter-btn" data-id="lunch" onClick={() => { changeFilter('lunch'); }}>
                            lunch</button><button type="button" className="filter-btn" data-id="dessert" onClick={() => { changeFilter('dessert'); }}>
                            dessert</button><button type="button" className="filter-btn" data-id="shakes" onClick={() => { changeFilter('shakes'); }}>
                            shakes
                        </button>
                    </div>
                    <MenuProducts_43 products={products}/>
        </section>
      </div>
    </section>
  );
}

export default MenuPage_43;
