import { COLORS } from '../../common'
import { IIconProps } from './index'

export const ChevronLeftIcon = ({
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
                d={'M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008'}
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
                strokeMiterlimit={'10'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    )
}
