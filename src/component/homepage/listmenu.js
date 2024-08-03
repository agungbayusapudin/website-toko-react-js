import React from "react";

class ListMenu extends React.Component{
    render(){
        return(
            <div className="relative">
                <ul className="flex justify-between">
                <a href="#"><li className="relative left-5 p-4 text-white font-bold">SPORT</li></a>
                <a href="#"><li className="p-4 text-white font-bold">T-SHIRT</li></a>
                <a href="#"><li className="p-4 text-white font-bold">SHOE</li></a>
                <a href="#"><li className="p-4 text-white font-bold">JACKET</li></a>
                <a href="#"><li className="p-4 text-white font-bold">BACK PACK</li></a>
                <a href="#"><li className="relative right-5 p-4 text-white font-bold">SUNGLASS</li></a>
                </ul>
            </div>
        )
    }
}


export default ListMenu;