import { ColorsType } from '../../common'

export type IconCursorType = 'default' | 'pointer' | 'inherit'

export interface IIconProps {
    color: ColorsType | 'inherit'
    height?: string
    width?: string
    cursor?: IconCursorType
    onClick?: () => void
}

export { ActivityBoldIcon } from './ActivityBoldIcon'
export { CloseCircleIcon } from './CloseCircleIcon'
export { HomeBoldIcon } from './HomeBoldIcon'
export { LoaderIcon } from './LoaderIcon'
