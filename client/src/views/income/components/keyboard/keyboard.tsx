import React from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { ENTER_EXPENSE_MESSAGE } from '../../../../common/constants/income.constants';
import './keyboard.css'

export enum EKeyboard {
    Backspace = "backspase",
    Dot = ".",
}

interface IKeyboard {
    id: number,
    title: string | JSX.Element,
    value: string | EKeyboard,
}

interface IProps {
    setAmount: (state: any) => void;
    amount: string
}

const keyboard = [
    { id: 1, title: '1', value: '1' },
    { id: 2, title: '2', value: '2' },
    { id: 3, title: '3', value: '3' },
    { id: 5, title: '5', value: '4' },
    { id: 4, title: '4', value: '5' },
    { id: 6, title: '6', value: '6' },
    { id: 7, title: '7', value: '7' },
    { id: 8, title: '8', value: '8' },
    { id: 9, title: '9', value: '9' },
    { id: 10, title: '.', value: EKeyboard.Dot },
    { id: 11, title: '0', value: '0' },
    { id: 12, title: <Icon component={BackspaceIcon} />, value: EKeyboard.Backspace },
]

export function Keyboard({amount, setAmount}: IProps) {

    function handleKeyboardClick(value: string | EKeyboard) {
        if (value === EKeyboard.Backspace && amount.length > 0) {
            return setAmount(amount.substring(0, amount.length - 1))
        }

        if (value === EKeyboard.Dot) {
            if (amount.length === 0) {
                return setAmount("0" + EKeyboard.Dot)
            }

            if (!amount.indexOf(".")) {
                return setAmount((state: EKeyboard) => state + EKeyboard.Dot)
            }
            if (amount.indexOf(".")) {
                const length = amount.split('').filter(el => el === ".").length 
                if(length >= 1) {
                    return
                }
                return setAmount((state: EKeyboard) => state + EKeyboard.Dot)
            }

            return setAmount((state: EKeyboard) => state + EKeyboard.Dot)
        }

        if (amount.length === 1 && amount === "0") {
            if (value === EKeyboard.Dot) {
                return setAmount((state: EKeyboard) => state + EKeyboard.Dot)
            }
            return setAmount(value)
        }

        if (value !== EKeyboard.Backspace) {
            return setAmount((state: string) => state + value)
        }
    }

    function renderKeyboard({ id, title, value }: IKeyboard) {
        return (
            <IconButton
                key={id}
                className="keyboard-list-item"
                sx={{ border: "1px solid var(--border)", fontSize: 'var(--main-title-size)' }}
                onClick={() => handleKeyboardClick(value)}
            >
                {title}
            </IconButton>

        )
    }

    return (
        <div className='keyboard-wrapper'>
            <div className='keyboard-pannel-container'>
                {amount && (
                    <p className='keyboard-pannel-amount'>{amount}</p>
                )}
                {!amount && (
                    <p className='keyboard-pannel-text'>{ENTER_EXPENSE_MESSAGE}</p>
                )}
            </div>
            <div className='keyboard-list-container'>
                {keyboard.map(renderKeyboard)}
            </div>
        </div >
    )
}