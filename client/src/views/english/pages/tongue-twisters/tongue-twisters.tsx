import React from 'react';
import { TONGUE_TWISTERS } from '../../../../common/constants/english.constants';
import './tongue-twisters.css'

export const TongueTwisters: React.FC = () => {

    function renderTwister(text: string, index: number) {
        return (
            <p key={index} className='tongue-twisters-twist'>{text}</p>
        )
    }

    return (
        <div className='tongue-twisters-wrapper'>
            {TONGUE_TWISTERS.map(renderTwister)}
        </div>
    )
}