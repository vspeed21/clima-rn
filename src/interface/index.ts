export interface Cripto {
  CoinInfo: {
    id: string,
    Name: string,
    FullName: string,
  }
}

export interface Resultado {
  PRICE?: string
  HIGHDAY?: string,
  LOWDAY?: string,
  CHANGEPCT24HOUR?: string
  LASTUPDATE?: string
}