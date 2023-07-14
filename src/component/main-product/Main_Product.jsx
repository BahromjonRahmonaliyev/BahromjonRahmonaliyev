import { Link } from 'react-router-dom'
import img from '../../image/img/image 2.png'

const Main_Product = () => {
    return (
        <div>
            <div className="header-center">
                <div className="center-card mt-5">
                    <h1>Вы пока не создали ни одного товара</h1>
                    <img src={img} width={310} height={240} alt="" />
                    <Link to="/add">Создать первый товар</Link>
                </div>
                <div className="date">
                    <h4>© Anymarket 2022</h4>
                </div>
            </div>
        </div>
    )
}

export default Main_Product