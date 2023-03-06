import { COLORS } from '../../common'
import { IIconProps } from './index'

export const LoaderIcon = ({ color, height = '24px', width = '21px', cursor = 'inherit', onClick }: IIconProps) => {
    return (
        <>
            <svg
                style={{ cursor }}
                width={width}
                height={height}
                viewBox={'0 0 100 100'}
                fill={'none'}
                preserveAspectRatio={'xMidYMid'}
                onClick={onClick}
            >
                <circle
                    cx={'50'}
                    cy={'50'}
                    fill={'none'}
                    stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                    strokeWidth={'10'}
                    r={'35'}
                    strokeDasharray={'164.93361431346415 56.97787143782138'}
                ></circle>
            </svg>
        </>
    )
}
