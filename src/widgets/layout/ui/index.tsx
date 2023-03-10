import { FC, ReactNode } from 'react'

import { Sidebar } from '../../../entities/sidebar'
import { Header } from '../../header'
import style from './index.module.scss'

interface ILayoutProps {
    children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - Layout content. */

    return (
        <div className={style.wrapper}>
            <Sidebar />

            <div className={style.content}>
                <Header />

                {children}
            </div>
        </div>
    )
}
