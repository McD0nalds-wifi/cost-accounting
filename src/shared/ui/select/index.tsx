import { useRef } from 'react'

import classNames from 'classnames'
import { noop } from 'lodash'

import { useBoolean, useClickOutside } from '../../hooks'
import Dropdown from '../dropdown'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import style from './index.module.scss'

export interface ISelectItem<T> {
    title: string
    value: T
}

export interface IInputSelectProps<T> {
    placeholder: string
    selectedItem?: ISelectItem<T>
    items: Array<ISelectItem<T>>
    numberOfVisibleItems?: number
    isBlock?: boolean
    onChange?: (item: T) => void
}

const Select = <T,>({
    placeholder,
    selectedItem,
    items,
    numberOfVisibleItems = 5,
    isBlock,
    onChange = noop,
}: IInputSelectProps<T>) => {
    const { value: isDropdownOpen, setTrue: openDropdown, setFalse: closeDropdown } = useBoolean(false)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const isPlaceholderVisible = Boolean(!selectedItem?.title)

    const inputClass = classNames({
        [style.input]: true,
        [style.input__placeholder]: isPlaceholderVisible,
    })

    useClickOutside(containerRef, closeDropdown)

    const handleDropdownItemClick = (item: ISelectItem<T>) => {
        onChange(item.value)
        closeDropdown()
    }

    return (
        <div className={style.wrapper} style={{ width: isBlock ? '100%' : 'fit-content' }} ref={containerRef}>
            <div className={style.inputWrapper} onClick={openDropdown}>
                <input
                    className={inputClass}
                    style={{ width: isBlock ? '100%' : 'fit-content' }}
                    type={'button'}
                    value={isPlaceholderVisible ? placeholder : selectedItem?.title}
                />

                <div className={style.icon}>
                    {isDropdownOpen ? (
                        <ChevronUpIcon color={'darkblue'} cursor={'pointer'} height={'14px'} width={'14px'} />
                    ) : (
                        <ChevronDownIcon color={'darkblue'} cursor={'pointer'} height={'14px'} width={'14px'} />
                    )}
                </div>
            </div>

            <Dropdown
                isOpen={isDropdownOpen}
                selectedItems={selectedItem ? [{ title: selectedItem.title, value: selectedItem }] : []}
                items={items.map((item) => ({ title: item.title, value: item }))}
                numberOfVisibleItems={numberOfVisibleItems}
                onItemClick={handleDropdownItemClick}
            />
        </div>
    )
}

export default Select
