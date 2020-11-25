import { useState } from 'react';
import products from './components/json/product.json';
import ProductJson from './components/products';
import PinPad from './components/pinpad';
import Display from './components/display';
import Coins from './components/coins';
import C from './assets/cancel-button.png';
import './style/main.scss';

const App = () => {
  const [product, setProduct] = useState(products.product);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [pins, setPins] = useState(
    {
      firstNum: 0,
      orderPay: 0,
    }
  );

  const onClickedNumber = num => {
    const enteredNum = num.target.value;
    if (pins.firstNum === 0) {
      setPins({firstNum: enteredNum})
    } else {
      setPins({firstNum: pins.firstNum + enteredNum})
    }
  }

  const onClickC = () => {
    setPins({firstNum: 0})
    setCurrentProduct({currentPrice: 0})
  }

  const onClickedProduct = num => {
    num.preventDefault();
    const enteredProduct = num.target.value

    product.map((item, index) => {
      if(currentProduct.currentPrice <= 0) {
        console.log('visszaad', item)
        //setProduct(qty: -1)
      }

      if(enteredProduct == item.id){
        setPins({firstNum: 0})
        setCurrentProduct({currentProduct: item.product_name, currentPrice: item.price})
      }
    })
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const pinpad = () => numbers.map((number, i) => {
    return <PinPad
              onClickedNumber={onClickedNumber}
              key={number}
              number={number}
              value={number}
              opacity = {currentProduct.opacity}
          />
  })


  const onClickedCoin = coin => {
    const currentCoin = coin.target.value;
    setCurrentProduct({currentPrice: currentProduct.currentPrice - currentCoin})
  }

  const coinsArray = [50,100,200];
  const coinsMap = () => coinsArray.map((coin, i) => {
    return <Coins
            onClickedCoin={onClickedCoin}
            key={coin}
            coin={coin}
            value={coin}
            opacity={currentProduct.opacity}
          />
  })

  const enter = () => {
    return <button className="btn btn-ok" onClick={onClickedProduct} key='currentProduct' value={pins.firstNum}>OK</button>
  }

  const passedProcess = () => {
    setCurrentProduct({currentPrice: 0, opacity: 1})
  }

  return (
    <>
    <div className="container">
      <div className="machine">
        <button className="btn btn-cancel" onClick={passedProcess}><img src={C} alt="clear"/></button>
        <ProductJson product_json={product}/>
        <Display firstNum={pins.firstNum} currentPrice={currentProduct.currentPrice}/>
        <div className="pinpad-container">
        <button onClick={onClickC} value='c' className="btn btn-c">C</button> 
          {pinpad()}
          {enter()}
          </div> 
      </div>
      <div className="coins-container">{coinsMap()}</div>
    </div>
    </>
    )
}

export default App;
