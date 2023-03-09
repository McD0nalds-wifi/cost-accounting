import { IIconProps } from '../../../shared/ui/icons'
import Typography from '../../../shared/ui/typography'
import style from './index.module.scss'

interface INameCellProps {
    title: string
    subtitle: string
    icon: (props: IIconProps) => JSX.Element
}

export const NameCell: React.FC<INameCellProps> = ({ title, subtitle, icon }) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - NameCell content. */

    const Icon = icon

    return (
        <div className={style.nameCell}>
            <div className={style.nameCell_icon} style={{ backgroundColor: '#E4F1FF' }}>
                <Icon color={'darkblue'} height={'20px'} width={'20px'} />
            </div>

            <div className={style.nameCell_title}>
                <Typography color={'darkblue'} type={'body2'} fontWeight={'600'}>
                    {title}
                </Typography>

                <Typography color={'darkGrayishBlue03'} type={'caption'}>
                    {subtitle}
                </Typography>
            </div>
        </div>
    )
}
