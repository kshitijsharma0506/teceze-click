import LandingPage from './LandingPage'
import Services from './Services'
import ChooseUs from './ChooseUs'
import Testimonial from './Testimonial'
import Capabilities from './Capabilities'
import Pricing from './Pricing'
import Blog from './Blog'
import Navbar from './Navbar'

export default function MainBody() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Services/>
        <ChooseUs/>
        <Testimonial/>
        <Capabilities/>
        <Pricing/>
        <Blog/>
    </div>
  )
}
