import { NameCell } from '../../../entities/table-elements'
import { getAmountInRubles } from '../../../shared/common/util'
import { Button, Table, Typography } from '../../../shared/ui'
import { ChevronRightIcon, GasStationIcon } from '../../../shared/ui/icons'
import style from './index.module.scss'

export const RecentTransactions = () => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - RecentTransactions content. */

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Typography type={'subtitle1'} color={'darkblue'}>
                    Недавние транзакции
                </Typography>

                <Button type={'link'} size={'small'} endIcon={ChevronRightIcon}>
                    Смотреть все
                </Button>
            </div>

            <div style={{ marginTop: '30px' }}>
                <Table
                    columns={[
                        { id: 'name', title: 'Название', maxWidth: 240 },
                        { id: 'type', title: 'Тип' },
                        { id: 'amount', title: 'Сумма' },
                        { id: 'date', title: 'Дата' },
                    ]}
                    dataSource={[
                        {
                            name: <NameCell title={'Оплата подписки'} subtitle={'Apple. Inc'} icon={GasStationIcon} />,
                            type: (
                                <Typography color={'darkGrayishBlue04'} type={'body2'} fontWeight={'600'}>
                                    Заправка
                                </Typography>
                            ),
                            amount: (
                                <Typography color={'darkblue'} type={'body2'} fontWeight={'600'}>
                                    {getAmountInRubles(420)}
                                </Typography>
                            ),
                            date: (
                                <Typography color={'darkblue'} type={'body2'} fontWeight={'600'}>
                                    {Number(420.84).toLocaleString('ru-RU', {
                                        minimumFractionDigits: 2,
                                    })}{' '}
                                    ₽
                                </Typography>
                            ),
                        },
                        { name: 'Покупка колбасы', type: 'Продукты' },
                        { name: 'Заказ цветов', type: 'Прочее' },
                    ]}
                />
            </div>
        </div>
    )
}
