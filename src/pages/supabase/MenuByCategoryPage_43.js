import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MenuByCategoryPage_43 = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate();

  const changeFilter = (filter = '') => {
      // navigate(`/supa_menu_43/${filter}`);
      window.location.href = `/supa_menu_43/${filter}`;
  }

  const getMenuByCategoryPage_43 = async () => {
    const response = await fetch(`https://dmnkstwjwvywbbjpyytg.supabase.co/rest/v1/menu_xx?select=*&category=eq.${params.category}`, {
      method: 'GET',
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`,
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbmtzdHdqd3Z5d2JianB5eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NjE0ODEsImV4cCI6MTk5MjAzNzQ4MX0.oSfa-8h3DQLfrLXOZ_E1-XmMwuKP62tbMDQCZ9GU9RQ`
      }
    });
    const data = await response.json();
    console.log('menu data', data);
    setProducts(data);
  }

  useEffect(() => {
    getMenuByCategoryPage_43();
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


          <div className="section-center">
            { products.map((product) => {
              const {id, img, price, title, descrip} = product;
              return(
                <article className="menu-item" key={id}>
                          <img src={img} alt="eggs" className="photo" />
                          <div className="item-info">
                            <header>
                              <h4>{title}</h4>
                              <h4 className="price">{price}</h4>
                            </header>
                            <p className="item-text">
                              {descrip}
                            </p>
                          </div>
                        </article>
              )      
            }) }
          </div>
        </section>
      </div>
    </section>
  );
}

export default MenuByCategoryPage_43;
