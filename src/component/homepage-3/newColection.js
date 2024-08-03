import React from "react";

class NewColection extends React.Component{
    render(){
        return(
            <div  className="">
                <div data-aos="fade-up" className="flex justify-between">
                <img src="https://i.ibb.co.com/DLnDYBk/Screenshot-from-2024-08-03-15-23-04.png"/>
                <div className="pt-40 pl-20">
                    <h2 className="pl-10 font-bold text-white text-2xl">NEW COLECTION, HOT LOOK</h2>
                    <h1 className="p-10 font-bold text-white text-9xl">GET STARTED TODAY</h1>
                    <h3 className="pl-10 font-bold text-white text-lg">BELI SEKARANG RASAKAN KEMURAHANNYA DAN BAHAKN<br/>YANG BAGUS DAN MEMILIKI KUALITAS YANG SEMPURNA</h3>
                </div>
                </div>
                <div data-aos="fade-up" className="flex justify-between p-20">
                    <div className="">
                    <h1 className="font-bold text-white text-4xl">PANTS<br/>HODIE<br/>CAPS<br/>JEANS<br/>T-SHIRTS</h1>
                    <button className=" sticky top-2 right-2 h-10 bg-white text-black hover:bg-blue-700 text-blue font-bold px-5 rounded-full">Lets Go</button>
                    </div>

                    <img className="" src="https://images.unsplash.com/photo-1482859454392-1b5326395032?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600}/>
                </div>
            </div>
        )
    }
}

export default NewColection