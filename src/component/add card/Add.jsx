import React, { useEffect, useState } from 'react'
import './Add.scss'
import img from '../header/img/Mask group.png'
import { Link } from 'react-router-dom'
import img1 from '../add card/img/Фото.png'
import Get_Product from '../get_product/Get_Product'
import axios from 'axios'

const Add = () => {
    // const [editProduct, setEditProduct] = useState([]);
    const [brand, setBrand] = useState('');
    const [code, setCode] = useState('');
    // const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [priceInSale, setPriceInSale] = useState('');
    const [madeIn, setMadeIn] = useState('')
    const [gram, setGram] = useState('')

    const handleSubmits = async (e) => {
        e.preventDefault()
        let obj = {
            brand: brand,
            code: code,
            description: description,
            madeIn: madeIn,
            name: name,
            price: price,
            priceInSale: priceInSale
        }
        
        try {
           const {data} = await  axios.post(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products`, obj )
           console.log(data);
        } catch (error) {
            
        }

    }
    const [data, setData] = useState([])
    
    return (
        <div className='Navbar'>
            <div className="navbar2">
                <img src={img} alt="" />
                <div className="icon2">
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </div>
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket3-fill" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='header2'>
                <div className="header-top2">
                    <div className="text">
                        <h3>Товары</h3>
                        <p>Главная / Товары</p>
                    </div>
                    <button>
                        <Link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                            Выйти
                        </Link>
                    </button>
                </div>
                <div className="header-center2">
                    <form onSubmit={handleSubmits}>
                        <div className="center-card2">
                            <button>Основные</button>
                            <div className="card1">


                                <div className="first-in">
                                    <label>Название *</label>
                                    <input required type="text" onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="two-input">
                                    <div className="first">
                                        <label>Бренд *</label>
                                        <input required type="text" onChange={(e) => setBrand(e.target.value)} />
                                    </div>
                                    <div className="second">
                                        <label>Артикул производителя *</label>
                                        <input required type="text" onChange={(e) => setCode(e.target.value)} />
                                    </div>
                                </div>

                                <div className="city">
                                    <label>Страна производства</label>
                                    <input required type="text" placeholder='Китай' onChange={(e) => setMadeIn(e.target.value)} />
                                </div>

                                <div className="texttarea">
                                    <label>Описание *</label>
                                    <textarea required onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>

                                <div className="all">
                                    <label>Вес с упаковкой, грамм</label>
                                    <input required onChange={(e) => setGram(e.target.value)} />
                                </div>


                            </div>
                            <div className="card2">
                                <label>Фотографии *</label>
                                <div className="images">
                                    <img width={110} height={110} src={img1} alt="" />
                                </div>
                                <p>Загрузите не более 20 фотографий</p>
                                <select className="products-categories">

                                </select>
                                <div className="price">
                                    <div className="price-top">
                                        <label>Цена</label>
                                        <input type="text" onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div className="price-buttom">
                                        <label>Цена со скидкой</label>
                                        <input type="text" onChange={(e) => setPriceInSale(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="date">
                            <h4>© Anymarket 2022</h4>
                        </div>
                        <div className="header-buttom">
                            <button type='submit'>
                                <Link to='/product'>Сохранить</Link>
                                    
                                
                            </button>
                            <button className='btn'>Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add