import Header from '../common/Header'
import Footer from '../common/Footer'
import CardUI from '../components/CardUI'
import Events from '../components/Events'
import BannerSlider from '../components/BannerSlider'
export default function Home(){
    return(
        <div>
            <Header/>
            <BannerSlider/>
            <div className=''>
                <CardUI/>
                <Events/>
            </div>
            <Footer/>
        </div>
    )
}