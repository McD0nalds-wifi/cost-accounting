import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { UserInfo } from '../../../entities/user-info'
import { routes } from '../../../shared/common'
import { Typography } from '../../../shared/ui'
import style from './index.module.scss'

export const Header = () => {
    /* START - Get store values. */
    const [pageName, setPageName] = useState<string>('')

    const { pathname } = useLocation()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    useEffect(() => {
        Object.values(routes).forEach(({ path, pageName }) => {
            if (pathname === path) {
                setPageName(pageName)
            }
        })
    }, [pathname])
    /* END - Tracking side-effects. */

    /* START - Header content. */

    return (
        <div className={style.wrapper}>
            <Typography type={'heading3'} component={'h1'} color={'neutral90'}>
                {pageName}
            </Typography>

            <UserInfo />
        </div>
    )
}
