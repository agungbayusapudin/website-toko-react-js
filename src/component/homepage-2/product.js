import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div>
                <div className="flex justify-between">
                    <h1 className="pl-20 font-bold text-black text-4xl">STREET READY FAVOURITE</h1>
                    <a className="pr-20 font-semibold text-blue-300 text-2xl" href="#"><h4>Brouse More</h4></a>
                </div>
                <div className="flex">
                    <div className="p-20">
                        <img data-aos="fade-up" src="https://i.pinimg.com/564x/1c/bd/3c/1cbd3cbb21dc92e6ab6720953500390b.jpg" width={350}/>
                        <h1 className="font-bold text-black text-lg">JACKET STONE ISLAND</h1>
                        <h4 className="font-semibold text-black text-sm">KATUN</h4>
                        <h4 className="font-semibold text-black text-sm">xl</h4>
                        <h1 className="font-bold text-black text-lg">$ 4000</h1>
                    </div>
                    <div className="p-20">
                        <img data-aos="fade-up" src="https://i.pinimg.com/564x/1c/bd/3c/1cbd3cbb21dc92e6ab6720953500390b.jpg" width={350}/>
                        <h1 className="font-bold text-black text-lg">JACKET STONE ISLAND</h1>
                        <h4 className="font-semibold text-black text-sm">KATUN</h4>
                        <h4 className="font-semibold text-black text-sm">xl</h4>
                        <h1 className="font-bold text-black text-lg">$ 4000</h1>
                    </div>
                    <div className="p-20">
                        <img data-aos="fade-up" src="https://i.pinimg.com/564x/1c/bd/3c/1cbd3cbb21dc92e6ab6720953500390b.jpg" width={350}/>
                        <h1 className="font-bold text-black text-lg">JACKET STONE ISLAND</h1>
                        <h4 className="font-semibold text-black text-sm">KATUN</h4>
                        <h4 className="font-semibold text-black text-sm">xl</h4>
                        <h1 className="font-bold text-black text-lg">$ 4000</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product