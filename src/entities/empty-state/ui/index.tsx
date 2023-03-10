import { FC } from 'react'

import noResultsImage from '../../../assets/no_results.svg'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

interface IEmptyStateProps {
    title: string
}

export const EmptyState: FC<IEmptyStateProps> = ({ title }) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - EmptyState content. */

    return (
        <div className={style.wrapper}>
            <img src={noResultsImage} height={'120px'} />

            <Typography type={'heading6'} color={'darkblue'}>
                {title}
            </Typography>
        </div>
    )
}
