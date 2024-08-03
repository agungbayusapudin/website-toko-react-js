import React from "react";

class Testimoni extends React.Component{
    render(){
        return(
            <div>
                <div className="flex  justify-between">
                    <div className="pt-24 pl-20">
                    <h3 className="font-bold text-black text-2xl">TESTIMONIAL</h3>
                    <h1 className="font-bold text-black text-8xl">OUR CUSTOMERS</h1>
                    </div>
                    <img data-aos="fade-up" src="https://i.ibb.co.com/FBCgrCb/Screenshot-from-2024-08-03-15-48-16.png"/>
                </div>
                <div className="flex">
                    <div className="flex p-20">
                        <img data-aos="fade-up" src="https://i.pinimg.com/564x/14/75/42/147542e19b4200308cf6ba61ec22498c.jpg" width={300}/>
                        <div>
                            <h1 className="text-black font-bold p-5 text-xl">Slamet Rozikin</h1>
                            <p className="text-black font-semibold p-5 text-sm">Dunia penuh warna untuk si <br/> berbagai macam pakaian anak<br/>  dan desain yang lucu sehingga<br/> dan senang beraktivitas.Dunia<br/>Dunia penuh warna untuk si</p>
                        </div>
                    </div>
                    <div className="flex p-20">
                        <img data-aos="fade-up" src="https://i.pinimg.com/564x/14/75/42/147542e19b4200308cf6ba61ec22498c.jpg" width={300}/>
                        <div>
                            <h1 className="text-black font-bold p-5 text-xl">Slamet Rozikin</h1>
                            <p className="text-black font-semibold p-5 text-sm">Dunia penuh warna untuk si kecil<br/> berbagai macam pakaian anak-anak<br/>  dan desain yang lucu sehingga anak<br/> dan senang beraktivitas.Dunia<br/>Dunia penuh warna untuk si kecil</p>
                        </div>
                    </div>
                    
                    
                    <img/>
                </div>
            </div>
        )
    }
}

export default Testimoni