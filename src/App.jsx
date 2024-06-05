import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import MobileView from "./components/MobileView";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieReducer";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async()=>{
    try {
        const response = await axios.get('/trending/all/week');

        dispatch(setBannerData(response.data.results));
    } catch (error) {
        console.log("error",error.message);
    }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")

        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    fetchTrendingData();
    fetchConfiguration();
  },[]);


  return (
    
    <main className="pb-14 lg:pb-0">
      <Header/>
      <div className='pt-1'>
            <Outlet/>
        </div>
      <Footer/>
      <MobileView/>
    </main>
 
  );
}

export default App;
