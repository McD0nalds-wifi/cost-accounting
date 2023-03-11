import { MoneyInfo } from '../../widgets/money-info'
import { RecentTransactions } from '../../widgets/recent-transactions'
import { ScheduledTransfers } from '../../widgets/scheduled-transfers'
import { WorkingCapital } from '../../widgets/working-capital'
import style from './index.module.scss'

const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftSide}>
                <MoneyInfo />

                <WorkingCapital />

                <RecentTransactions />
            </div>

            <div className={style.rightSide}>
                <ScheduledTransfers />
            </div>
        </div>
    )
}

export default Main
