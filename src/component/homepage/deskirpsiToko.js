import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function Deskripsi(){
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return(

        <div className="flex justify-between">
            <div>
                <p className="text-white font-bold p-5">Dunia penuh warna untuk si kecil.<br/> Toko kami menyediakan berbagai macam pakaian anak-anak<br/> dengan bahan yang lembut dan desain yang lucu <br/>sehingga anak Anda merasa nyaman dan senang beraktivitas.</p>
                <ul className="flex">
                    <li className="text-white font-bold p-4">NIKE</li>
                    <li className="text-white font-bold p-4">ADIDAS</li>
                    <li className="text-white font-bold p-4">DALAS</li>
                </ul>
            </div>
            <div>
                <img data-aos="fade-up" className="sticky p-5 " src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={40} width={750}
            />
            </div>
        </div>
    )
}

export default Deskripsi