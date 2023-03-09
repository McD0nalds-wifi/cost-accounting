import { routes } from '../../shared/common'
import { Select, Typography } from '../../shared/ui'
import { MoneyInfo } from '../../widgets/money-info'
import { RecentTransactions } from '../../widgets/recent-transactions'
import { WorkingCapital } from '../../widgets/working-capital'

const Main = () => {
    return (
        <div>
            <Typography type={'heading3'} component={'h1'} color={'neutral90'}>
                {routes.main.pageName}
            </Typography>

            <div style={{ marginTop: '40px', display: 'flex', gap: '40px' }}>
                <div style={{ width: '100%' }}>
                    <MoneyInfo />

                    <WorkingCapital />

                    <RecentTransactions />
                </div>
                <div style={{ width: '360px', flexShrink: 0 }}></div>
            </div>
        </div>
    )
}

export default Main
