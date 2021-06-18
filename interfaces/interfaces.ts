export enum OrderType {
	Buy, Sell
}
export interface Order {
	amount: number,
	from: string,
	price: number,
	orderType: String
}
export interface Shares {
	shares: number
}