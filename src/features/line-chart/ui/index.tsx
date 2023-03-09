import { FC } from 'react'

import { ResponsiveLine } from '@nivo/line'

import { COLORS } from '../../../shared/common'
import { getAmountInRubles } from '../../../shared/common/util'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

interface ILineChartItem {
    id: string
    color: string
    data: Array<{ x: string | number | Date; y: string | number | Date }>
}

interface ILineChartProps {
    items: Array<ILineChartItem>
    bottomTickValues: number
}

export const LineChart: FC<ILineChartProps> = ({ items, bottomTickValues }) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - LineChart content. */

    const colors = items.map(({ color }) => color)

    return (
        <ResponsiveLine
            data={items}
            enableGridY={false}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                useUTC: false,
                precision: 'day',
            }}
            xFormat={'time:%Y-%m-%d'}
            yScale={{
                type: 'linear',
                stacked: false,
            }}
            yFormat={(value) => getAmountInRubles(Number(value))}
            axisLeft={{
                format: (value) => getAmountInRubles(Number(value), 0),
                tickSize: 0,
                tickPadding: 14,
                tickValues: 5,
            }}
            axisBottom={{
                format: (date: Date) => {
                    return date.toLocaleString('ru-RU', {
                        month: 'short',
                        day: 'numeric',
                    })
                },
                tickSize: 0,
                tickPadding: 14,
                tickValues: bottomTickValues,
            }}
            curve={'monotoneX'}
            colors={colors}
            pointSize={10}
            pointBorderColor={COLORS.white}
            pointBorderWidth={2}
            useMesh={true}
            tooltip={({ point }) => (
                <div className={style.tooltip}>
                    <Typography type={'caption'} color={'darkblue'}>
                        {point.data.yFormatted}
                    </Typography>
                </div>
            )}
            enableSlices={false}
            margin={{ top: 8, right: 20, bottom: 26, left: 60 }}
        />
    )
}
