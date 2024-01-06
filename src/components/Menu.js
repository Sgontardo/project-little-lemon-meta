import React from 'react';
import image1 from '../images/greek salad.jpg'
import image2 from '../images/lemon dessert.jpg'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h1>Menu Specials</h1>
                <button>Order Menu</button>
            </div>
            <div className='cards'>
                <div className='menu-items'>
                    <img src={image1} className='menu-items' alt="salad"/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>Greek Salad</h5>
                                <p>$10.12</p>
                            </div>
                            <p>Made of tomato, cucumber, bell pepper and red onion, all with salt, black pepper and oregano and dressed with olive oil.</p>
                            <button className='orderbtn'>Order Now</button>
                        </div>
                </div>
                    <div className='cards'>
                        <div className='menu-items'>
                            <img src={image2} className='menu-items' alt="salad"/>
                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5>Lemon dessert</h5>
                                    <p>$5.00</p>
                                </div>
                                <p>Lemon sponge cake, a creamy citrus cheesecake or a zesty sorbet with our best-ever lemon dessert recipes</p>
                                <button className='orderbtn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Menu;