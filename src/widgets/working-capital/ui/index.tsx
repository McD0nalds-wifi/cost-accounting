import { useMemo, useState } from 'react'

import { LineChart } from '../../../features/line-chart'
import { COLORS } from '../../../shared/common'
import { Select, Typography } from '../../../shared/ui'
import { DEFAULT_PERIOD, PERIOD_FILTERS_CONFIG, PeriodFilter } from '../config'
import style from './index.module.scss'

export const WorkingCapital = () => {
    /* START - Get store values. */
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>(DEFAULT_PERIOD)
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - WorkingCapital content. */

    const periodFilters = useMemo(
        () => PERIOD_FILTERS_CONFIG.map((period) => ({ title: period.title, value: period })),
        [],
    )

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Typography type={'subtitle1'} color={'darkblue'}>
                    Оборотный капитал
                </Typography>

                <div className={style.filters}>
                    <div className={style.category}>
                        <div className={style.category_item}>
                            <div className={style.category_color} style={{ backgroundColor: COLORS.secondary50 }} />

                            <Typography type={'caption'} color={'darkblue'}>
                                Доход
                            </Typography>
                        </div>

                        <div className={style.category_item}>
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

            <div className={style.lineChart}>
                <LineChart
                    items={[
                        {
                            id: 'fake corp. A',
                            color: COLORS.primary50,
                            data: [
                                { x: '2018-01-01', y: 7 },
                                { x: '2018-01-02', y: 5 },
                                { x: '2018-01-03', y: 11 },
                                { x: '2018-01-04', y: 9 },
                            ],
                        },
                        {
                            id: 'fake corp. B',
                            color: COLORS.secondary50,
                            data: [
                                { x: '2018-01-04', y: 14 },
                                { x: '2018-01-05', y: 14 },
                                { x: '2018-01-06', y: 15 },
                                { x: '2018-01-07', y: 11 },
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    )
}
