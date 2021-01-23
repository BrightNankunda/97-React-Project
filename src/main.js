import React, { Component } from 'react';
 
class Main extends Component {
    render() { 
        return (
            <div>
                <main className="main">
                <div className="content p-3">
                <div className="d-flex products">
                    <div className="card product shadow-sm mx-2">
                        
                        <div className="product-image">
                            <img src="/Images/beef.jpeg " className="w-100 card-image image-top" alt="product"/>
                        </div>
                        <div className="card-body product-details ">
                            <a href="#" className="nav">Classy Beef</a>
                            <a href="#" className="nav">Asic</a>
                            <p className="text-primary">$20 </p>
                        </div>
                        <button className="btn btn-warning mb-2">Order now</button>
                        
                    </div>

                    <div className="card product shadow-sm mx-2">
                        
                        <div className="product-image">
                            <img src="/Images/grilled.jpeg " className="w-100 card-image image-top" alt="product"/>
                        </div>
                        <div className="card-body product-details ">
                            <a href="#" className="nav">Classy Beef</a>
                            <a href="#" className="nav">Asic</a>
                            <p className="text-primary">$20 </p>
                        </div>
                        <button className="btn btn-warning mb-2">Order now</button>
                        
                    </div>

                    <div className="card product shadow-sm mx-2">
                        
                        <div className="product-image">
                            <img src="/Images/chicken.jpeg " className="w-100 card-image image-top" alt="product"/>
                        </div>
                        <div className="card-body product-details ">
                            <a href="#" className="nav">Classy Beef</a>
                            <a href="#" className="nav">Asic</a>
                            <p className="text-primary">$20 </p>
                        </div>
                        <button className="btn btn-warning mb-2">Order now</button>
                        
                    </div>
                </div>
                </div>
            </main>
            </div>
        );
    }
}
 
export default Main;