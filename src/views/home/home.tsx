import React from 'react';
import mime from 'mime-types'
import { extension } from '../../common/helpers/mime-types.helpers';

export const Home = () => {
    const test = 'image/png'

    React.useEffect(() => {
        // console.log(mime.extension(test))
        // console.log(extension(test))
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}