import React from "react";

export class Hometitle extends React.Component{
    render(){
        return(
            <div className="flex">
                <h1 className="relative p-4 text-white font-extrabold text-8xl top-10">MOST EXPERIENCES</h1>
                <img data-aos="fade-up" src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" width={300}/>
            </div>
        )
    }
}

export default Hometitle 