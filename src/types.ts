// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
// Country List Types
export const COUNTRY_LIST_REQ = 'COUNTRY_LIST_REQ'
export const COUNTRY_LIST_OK = 'COUNTRY_LIST_OK'
export const COUNTRY_LIST_X = 'COUNTRY_LIST_X'
//Basket Action Types
export const ADD_TO_BASKET_OK = 'ADD_TO_BASKET_OK'
export const ADD_TO_BASKET_X = 'ADD_TO_BASKET_X'
export const ADD_TO_BASKET_REQ = 'ADD_TO_BASKET_REQ'
//Delete From Basket Action
export const DELETE_FROM_BASKET_OK = 'DELETE_FROM_BASKET_OK'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Languages
export type Languages = {
  name: string
  iso639_1: string
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}
// A Country
export type Countries = {
  alpha2Code?: string
  flag: string
  name: string
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region: string
  loading: boolean
  nativeName: string
}
// Countries List OK
export type CountriesListOkAction = {
  type: typeof COUNTRY_LIST_OK
  payload: {
    countries: Countries[]
  }
}

export type AddToBasket = {
  type: typeof ADD_TO_BASKET_OK
  payload: {
    country: Countries
  }
}
export type DeleteFromBasket = {
  type: typeof DELETE_FROM_BASKET_OK
  payload: {
    country: Countries
  }
}
export type CountryActions =
  | CountriesListOkAction
  | AddToBasket
  | DeleteFromBasket

// Country State
export type CountryState = {
  myCountries: Countries[]
  myBasket: Countries[]
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  country: CountryState
}
// Types for hooks and table elements

export type FlagType = {
  imgUrl: string
}

export type SearchType = {
  keyword: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export type MainTableType = {
  countries: Country[]
  handleClickSort: (orderBy: string) => void
  asc: boolean
  orderBy: string
}
export type TableRowType = {
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region?: string
  addCountryToBasket: any
}

export type Country = {
  alpha2Code?: string
  flag: string
  name: string
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region: string
  loading: boolean
  nativeName: string
}

export type TableHeaderType = {
  handleClickSort: (orderBy: string) => void
  asc: boolean
  orderBy: string
}

export type TableCellType = { name: string } & TableHeaderType

export type CardType = {
  flag: string
  name: string
  aCountry: Countries
}
