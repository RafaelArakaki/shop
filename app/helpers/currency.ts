export const formatCurrency = (price: number | string) => {
  const format = Number(price).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',    
  });

  const priceFormated = format.split(",");
  if (priceFormated[1] === "00") {
    const priceFormated = format.split(",");
    return priceFormated[0]
  }
  return format;
}