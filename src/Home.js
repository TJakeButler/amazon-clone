import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            

            <div className="home__row">
                <Product 
                id='49538094'
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={5}
                />
                <Product
                id='777888'
                title='Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                price={239.00}
                image='https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg'
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                id='3234911'
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                price={98.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                rating={4}
                />
                <Product
                id='987123'
                title="Samsung LC49 49' Curved LED Gaming Monitor" 
                price={687.99}
                image='https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg'
                rating={4}
                />
                <Product
                id='343456'
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)- Silver (4th Generation)" 
                price={944}
                image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                rating={5}
                />
                
            </div>
            <div className="home__row">
                <Product
                id='911123'
                title="Microsoft Xbox One S Console w/ Accessories - 500GB HDD - White" 
                price={598.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61bxKvTvi7L._AC_SL1200_.jpg"
                rating={4}
                />
                
                
            </div>
            </div>
        </div>
    )
}

export default Home
