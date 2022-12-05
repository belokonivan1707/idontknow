import React from 'react';
import mime from 'mime-types'
import { extension } from '../../common/helpers/mime-types.helpers';
import './styles.css'

export const Home = () => {
    const [data, setData] = React.useState(null);
    const test = 'image/png'

    React.useEffect(() => {
        // console.log(mime.extension(test))
        // console.log(extension(test))

        fetch('http://localhost:8000/')
        .then((response) => {
            console.log('response', response);
            // console.log('response.json()', response.json());
            return response
        })
        .then((result) => console.log('result', result))
        .catch((error) => console.log('error', error));
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