import React from 'react';
import Yamaha from '../../../images/FeatureProduct/Yamaha.jpg'
import suzuki from '../../../images/FeatureProduct/suzuki.jpg'
import Honda from '../../../images/FeatureProduct/Honda.jpg'


const FeatureProduct = () => {
    return (
        <div>
            <h1 className='text-dark text-center mt-5'>Feauture Product</h1>

            <div class="card-group">
                <div class="card">
                    <img src={Yamaha} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Yamaha XSR 155</h5>
                            <p class="card-text">Yamaha XSR 155 Bike Price in BD 2022. Which Engine Type is Liquid Cooled, Single Cylinder, 155.1cc.</p>
                        </div>
                </div>
                <div class="card">
                    <img src={suzuki} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Suzuki Gixxer SF</h5>
                            <p class="card-text">Suzuki Gixxer SF is a sports bike available at a starting price of Rs. 1,32,206 in India. It is available in only 1 variant and 3 colours.</p>
                        </div>
                </div>
                <div class="card">
                    <img src={Honda} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Honda CB150R Exmotion </h5>
                            <p class="card-text">This new motorbike looks mostly just like the 150SS Racer idea, however, there are delicate changes to create it a road legal. </p>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default FeatureProduct;