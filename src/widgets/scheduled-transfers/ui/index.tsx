import { getAmountInRubles, getCategoryDataByName } from '../../../shared/common/util'
import { Button, Typography } from '../../../shared/ui'
import { ChevronRightIcon } from '../../../shared/ui/icons'
import style from './index.module.scss'

export const ScheduledTransfers = () => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - ScheduledTransfers content. */

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Typography type={'subtitle1'} color={'darkblue'}>
                    Запланированные операции
                </Typography>

                <Button type={'link'} size={'small'} endIcon={ChevronRightIcon} isNoWrap>
                    Смотреть все
                </Button>
            </div>

            <div className={style.transfers}>
                {Array.from({ length: 5 }).map((_, index) => {
                    const { icon: Icon } = getCategoryDataByName('transfers')

                    return (
                        <div className={style.transfer} key={index}>
                            <div className={style.transfer_avatar}>
                                <Icon color={'darkblue'} height={'18px'} width={'18px'} />
                            </div>

                            <div className={style.transfer_info}>
                                <Typography type={'overline'} color={'darkblue'}>
                                    Петр Иванов
                                </Typography>

                                <Typography type={'caption'} color={'darkGrayishBlue03'}>
                                    Дата
                                </Typography>
                            </div>

                            <div className={style.transfer_amount}>
                                <Typography type={'body1'} color={'darkblue'} fontWeight={'600'}>
                                    - {getAmountInRubles(435)}
                                </Typography>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
