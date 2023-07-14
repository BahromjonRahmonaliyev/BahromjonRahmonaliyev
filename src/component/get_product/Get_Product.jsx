import './get_product.scss'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchLogo from '../../image/img/search.svg'

const Get_Product = () => {
    const [data,setData] = useState([])
    useEffect( () => {
        const ggg = async () => {
            try {
                await axios.get('https://64a6fca7096b3f0fcc80ef97.mockapi.io/products')
               .then(item => {
                setData(item.data)
                   console.log(item.data)
               })
            } catch (error) {
                alert(error)
            }
        }

        
            ggg()
        
    }, [data])

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const itemsPerPage = 10;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const [searchValue, setSearchValue] = useState('')
    const [optionValue, setOptionValue] = useState()
    const handleDelete = (id) => {
        try {
            axios.delete(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`)
            return null

        } catch (error) {
            alert(console.error)
        }
        const filteredData = data.filter((data) => data.id != id)
        setData(filteredData)
    }

    const handleEdit = (id) => {
           localStorage.setItem('id', id)
    }

    const handleValue = (e) => {
        setOptionValue(e.target.value)
    }

    return (
        <div>
            <div className="header-center">
                <div className="header-search_bar">
                    <div className="left">

                        <h3>Все товары ({optionValue ? optionValue : 0})</h3>
                    </div>
                    <div className="right_search">
                        <div className="search-box">
                            <img src={SearchLogo} alt="search-logo" className='search-logo' />
                        </div>
                        <div className="input">
                            <input type="search" name="search" placeholder='Поиск' id="search" onChange={(e) => setSearchValue(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="main-nav">
                    <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Наименование</th>
                            <th>Артикул </th>
                            <th>Бренд</th>
                            <th>Цена</th>
                            <th>Цена со скидкой</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {data && currentPageData.sort().slice(0, +optionValue ).filter((item) => {
                            if (searchValue === '') {
                                return item
                            } else if (item.madeIn.toLowerCase().includes(searchValue.toLowerCase())) {
                                return item
                            }
                        }).map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td>Товар {item.id} </td>
                                <td>{item.code} </td>
                                <td>{item.brand} </td>
                                <td>{item.price}$ </td>
                                <td>{item.priceInSale}$</td>
                                <td><Link to='/add'><FaEdit onClick={(e) => handleEdit(item.id)} /></Link></td>
                                <td><MdDelete onClick={(e) => handleDelete(item.id)} /></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="option-and-pagination">
                    <div className="option-box">
                        <select onChange={handleValue}>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className="wrapper">
                        <div className="pagination">
                            <button
                                className={currentPage === 0 ? 'disabled' : 'previous'}
                                onClick={() => handlePageChange({ selected: currentPage - 1 })}
                            >

                            </button>
                            <ul id='list'>

                                {[...Array(pageCount)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={currentPage === index ? 'list' : 'active'}
                                        onClick={() => handlePageChange({ selected: index })}

                                    >
                                        {index + 1}
                                    </li>
                                ))}

                                {/* Next button */}
                            </ul>
                            <button
                                className={currentPage === pageCount - 1 ? 'disabled' : 'next'}
                                onClick={() => handlePageChange({ selected: currentPage + 1 })}
                            >

                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom-elements">
                    <div className="left">
                        <button><Link to='/add'>Новый товар</Link></button>
                    </div>
                    <div className="right">
                        <h4>© Anymarket 2022</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get_Product