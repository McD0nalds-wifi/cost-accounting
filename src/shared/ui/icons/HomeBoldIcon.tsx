import { COLORS } from '../../common'
import { IIconProps } from './index'

export const HomeBoldIcon = ({ color, height = '24px', width = '24px', cursor = 'inherit', onClick }: IIconProps) => {
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
                d={
                    // eslint-disable-next-line max-len
                    'M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM12.7502 18.0016C12.7502 18.4116 12.4102 18.7516 12.0002 18.7516C11.5902 18.7516 11.2502 18.4116 11.2502 18.0016V15.0016C11.2502 14.5916 11.5902 14.2516 12.0002 14.2516C12.4102 14.2516 12.7502 14.5916 12.7502 15.0016V18.0016Z'
                }
                fill={color === 'inherit' ? 'currentColor' : COLORS[color]}
            />
        </svg>
    )
}
