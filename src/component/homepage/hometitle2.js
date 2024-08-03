import React from "react";

export class Hometitle2 extends React.Component{
    render(){
        return(
            <div className="flex justify-between">
                <div className="flex">
                    <img data-aos="fade-up" className="p-5" src="https://images.unsplash.com/photo-1570464197285-9949814674a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D" alt="image" width={300}/>
                    <img data-aos="fade-up" className="p-5" src="https://images.unsplash.com/photo-1618329918461-51bb072e0ea5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" width={300}/>
                </div>
                <h1 className="relative p-7 text-white font-extrabold text-9xl">Your way</h1>
            </div>
        )
    }
}

export default Hometitle2 