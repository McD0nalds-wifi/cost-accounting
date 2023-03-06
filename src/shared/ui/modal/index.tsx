import { ReactNode, memo } from 'react'

import classNames from 'classnames'
import { noop } from 'lodash'

import { CloseCircleIcon } from '../icons'
import style from './index.module.scss'

interface IModalProps {
    isOpen: boolean
    isCloseIconVisible?: boolean
    isOverlayBlocked?: boolean
    children?: ReactNode
    onClose?: () => void
}

const Modal = memo(
    ({ isOpen, isCloseIconVisible, isOverlayBlocked = false, children, onClose = noop }: IModalProps) => {
        const modalClass = classNames({
            [style.modal]: true,
            [style['modal__open']]: isOpen,
        })

        const contentClass = classNames({
            [style.content]: true,
            [style['content__active']]: isOpen,
        })

        return (
            <div className={modalClass} onClick={() => (!isOverlayBlocked ? onClose : noop)}>
                <div className={contentClass} onClick={(e) => e.stopPropagation()}>
                    {isCloseIconVisible && (
                        <div className={style.closeIcon}>
                            <CloseCircleIcon
                                color={'neutral90'}
                                cursor={'pointer'}
                                height={'24px'}
                                width={'24px'}
                                onClick={onClose}
                            />
                        </div>
                    )}
                    <div className={style.body}>{children}</div>
                </div>
            </div>
        )
    },
)

Modal.displayName = 'Modal'

export default Modal
