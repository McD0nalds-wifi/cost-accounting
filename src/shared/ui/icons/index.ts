import { ColorsType } from '../../common'

export type IconCursorType = 'default' | 'pointer' | 'inherit'

export interface IIconProps {
    color: ColorsType | 'inherit'
    height?: string
    width?: string
    cursor?: IconCursorType
    onClick?: () => void
}

export { AcademicCapIcon } from './AcademicCapIcon'
export { ActivityBoldIcon } from './ActivityBoldIcon'
export { AirplaneIcon } from './AirplaneIcon'
export { BillCheckIcon } from './BillCheckIcon'
export { BillIcon } from './BillIcon'
export { BoxIcon } from './BoxIcon'
export { BusIcon } from './BusIcon'
export { CardSendIcon } from './CardSendIcon'
export { CardTransferIcon } from './CardTransferIcon'
export { CarIcon } from './CarIcon'
export { CartIcon } from './CartIcon'
export { CashOutIcon } from './CashOutIcon'
export { ChevronDownIcon } from './ChevronDownIcon'
export { ChevronLeftIcon } from './ChevronLeftIcon'
export { ChevronRightIcon } from './ChevronRightIcon'
export { ChevronUpIcon } from './ChevronUpIcon'
export { CloseCircleIcon } from './CloseCircleIcon'
export { DonutBittenIcon } from './DonutBittenIcon'
export { DumbbellSmallIcon } from './DumbbellSmallIcon'
export { GamepadIcon } from './GamepadIcon'
export { GasStationIcon } from './GasStationIcon'
export { HangerIcon } from './HangerIcon'
export { HomeBoldIcon } from './HomeBoldIcon'
export { LightbulbBoltIcon } from './LightbulbBoltIcon'
export { LoaderIcon } from './LoaderIcon'
export { PillsIcon } from './PillsIcon'
export { ReceiptTextIcon } from './ReceiptTextIcon'
export { SmartphoneIcon } from './SmartphoneIcon'
export { SofaIcon } from './SofaIcon'
export { WalletAddBoldIcon } from './WalletAddBoldIcon'
export { WalletBoldIcon } from './WalletBoldIcon'
export { WalletChangeBoldIcon } from './WalletChangeBoldIcon'
