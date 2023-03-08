import { FC } from 'react'

import classNames from 'classnames'

import { IIconProps } from '../../../shared/ui/icons'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

interface ICardProps {
    type: 'light' | 'dark'
    title: string
    icon: (props: IIconProps) => JSX.Element
}

export const Card: FC<ICardProps> = ({ type, title, icon }) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - Card content. */

    const cardClass = classNames({
        [style.card]: true,
        [style.card__light]: type === 'light',
        [style.card__dark]: type === 'dark',
    })

    const iconClass = classNames({
        [style.icon]: true,
        [style.icon__light]: type === 'light',
        [style.icon__dark]: type === 'dark',
    })

    const Icon = icon

    return (
        <div className={cardClass}>
            <div className={iconClass}>
                <Icon color={type === 'dark' ? 'primary50' : 'neutral90'} />
            </div>

            <div className={style.content}>
                <Typography type={'overline'} color={type === 'dark' ? 'darkGrayishBlue04' : 'grayishBlue'}>
                    {title}
                </Typography>

                <Typography type={'heading5'} color={type === 'dark' ? 'white' : 'darkblue'}>
                    5420.21 ₽
                </Typography>
            </div>
        </div>
    )
}
