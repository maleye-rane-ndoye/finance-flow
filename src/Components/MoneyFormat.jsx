// ici on creer le format de l'unité de la valeur monaitaire que nous allons utilisé
//en premier on dit que c'est un int
//la valeur c'est euro
//et la valeur de base c'est 0 euro
export const MoneyFormat = Intl.NumberFormat(undefined,{

    currency: "eur",
    style: "currency",
    minimumFractionDigits: 0,

})