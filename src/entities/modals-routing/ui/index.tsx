import { useTypedDispatch, useTypedSelector } from '../../../shared/hooks'
import { Modal } from '../../../shared/ui'
import { closeModal } from '../model'
import { CreateBoard } from './content/create-board'

export const ModalsRouting = () => {
    /* START - Get store values. */
    const { contentType, isOpen } = useTypedSelector((state) => state.modal)

    const dispatch = useTypedDispatch()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - ModalsRouting content. */

    return (
        <Modal isOpen={isOpen} onClose={dispatch(closeModal)}>
            {contentType === 'createBoard' ? <CreateBoard /> : null}
        </Modal>
    )
}
