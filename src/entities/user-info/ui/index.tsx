import { useRef } from 'react'

import { useBoolean, useClickOutside } from '../../../shared/hooks'
import Dropdown from '../../../shared/ui/dropdown'
import { ChevronDownIcon } from '../../../shared/ui/icons'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

const DROPDOWN_ITEMS = [
    { title: 'Профиль', value: 'profile' },
    { title: 'Выйти', value: 'exit' },
]

export const UserInfo = () => {
    /* START - Get store values. */
    const { value: isDropdownOpen, setTrue: openDropdown, setFalse: closeDropdown } = useBoolean(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    useClickOutside(containerRef, closeDropdown)
    /* END - Tracking side-effects. */

    /* START - UserInfo content. */

    return (
        <div className={style.conteiner} ref={containerRef}>
            <div className={style.wrapper}>
                <div className={style.avatar}>
                    <Typography type={'overline'} color={'darkblue'}>
                        МЗ
                    </Typography>
                </div>

                <div className={style.username} onClick={openDropdown}>
                    <Typography type={'overline'} color={'inherit'}>
                        Максим Зелинов
                    </Typography>

                    <ChevronDownIcon color={'inherit'} height={'14px'} width={'14px'} />
                </div>
            </div>

            <Dropdown
                isOpen={isDropdownOpen}
                selectedItems={[]}
                items={DROPDOWN_ITEMS}
                numberOfVisibleItems={3}
                onItemClick={() => null}
            />
        </div>
    )
}
