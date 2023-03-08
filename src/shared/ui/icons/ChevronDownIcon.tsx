import { COLORS } from '../../common'
import { IIconProps } from './index'

export const ChevronDownIcon = ({
    color,
    height = '24px',
    width = '24px',
    cursor = 'inherit',
    onClick,
}: IIconProps) => {
    return (
        <svg
            style={{ cursor }}
            width={width}
            height={height}
            viewBox={'0 0 24 24'}
            fill={'none'}
            xmlns={'http://www.w3.org/2000/svg'}
            onClick={onClick}
        >
            <path
                d={'M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995'}
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
                strokeMiterlimit={'10'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    )
}
