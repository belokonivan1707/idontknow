import React from 'react';
import mime from 'mime-types'
import { extension } from '../../common/helpers/mime-types.helpers';
import './styles.css'

export const Home = () => {
    const test = 'image/png'

    React.useEffect(() => {
        // console.log(mime.extension(test))
        // console.log(extension(test))
    }, [])

    return (
        <div className='home-page-wrapper'>
            <h1 className='home-page-title'>Home</h1>
            <div className='home-page-list-container'>
                <ul className='home-page-list'>
                    <li className='home-page-list-item'>
                        <a className='home-page-list-link'>fucking :has</a>
                        <div className='home-page-wrapper'></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}