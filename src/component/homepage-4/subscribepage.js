import React from "react";

class Subscribe extends React.Component{
    render(){
        return(
            <div className="bg-red-50 flex justify-between">
                <div className="p-20">
                    <h1 className="pb-5 text-7xl font-bold ">SUBSCRIBE FOR NEWSLATER</h1>
                    <h3 className="pb-10 font-bold text-lg">JADIKAN HARIMU BERBELANJA DENGAN SESENANG HATI DAN <br/> MEMILIKI KESAN TERSEDIRI UNTUK BELANJA DI WEBSITE KAMI</h3>
                    <input type="text" className="bg-white border-black rounded-lg"/>
                    <button className=" bg-black text-white rounded-lg text-sm">SEND</button>
                </div>
                
                <img data-aos="fade-up" src="https://i.ibb.co.com/bB7tP9f/Screenshot-from-2024-08-03-18-00-45.png" />
            </div>
        )
    }
}

export default Subscribe