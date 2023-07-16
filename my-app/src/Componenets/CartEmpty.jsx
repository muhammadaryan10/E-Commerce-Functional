import React from 'react';
import { NavLink } from 'react-router-dom';

const EmptyCartPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.centerContent}>
        {/* <img
          src=""
          alt="Empty Cart"
          style={styles.emptyCartImg}
        /> */}
        <p>Looks like your cart is empty. Start shopping now!</p>
        <NavLink to="/"><button style={styles.backToShoppingBtn}>Back to Shopping</button></NavLink>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpRvY7lnOseTEl15tN3rcayd_hO98cKmeRg&usqp=CAU")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    
  },
  centerContent: {
    textAlign: 'center',
  },
  emptyCartImg: {
    maxWidth: '600px',
    marginBottom: '20px',
  },
  backToShoppingBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default EmptyCartPage;
