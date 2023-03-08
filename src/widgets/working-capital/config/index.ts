export const PERIOD_FILTERS_CONFIG = [
    {
        id: 'today',
        title: 'Сегодня',
    },
    {
        id: 'week',
        title: 'Последние 7 дней',
    },
    {
        id: 'month',
        title: 'Последний месяц',
    },
    {
        id: 'halfYear',
        title: 'Последние полгода',
    },
    {
        id: 'year',
        title: 'Последний год',
    },
]

export const DEFAULT_PERIOD = PERIOD_FILTERS_CONFIG[1]

export type PeriodFilter = typeof DEFAULT_PERIOD
