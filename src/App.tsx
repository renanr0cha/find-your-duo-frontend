import "./styles/main.css"
import logo from "./assets/logo.svg"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-font-gradient text-transparent bg-clip-text">duo</span> está aqui</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
        <GameBanner bannerUrl={""} title={""} adsCount={0} />
      </div>

      <CreateAdBanner />
    </div>
      
  )
}

export default App
