'use client'
import Select from 'react-select'

interface Props {
    option: () => void
    

}

export const Selects = ({ option, props }: Props) => {

    return (
        <Select
            options={option}
            {...props}
        />
    )
}

export default Selects