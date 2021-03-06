import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./styles.scss";
import cartLogo from "../../media/cart.png";

export const CartWidget = () => {
  const { cartLength } = useContext(CartContext);
  const [color, setColor] = useState("#c25160");

  return (
    <>
      {cartLength > 0 ? (
        <span className="cartWidget">
          <Link
            to={"/cart"}
            className="cartWidgetLink p-0 d-flex"
            style={{ color: color }}
            onMouseOver={() => setColor("#c25160")}
          >
            <img src={cartLogo} alt="carrito" className="cartWidgetImg m-0" />
          </Link>
          <Link
            to={"/cart"}
            className="cartWidgetLink p-0 d-flex"
            style={{ color: color }}
            onMouseOver={() => setColor("#c25160")}
          >
            <h3 className="bg-light text-center ml-0">{cartLength}</h3>
          </Link>
        </span>
      ) : null}
    </>
  );
};
