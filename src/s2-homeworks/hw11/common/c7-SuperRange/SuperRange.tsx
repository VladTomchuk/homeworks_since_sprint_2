import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '50%',
                color: '#00CC22',
                borderRadius: '10px',
                '& .MuiSlider-thumb': {
                    border: '2px solid #00CC22',
                    borderRadius: '50',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#00CC22',
                    boxShadow: 'inset 0 0 0 5px white',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: 'black',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
