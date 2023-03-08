import { COLORS } from '../../common'
import { IIconProps } from './index'

export const ChevronUpIcon = ({ color, height = '24px', width = '24px', cursor = 'inherit', onClick }: IIconProps) => {
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
                d={'M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499'}
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
                strokeMiterlimit={'10'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    )
}
