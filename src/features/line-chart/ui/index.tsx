import { FC } from 'react'

import { ResponsiveLine } from '@nivo/line'
import { Link, useLocation } from 'react-router-dom'

import { COLORS } from '../../../shared/common'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

interface ILineChartItem {
    id: string
    color: string
    data: Array<{ x: string | number | Date; y: string | number | Date }>
}

interface ILineChartProps {
    items: Array<ILineChartItem>
}

const data = [
    {
        id: 'income',
        color: '#29A073',
        data: [
            { x: '2023-01-01', y: 600 },
            { x: '2023-01-02', y: 200 },
            { x: '2023-01-05', y: 1200 },
            { x: '2023-01-07', y: 700 },
            { x: '2023-01-09', y: 800 },
        ],
    },
    {
        id: 'expenses',
        color: '#c8ee44',
        data: [
            { x: '2023-01-01', y: 600 },
            { x: '2023-01-02', y: 200 },
            { x: '2023-01-05', y: 1200 },
            { x: '2023-01-07', y: 700 },
            { x: '2023-01-09', y: 800 },
        ],
    },
]

export const LineChart: FC<ILineChartProps> = ({ items }) => {
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
                // max: 'auto',
                // min: 'auto',
            }}
            xFormat={'time:%Y-%m-%d'}
            yScale={{
                type: 'linear',
                stacked: false,
            }}
            yFormat={(value) =>
                `${Number(value).toLocaleString('ru-RU', {
                    minimumFractionDigits: 2,
                })} ₽`
            }
            axisLeft={{
                format: (value) => `${Number(value).toLocaleString('ru-RU')} ₽`,
                tickSize: 0,
                tickPadding: 14,
            }}
            axisBottom={{
                format: (date: Date) => {
                    return date.toLocaleString('ru-RU', {
                        month: 'short',
                        day: 'numeric',
                    })
                },
                tickValues: 7,
                legendOffset: -12,
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
