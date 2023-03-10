import { COLORS } from '../../common'
import { IIconProps } from './index'

export const PillsIcon = ({ color, height = '24px', width = '24px', cursor = 'inherit', onClick }: IIconProps) => {
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
                    'M11 9.5C11 8.34835 10.5607 7.1967 9.68198 6.31802C7.92462 4.56066 5.07538 4.56066 3.31802 6.31802C2.43934 7.1967 2 8.34835 2 9.5M11 9.5C11 10.6517 10.5607 11.8033 9.68198 12.682C7.92462 14.4393 5.07538 14.4393 3.31802 12.682C2.43934 11.8033 2 10.6517 2 9.5M11 9.5H2'
                }
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
                strokeLinecap={'round'}
            />
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M14.7574 7.12132C15.9289 8.29289 17.8284 8.29289 19 7.12132C19.5858 6.53553 19.8787 5.76777 19.8787 5C19.8787 4.23223 19.5858 3.46447 19 2.87868C17.8284 1.70711 15.9289 1.70711 14.7574 2.87868C14.1716 3.46447 13.8787 4.23223 13.8787 5C13.8787 5.76777 14.1716 6.53553 14.7574 7.12132Z'
                }
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
                strokeLinecap={'round'}
            />
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M20.9052 17.381C22.3649 15.9213 22.3649 13.5546 20.9052 12.0948C19.4454 10.6351 17.0787 10.6351 15.619 12.0948L12.0948 15.619C10.6351 17.0787 10.6351 19.4454 12.0948 20.9052C13.5546 22.3649 15.9213 22.3649 17.381 20.9052L20.9052 17.381Z'
                }
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
            />
            <path
                d={'M14 14C14 14 14.2813 15.4596 15.911 17.0892C17.5407 18.7189 19 19 19 19'}
                stroke={color === 'inherit' ? 'currentColor' : COLORS[color]}
                strokeWidth={'1.5'}
            />
        </svg>
    )
}
