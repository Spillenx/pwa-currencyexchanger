import './Main.css'
import Header from "./Header"
import ExchangeMain from "./ExchangeMain"
import WeatherMain from "./WeatherMain"

const Main = () => {
  
  return (

    <div className="main">

      <div className="main-container">

        <Header />
        <WeatherMain />
        <ExchangeMain />

       </div> 
    </div>
   )
}
 
export default Main