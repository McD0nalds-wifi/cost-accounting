import { Card } from '../../../entities/card'
import { useGetUserDataQuery } from '../../../features/user'
import { Skeleton } from '../../../shared/ui'
import { WalletAddBoldIcon, WalletBoldIcon, WalletChangeBoldIcon } from '../../../shared/ui/icons'
import style from './index.module.scss'

const SkeletonList = () => (
    <>
        {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} height={'100px'} width={'100%'} maxWidth={'220px'} borderRadius={'12px'} />
        ))}
    </>
)

export const MoneyInfo = () => {
    /* START - Get store values. */
    const { data: userData, isLoading: isUserDataLoading } = useGetUserDataQuery()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - MoneyInfo content. */

    return (
        <div className={style.wrapper}>
            {isUserDataLoading ? (
                <SkeletonList />
            ) : (
                userData && (
                    <>
                        <Card type={'dark'} title={'Баланс'} value={userData.balance} icon={WalletBoldIcon} />
                        <Card type={'light'} title={'Расходы'} value={userData.spending} icon={WalletChangeBoldIcon} />
                        <Card type={'light'} title={'Сэкономлено'} value={userData.saved} icon={WalletAddBoldIcon} />
                    </>
                )
            )}
        </div>
    )
}
