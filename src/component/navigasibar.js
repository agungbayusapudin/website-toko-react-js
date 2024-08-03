import React from "react";


class Navigasi extends React.Component{
    render () {
        return(
            <div className="flex bg-black justify-between">
                <h1 className="p-4 text-white font-extrabold font-serif right-2">STREET</h1>
                <ul className="flex text-white">
                    <li className="p-4">Home</li>
                    <li className="p-4">Chart</li>
                    <li className="p-4">Product</li>
                </ul>
                <button className="sticky top-2 right-2 h-10 bg-white hover:bg-blue-700 text-blue font-bold px-5 rounded-full">login</button>
            </div>
        )
    }
}

export default Navigasi