import Navbar from '../header/Navbar'
import HeaderTop from '../header-center/Header-top'
import './product.scss'
import Get_Product from '../get_product/Get_Product'

const Prooducts = () => {
    return (
        <div className='all_product'>
            <Navbar />
            <div className="bottom-wrapper w-100">
                <HeaderTop />
                <Get_Product/>
            </div>
        </div>
    )
}

export default Prooducts