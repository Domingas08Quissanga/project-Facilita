export function PriceFormat(value) {
    return new Intl.NumberFormat('pt-AO',  {
        currency: 'AOA',
        style: 'currency'
    }).format(value)
}