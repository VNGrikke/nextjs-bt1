import '@/app/page.css'
import Company from "./pages/company";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Icon from '@/components/icon';
import Buttons from '@/components/Buttons';

export default function page() {
  return (
    <div className="container">
      <Header />
      <h1> Ho va ten: Nguyen Van Vuong </h1>
      <Company />
      <Buttons/>
      <Icon/>
      <Footer />
    </div>
  )
}
