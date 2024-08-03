import React from "react";

class FooterFinal extends React.Component{
    render(){
        return(
            <div>
                <div className="flex p-20">
                    <img data-aos="fade-up" src="https://preview.redd.it/ztdwmfb7a8g21.png?width=1080&crop=smart&auto=webp&s=0299aad94836cfc2874ac9a0e127743bd0291d9f" width={600}/>
                    <div>
                        <h1 className="pb-10 font-bold text-white text-7xl">LOVE WHAT YOU WHEAR</h1>
                        <h3 className="pb-5 font-bold text-white text-lg">JADIKAN HARIMU BERBELANJA DENGAN SESENANG HATI DAN <br/> MEMILIKI KESAN TERSEDIRI UNTUK BELANJA DI WEBSITE KAMI</h3>
                        <button className=" sticky top-2 right-2 h-10 bg-white text-black hover:bg-blue-700 text-blue font-bold px-5 rounded-full">Lets Go</button>
                    </div>
                </div>
                <div className="flex justify-between p-20">
                    <h1 className="pb-5 font-bold text-white text-3xl">STREET</h1>
                    <h4 className="pb-5 font-bold text-white text-lg">WORKSHOP<br/>SHOPING</h4>
                    <h4 className="pb-5 font-bold text-white text-lg">WORKSHOP<br/>SHOPING<br/>WORKSHOP</h4>
                    <h4 className="pb-5 font-bold text-white text-lg">WORKSHOP<br/>SHOPING<br/>WORKSHOP<br/>SHOPING</h4>
                    <h4 className="pb-5 font-bold text-white text-lg">WORKSHOP<br/>SHOPING<br/>WORKSHOP<br/>SHOPING</h4>
                </div>
                <hr class=" my-10 bg-gray-200 border-1 dark:bg-gray-700"></hr>
                <h1 className="pb-5 font-bold text-white text-1xl text-center">LANDING PAGE WEBSITE TOKO PAKAIAN POWER BY AGUNG DEVOPS</h1>
            </div>
        )
    }
}

export default FooterFinal