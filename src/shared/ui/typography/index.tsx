import { ReactNode } from 'react'

import { COLORS, ColorsType } from '../../common'
import style from './index.module.scss'

type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'a'
type TypographyType =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
type TypographyAlignType = 'left' | 'center' | 'right'

interface ITypographyProps {
    type: TypographyType
    styles?: React.CSSProperties | undefined
    align?: TypographyAlignType
    component?: TypographyComponentType
    color?: ColorsType | 'inherit' | 'transparent'
    cursor?: 'default' | 'pointer' | 'inherit'
    fontWeight?: string
    isUppercase?: boolean
    children: ReactNode
    onClick?: () => void
}

const Typography = ({
    type,
    styles,
    align = 'left',
    component = 'div',
    color = 'neutral100',
    cursor = 'inherit',
    fontWeight,
    isUppercase,
    children,
    onClick,
}: ITypographyProps) => {
    const Tag = component

    return (
        <Tag
            className={style[type]}
            style={{
                textAlign: align,
                color: color === 'inherit' || color === 'transparent' ? color : COLORS[color],
                cursor: cursor,
                fontWeight,
                textTransform: isUppercase ? 'uppercase' : 'none',
                ...styles,
            }}
            onClick={onClick}
        >
            {children}
        </Tag>
    )
}

export default Typography
