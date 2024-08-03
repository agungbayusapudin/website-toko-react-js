import React from "react";


class ImageH extends React.Component{
    render(){
        return(
            <div className="">
                <div className="flex">
                    <img className="" src="https://i.pinimg.com/564x/d0/f6/86/d0f68696d6c4138d1666a7f6af57c549.jpg" alt="Surfer-Sketch" width={400} height={100}/>
                    <div className="relative top-52">
                        <h5 className="text-black font-semibold text-xl">THE GAME IS CHANGING</h5>
                        <h1 className="text-black font-bold text-9xl">INTRODUCING</h1>
                    </div>
                </div>
                <div>
                <div className="flex absolute left-56">
                    <h1 className="p-2 font-bold text-8xl">FASHION</h1>
                    <h1 className="p-2 font-bold text-8xl text-white bg-orange-500 text-stroke-2 stroke-black">REVOLUTION</h1>
                </div>
                <div className="flex">
                    <img className="pt-14 pl-4" src="https://i.pinimg.com/564x/6f/27/cf/6f27cf2e136b14c642920eac758cf8f0.jpg"width={500}/>
                    <div className="pt-40 pl-32">
                            <h1 className="p-5 font-extrabold text-lg">Berbagai Baju Yang Nyaman Dan Dapat<br/> Didapatkan Dengan Harga Murah</h1>
                            <p className="text-black font-semibold p-5 text-lg">Dunia penuh warna untuk si kecil.Toko kami menyediakan <br/> berbagai macam pakaian anak-anak dengan bahan yang lembut<br/>  dan desain yang lucu sehingga anak Anda merasa nyaman<br/> dan senang beraktivitas.Dunia penuh warna untuk si kecil.<br/>Dunia penuh warna untuk si kecil.Toko kami menyediakan <br/> berbagai macam pakaian anak-anak dengan bahan yang lembut<br/>  dan desain yang lucu sehingga anak Anda merasa nyaman<br/> dan senang beraktivitas.Dunia penuh warna untuk si kecil.</p>
                        <div className="flex justify-between p-5">
                            <button className="sticky top-2 right-2 h-10 bg-black text-white hover:bg-blue-700 text-blue font-bold px-5 rounded-full">Lets Go</button>
                            <img data-aos="fade-up" src="https://i.ibb.co.com/ft8YdR5/Screenshot-from-2024-08-02-02-13-48.png" width={200}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default ImageH