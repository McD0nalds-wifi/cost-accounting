import { TransactionCategoryType } from '../../features/transactions'

export const getAmountInRubles = (amount: number, minimumFractionDigits = 2): string => {
    return `${Number(amount).toLocaleString('ru-RU', {
        minimumFractionDigits,
    })} ₽`
}

export const getTitleByCategoryName = (category: TransactionCategoryType): string => {
    switch (category) {
        case 'clothing_and_accessories':
            return 'Одежда и аксессуары'
        case 'restaurants_and_cafes':
            return 'Рестораны и кафе'
        case 'sporting_goods':
            return 'Спортивные товары'
        case 'supermarkets':
            return 'Супермаркеты'
        case 'health_and_beauty':
            return 'Здоровье и красота'
        case 'everything_for_home':
            return 'Все для дома'
        case 'hcs':
            return 'ЖКХ'
        case 'internet':
            return 'Связь, интернет'
        case 'car':
            return 'Автомобиль'
        case 'subscriptions':
            return 'Подписки'
        case 'transfers':
            return 'Переводы'
        case 'cash_withdrawal':
            return 'Снятие наличных'
        case 'entertainment_and_hobbies':
            return 'Развлечения и хобби'
        case 'logistics':
            return 'Логистика'
        case 'transport':
            return 'Транспорт'
        case 'education':
            return 'Образование'
        case 'journeys':
            return 'Путешествия'
        case 'taxes':
            return 'Налоги, штрафы, взыскания'
        case 'salary':
            return 'Зарплата'
        case 'other_expenses':
        default:
            return 'Прочие расходы'
    }
}
