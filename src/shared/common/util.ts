export const getAmountInRubles = (amount: number, minimumFractionDigits = 2): string => {
    return `${Number(amount).toLocaleString('ru-RU', {
        minimumFractionDigits,
    })} ₽`
}

// Одежда и аксессуары - clothing_and_accessories
// Рестораны и кафе - restaurants_and_cafes
// Спортивные товары - sporting_goods
// Супермаркеты - supermarkets
// Здоровье и красота - health_and_beauty
// Все для дома - everything_for_home
// ЖКХ - hcs
// Связь, интернет - internet
// Автомобиль - car
// Подписки - subscriptions
// Переводы - transfers
// Снятие наличных - cash_withdrawal
// Развлечения и хобби - entertainment_and_hobbies
// Логистика - logistics
// Транспорт - transport
// Образование - education
// Путешествия - journeys
// Налоги, штрафы, взыскания - taxes
// Зарплата - salary
// Прочие расходы - other_expenses
