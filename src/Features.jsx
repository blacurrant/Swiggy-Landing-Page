import React from 'react';
import Feature from './Feature';

function Features(){
    return <div className='features'>
        <div className='container'>
        <Feature img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" h2='No Minimum Order' p='Order in for yourself or for the group,' p1='with no restrictions on order value' />
        <Feature img='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy' h2='Live Order Tracking' p='Know where your order is at all times,' p1='from the restaurant to your doorstep' />
        <Feature img='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn' h2='Lightning-Fast Delivery' p='Experience Swiggys superfast delivery' p1='for food delivered fresh and on time' />
        </div>
    </div>
}
export default Features;