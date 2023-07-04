import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { ThemeContext } from "../../../ThemeContext";
import '../styles/_app.scss';
import ToggleButton from '../../../common/Button';

function Home() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? "dark-mode" : " "}`}>
      <div className="app">
      <div className="level">
        <div>
          <h1 className="title">{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        </div>
         <ToggleButton />
      </div>
      <div className="columns">
        <div className="column">
        <Link to="/profile">GO TO Profile</Link>
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a href="" className="button is-primary">Save</a>
          <a href="" className="button is-link">Submit</a>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;
