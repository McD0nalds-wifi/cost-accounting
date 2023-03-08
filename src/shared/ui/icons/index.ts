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
export { ChevronDownIcon } from './ChevronDownIcon'
export { ChevronLeftIcon } from './ChevronLeftIcon'
export { ChevronRightIcon } from './ChevronRightIcon'
export { ChevronUpIcon } from './ChevronUpIcon'
export { CloseCircleIcon } from './CloseCircleIcon'
export { HomeBoldIcon } from './HomeBoldIcon'
export { LoaderIcon } from './LoaderIcon'
export { WalletAddBoldIcon } from './WalletAddBoldIcon'
export { WalletBoldIcon } from './WalletBoldIcon'
export { WalletChangeBoldIcon } from './WalletChangeBoldIcon'
