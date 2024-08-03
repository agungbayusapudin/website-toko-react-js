import logo from './logo.svg';
import './App.css';
import Navigasi from './component/navigasibar';
import ListMenu from './component/homepage/listmenu';
import Hometitle from './component/homepage/homeTitle';
import Hometitle2 from './component/homepage/hometitle2';
import Deskripsi from './component/homepage/deskirpsiToko';
import ImageH from './component/homepage-2/heroPage2';
import ListDeskripsiProduct from './component/homepage-2/listDeskripsiSop';
import Product from './component/homepage-2/product';
import NewColection from './component/homepage-3/newColection';
import Testimoni from './component/homepage-4/testimoni';
import Subscribe from './component/homepage-4/subscribepage';
import FoterInfo from './component/footer/foterInfo';
import FooterFinal from './component/footer/footerFinal';

function App() {
  return (
    <div className="App">
      <div>
      <Navigasi/>
      <Hometitle/>
      <ListMenu/>
      <Hometitle2/>
      <Deskripsi/>
      </div>
      <div className='App-2'>
        <ImageH/>
        <ListDeskripsiProduct/>
        <Product/>
      </div>
      <div className='App-3'>
        <NewColection/>
      </div>
      <div className='App-4'>
        <Testimoni/>
        <Subscribe/>
      </div>
      <div className='footer'>
        <FoterInfo/>
        <FooterFinal/>
      </div>
    </div>
  );
}

export default App;
