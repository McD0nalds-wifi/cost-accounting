import { Link, useLocation } from 'react-router-dom'

import Typography from '../../../shared/ui/typography'
import { SIDEBAR_CONFIG } from '../config'
import style from './index.module.scss'

export const Sidebar = () => {
    /* START - Get store values. */
    const { pathname } = useLocation()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - Sidebar content. */

    return (
        <div className={style.wrapper}>
            <Typography type={'heading3'} color={'neutral90'}>
                Logo
            </Typography>

            <div className={style.menu}>
                {SIDEBAR_CONFIG.map(({ id, title, route, icon }) => {
                    const Icon = icon
                    const isActive = route === pathname

                    return (
                        <Link
                            to={route}
                            key={id}
                            className={`${style.menu_item} ${isActive ? style.menu_item__active : ''}`}
                        >
                            <Icon color={'inherit'} />

                            <Typography type={'subtitle1'} color={'inherit'}>
                                {title}
                            </Typography>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
