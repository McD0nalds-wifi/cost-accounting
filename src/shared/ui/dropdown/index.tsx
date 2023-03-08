import classNames from 'classnames'

import Typography from '../typography'
import style from './index.module.scss'

export interface ISelectItem<T> {
    title: string
    color?: string
    value: T
}

interface IDropdownProps<T> {
    isOpen: boolean
    selectedItems: Array<ISelectItem<T>>
    items: Array<ISelectItem<T>>
    numberOfVisibleItems?: number
    onItemClick: (value: T) => void
}

const DROPDOWN_ITEM_HEIGHT = 42
const DROPDOWN_VERTICAL_PADDING = 8
const DROPDOWN_GAP = 4

const Dropdown = <T,>({ isOpen, selectedItems, items, numberOfVisibleItems = 5, onItemClick }: IDropdownProps<T>) => {
    const dropdownClass = classNames({
        [style.dropdown]: true,
        [style.dropdown__open]: isOpen,
    })

    const isNothingFound = items.length === 0
    const itemsLength = items.length > numberOfVisibleItems ? numberOfVisibleItems : items.length
    const dropdownHeight =
        itemsLength * DROPDOWN_ITEM_HEIGHT + (itemsLength - 1) * DROPDOWN_GAP + DROPDOWN_VERTICAL_PADDING

    const handleItemClick = (value: T) => () => {
        onItemClick(value)
    }

    return (
        <div className={dropdownClass} style={{ height: isNothingFound ? 'fit-content' : isOpen ? dropdownHeight : 0 }}>
            {isNothingFound ? (
                <div className={style.nothingFound}>
                    {/* <InfoCircleIcon color={'neutral50'} height={'40px'} width={'40px'} /> */}

                    <Typography type={'body1'} color={'neutral50'}>
                        Ничего не найдено
                    </Typography>
                </div>
            ) : (
                items.map(({ title, color, value }) => {
                    const isSelected = selectedItems.some((selectedItem) => selectedItem.title === title)

                    return (
                        <div
                            className={`${style.item} ${isSelected ? style.item__active : ''}`}
                            key={JSON.stringify(value)}
                            onClick={handleItemClick(value)}
                        >
                            <div className={style.item_title}>
                                {color ? <div className={style.item_color} style={{ backgroundColor: color }} /> : null}

                                <Typography type={'caption'} fontWeight={isSelected ? '600' : undefined}>
                                    {title}
                                </Typography>
                            </div>

                            {/* {isActive && <TickCircleIcon color={'neutral90'} height={'18px'} width={'18px'} />} */}
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Dropdown
