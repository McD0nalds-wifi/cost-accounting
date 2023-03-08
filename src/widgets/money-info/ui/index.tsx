import { Card } from '../../../entities/card'
import { WalletAddBoldIcon, WalletBoldIcon, WalletChangeBoldIcon } from '../../../shared/ui/icons'
import style from './index.module.scss'

export const MoneyInfo = () => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - MoneyInfo content. */

    return (
        <div className={style.wrapper}>
            <Card type={'dark'} title={'Общий баланс'} icon={WalletBoldIcon} />
            <Card type={'light'} title={'Общие расходы'} icon={WalletChangeBoldIcon} />
            <Card type={'light'} title={'Всего сэкономлено'} icon={WalletAddBoldIcon} />
        </div>
    )
}
