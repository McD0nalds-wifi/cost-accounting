import { TransactionCategoryType } from '../../features/transactions'
import {
    AcademicCapIcon,
    AirplaneIcon,
    BillCheckIcon,
    BillIcon,
    BoxIcon,
    BusIcon,
    CarIcon,
    CardSendIcon,
    CardTransferIcon,
    CartIcon,
    CashOutIcon,
    DonutBittenIcon,
    DumbbellSmallIcon,
    GamepadIcon,
    HangerIcon,
    LightbulbBoltIcon,
    PillsIcon,
    ReceiptTextIcon,
    SmartphoneIcon,
    SofaIcon,
} from '../ui/icons'

export const getAmountInRubles = (amount: number, minimumFractionDigits = 2): string => {
    return `${Number(amount).toLocaleString('ru-RU', {
        minimumFractionDigits,
    })} ₽`
}

export const getCategoryDataByName = (category: TransactionCategoryType) => {
    switch (category) {
        case 'clothing_and_accessories':
            return {
                title: 'Одежда и аксессуары',
                icon: HangerIcon,
            }
        case 'restaurants_and_cafes':
            return {
                title: 'Рестораны и кафе',
                icon: DonutBittenIcon,
            }
        case 'sporting_goods':
            return {
                title: 'Спортивные товары',
                icon: DumbbellSmallIcon,
            }
        case 'supermarkets':
            return {
                title: 'Супермаркеты',
                icon: CartIcon,
            }
        case 'health_and_beauty':
            return {
                title: 'Здоровье и красота',
                icon: PillsIcon,
            }
        case 'everything_for_home':
            return {
                title: 'Все для дома',
                icon: SofaIcon,
            }
        case 'hcs':
            return {
                title: 'ЖКХ',
                icon: LightbulbBoltIcon,
            }
        case 'internet':
            return {
                title: 'Связь, интернет',
                icon: SmartphoneIcon,
            }
        case 'car':
            return {
                title: 'Автомобиль',
                icon: CarIcon,
            }
        case 'subscriptions':
            return {
                title: 'Подписки',
                icon: BillCheckIcon,
            }
        case 'transfers':
            return {
                title: 'Переводы',
                icon: CardTransferIcon,
            }
        case 'cash_withdrawal':
            return {
                title: 'Снятие наличных',
                icon: CashOutIcon,
            }
        case 'entertainment_and_hobbies':
            return {
                title: 'Развлечения и хобби',
                icon: GamepadIcon,
            }
        case 'logistics':
            return {
                title: 'Логистика',
                icon: BoxIcon,
            }
        case 'transport':
            return {
                title: 'Транспорт',
                icon: BusIcon,
            }
        case 'education':
            return {
                title: 'Образование',
                icon: AcademicCapIcon,
            }
        case 'journeys':
            return {
                title: 'Путешествия',
                icon: AirplaneIcon,
            }
        case 'taxes':
            return {
                title: 'Налоги, штрафы, взыскания',
                icon: BillIcon,
            }
        case 'salary':
            return {
                title: 'Зарплата',
                icon: CardSendIcon,
            }
        case 'other_expenses':
        default:
            return {
                title: 'Прочие расходы',
                icon: ReceiptTextIcon,
            }
    }
}
