import React from 'react';
import './banner.css';

interface IProps {
    words: string[];
    repeatTime?: number;
    wordTime?: number;
}

const Banner: React.FC<IProps> = ({ words, repeatTime = 3000, wordTime = 700 }) => {
    const [text, setText] = React.useState('');

    const typeWriter = React.useCallback(
        (text: string, i: number, fnCallback: () => void) => {
            if (i < text.length) {
                setText(text.substring(0, i + 1));

                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, wordTime);
            }
        },
        [wordTime]
    );

    const startTextAnimation = React.useCallback(
        (i: number, array: string[]) => {
            if (array[i] === undefined) {
                setTimeout(() => {
                    startTextAnimation(0, array);
                }, repeatTime);
                return;
            }

            if (i < array[i].length) {
                typeWriter(array[i], 0, () => {
                    startTextAnimation(i + 1, array);
                });
            }
        },
        [typeWriter, repeatTime]
    );

    React.useEffect(() => {
        startTextAnimation(0, words);
    }, [startTextAnimation, words]);

    return (
        <h2 className='banner-text'>
            {text}<span className='banner-cursor'/>
        </h2>
    );
}

export default Banner;
