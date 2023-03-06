import { routes } from '../../../shared/common'
import { ActivityBoldIcon, HomeBoldIcon } from '../../../shared/ui/icons'

export const SIDEBAR_CONFIG = [
    {
        id: 'main',
        title: routes.main.pageName,
        route: routes.main.getRoute(),
        icon: HomeBoldIcon,
    },
    {
        id: 'transactions',
        title: routes.transactions.pageName,
        route: routes.transactions.getRoute(),
        icon: ActivityBoldIcon,
    },
]
