import { useMemo, useState } from 'react'

import { EmptyState } from '../../../entities/empty-state'
import { ILineChartItem, LineChart } from '../../../features/line-chart'
import { useGetTransactionsQuery } from '../../../features/transactions'
import { COLORS } from '../../../shared/common'
import { useBoolean } from '../../../shared/hooks'
import { Select, Skeleton, Typography } from '../../../shared/ui'
import { DEFAULT_PERIOD, PERIOD_FILTERS_CONFIG, PeriodFilter } from '../config'
import { getChartItems } from '../util'
import style from './index.module.scss'

export const WorkingCapital = () => {
    /* START - Get store values. */
    const { data: transactions, isLoading: isTransactionsLoading } = useGetTransactionsQuery()

    const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>(DEFAULT_PERIOD)
    const { value: isIncomeDataVisisble, setTrue: showIncomeData, setFalse: hideIncomeData } = useBoolean(true)
    const { value: isExpensesDataVisisble, setTrue: showExpensesData, setFalse: hideExpensesData } = useBoolean(true)
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - WorkingCapital content. */

    const periodFilters = useMemo(
        () => PERIOD_FILTERS_CONFIG.map((period) => ({ title: period.title, value: period })),
        [],
    )

    const incomeChartItems = useMemo(
        () => getChartItems(transactions?.income, 'income', COLORS.primary50),
        [transactions?.income],
    )
    const expensesChartItems = useMemo(
        () => getChartItems(transactions?.expenses, 'expenses', COLORS.secondary50),
        [transactions?.expenses],
    )

    const lineChartItems = useMemo((): Array<ILineChartItem> | null => {
        if (!incomeChartItems || !expensesChartItems) {
            return null
        }

        if (isIncomeDataVisisble && isExpensesDataVisisble) {
            return [{ ...incomeChartItems }, { ...expensesChartItems }]
        }

        if (isIncomeDataVisisble) {
            return [{ ...incomeChartItems }]
        }

        if (isExpensesDataVisisble) {
            return [{ ...expensesChartItems }]
        }

        return []
    }, [expensesChartItems, incomeChartItems, isExpensesDataVisisble, isIncomeDataVisisble])

    const bottomTickValues = useMemo(() => {
        if (!incomeChartItems || !expensesChartItems) {
            return 1
        }
        if (incomeChartItems.data.length > expensesChartItems.data.length) {
            return incomeChartItems.data.length - 1
        }

        return expensesChartItems.data.length - 1
    }, [expensesChartItems, incomeChartItems])

    if (isTransactionsLoading) {
        return <Skeleton height={'286px'} width={'100%'} borderRadius={'12px'} />
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Typography type={'subtitle1'} color={'darkblue'}>
                    Оборотный капитал
                </Typography>

                <div className={style.filters}>
                    <div className={style.category}>
                        <div
                            className={`${style.category_item} ${
                                !isIncomeDataVisisble ? style.category_item__inactive : ''
                            }`}
                            onClick={isIncomeDataVisisble ? hideIncomeData : showIncomeData}
                        >
                            <div className={style.category_color} style={{ backgroundColor: COLORS.secondary50 }} />

                            <Typography type={'caption'} color={'darkblue'}>
                                Доход
                            </Typography>
                        </div>

                        <div
                            className={`${style.category_item} ${
                                !isExpensesDataVisisble ? style.category_item__inactive : ''
                            }`}
                            onClick={isExpensesDataVisisble ? hideExpensesData : showExpensesData}
                        >
                            <div className={style.category_color} style={{ backgroundColor: COLORS.primary50 }} />

                            <Typography type={'caption'} color={'darkblue'}>
                                Расходы
                            </Typography>
                        </div>
                    </div>

                    <div className={style.period}>
                        <Select
                            isBlock
                            placeholder={'Test'}
                            items={periodFilters}
                            selectedItem={{ title: selectedPeriod.title, value: selectedPeriod }}
                            onChange={setSelectedPeriod}
                        />
                    </div>
                </div>
            </div>

            {lineChartItems ? (
                <div className={style.lineChart}>
                    {lineChartItems.length > 0 ? (
                        <LineChart items={lineChartItems} bottomTickValues={bottomTickValues} />
                    ) : (
                        <EmptyState title={'Ничего не найдено'} />
                    )}
                </div>
            ) : null}
        </div>
    )
}
