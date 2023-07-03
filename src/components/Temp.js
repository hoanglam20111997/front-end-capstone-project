import './../css/Temp.css'

export default function Temp({title}) {
    return (
        <article className="temp-w50 ">
            <section className="temp-text">
                <h1 className='temp-title'>{title}</h1>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="temp-sub">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                <img className='tmp-img' src={require('./../assets/restaurant-images/restaurant chef B.jpg')} alt="restaurant" />
            </section>
        </article>
    );
}