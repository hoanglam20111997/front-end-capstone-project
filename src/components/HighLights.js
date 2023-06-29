import { Link } from "react-router-dom";
import Card from "./Card";
import './../css/HighLights.css'
import About from "./About";

export default function HighLights() {
    let dishes = [
        {
          title: 'Greek salad',
          image: 'greek salad.jpg',
          price: 12.99,
          description: `The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
        },
        {
          title: 'Bruschetta',
          image: 'bruchetta.jpg',
          price: 5.99,
          description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
        },
        {
          title: 'Lemon Dessert',
          image: 'lemon dessert.jpg',
          price: 5.00,
          description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
        }
      ];


    return (
        <div className="hightlights-w50">
            <div className="highlight-header">
                <div className="hightlight-title">
                    <h1>
                        This weeks specials!
                    </h1>
                </div>
                <div className="highlight-div-btn">
                    <Link to='/menu'>
                        <button className="highlight-btn">
                            Online Menu
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card-container">
                {dishes.map((dish, index) => (
                    <Card
                    key={index}
                    image={dish.image}
                    title={dish.title}
                    price={dish.price.toFixed(2)}
                    description={dish.description}
                    />
                ))}
            </div>
            <div>
                <About/>
            </div>
        </div>
    );
}