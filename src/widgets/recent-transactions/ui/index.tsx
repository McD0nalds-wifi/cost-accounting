import { format } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

import { NameCell } from '../../../entities/table-elements'
import { useGetTransactionsQuery } from '../../../features/transactions'
import { getAmountInRubles, getTitleByCategoryName } from '../../../shared/common/util'
import { Button, Table, Typography } from '../../../shared/ui'
import { ChevronRightIcon, GasStationIcon } from '../../../shared/ui/icons'
import style from './index.module.scss'

const tableColumns = [
    { id: 'name', title: 'Название', maxWidth: 240 },
    { id: 'type', title: 'Тип' },
    { id: 'amount', title: 'Сумма' },
    { id: 'date', title: 'Дата' },
]

export const RecentTransactions = () => {
    /* START - Get store values. */
    const { data: transactions } = useGetTransactionsQuery()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - RecentTransactions content. */

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Typography type={'subtitle1'} color={'darkblue'}>
                    Недавние транзакции
                </Typography>

                <Button type={'link'} size={'small'} endIcon={ChevronRightIcon}>
                    Смотреть все
                </Button>
            </div>

            <div className={style.table}>
                {transactions && (
                    <Table
                        columns={tableColumns}
                        dataSource={transactions.expenses
                            .slice(0, 3)
                            .map(({ amount, business, category, date, name }) => ({
                                name: <NameCell title={name} subtitle={business} icon={GasStationIcon} />,
                                type: (
                                    <Typography color={'darkGrayishBlue04'} type={'body2'}>
                                        {getTitleByCategoryName(category)}
                                    </Typography>
                                ),
                                amount: (
                                    <Typography color={'darkblue'} type={'body2'} fontWeight={'600'}>
                                        {getAmountInRubles(amount)}
                                    </Typography>
                                ),
                                date: (
                                    <Typography color={'darkGrayishBlue04'} type={'body2'}>
                                        {format(date, 'dd MMM yyyy', {
                                            locale: ruLocale,
                                        })}
                                    </Typography>
                                ),
                            }))}
                    />
                )}
            </div>
        </div>
    )
}
