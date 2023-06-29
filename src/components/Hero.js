import { Link } from 'react-router-dom';
import './../css/Hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className='hero-w50'>
                <div className='hero-cp left'>
                    <div className='hero-disc'>
                        <h1>
                            Little Lemon
                        </h1>
                        <h2>
                            Chicago
                        </h2>
                        <p>
                            We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist.
                        </p>
                        <Link to='/reservation'>
                            <button className="hero-btn">
                                Reserve a Table
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='hero-cp right'>
                    <img className='hero-image' src={require('./../assets/restaurant-images/restauranfood.jpg')} alt="Restaurant Food" />
                </div>
            </div>
        </div>
    );
}