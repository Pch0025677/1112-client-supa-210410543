import { useState, useEffect } from "react";

import MenuProducts_43 from "../../components/MenuProducts_43";

const base_url = `/api/menu.json`;

let url = `${base_url}`;

const MenuLocalJsonPage_43 = () => {
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
    const response = await fetch(url);
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
            <h2>Menu from LocalJsons Server</h2>
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

export default MenuLocalJsonPage_43;
