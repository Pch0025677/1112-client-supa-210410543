import Wrapper from '../../assets/wrapper/Crown_43';
const CrownStaticPage_43 = () => {
    return (
        <Wrapper>
        <div className="header">
      <a href="/" className="logo-container">
        <img src="../image/crown.svg" />
      </a>
      <div className="options">
        <a href="./overview.html" className="option">Shop</a>
        <a href="/shop" className="option">Contact</a>
        <a href="/signin" className="option">Sign In</a>
        <div className="cart-icon" onclick="cartToggle()">
          <img className="shopping-icon" src="../image/shopping-bag.svg" alt="" />
        </div>
        <div className="cart-dropdown">
          <div className="cart-items">
            <div className="cart-item">
              <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item" />
              <div className="item-details">
                <span className="name">Brown Cowboy</span>
                <span className="price">4 * $35</span>
              </div>
            </div>
            <div className="cart-item">
              <img
                src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
                alt="item"
              />
              <div className="item-details">
                <span className="name">Blue Jean Jacket</span>
                <span className="price">1 * $90</span>
              </div>
            </div>
          </div>
          <button className="custom-button">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
    <div className="homepage">
        <h4>Crown2 -- Static (210410543)</h4>
      <div className="directory-menu">
        <div className="menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/cvpntL1/hats.png"
            alt=""
          />
          <a href="./hats.html" className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/px2tCc3/jackets.png"
            alt=""
          />
          <a href="./jackets.html" className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/0jqHpnp/sneakers.png"
            alt=""
          />
          <a href="./sneakers.html" className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="large menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/GCCdy8t/womens.png"
            alt=""
          />
          <a href="./womens.html" className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="large menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/R70vBrQ/men.png"
            alt=""
          />
          <a href="./mens.html" className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
      </div>
    </div>
    </Wrapper>
    );
};

export default CrownStaticPage_43;