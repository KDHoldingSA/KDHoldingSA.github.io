import { MarketOperationTypeEnum } from "../enums/market-operation-type.enum";

export class MarketOperationModel {
    readonly operationType: MarketOperationTypeEnum; // np. BUY
    readonly stockSymbol: string; // np. PKN
    readonly sharesCount: number; // np. 580 (szt.)
    readonly price: number; // np. 63,70 (PLN)
    readonly operationDate: Date; // when the operation took place

    constructor(operationType: MarketOperationTypeEnum, stockSymbol: string, sharesCount: number, price: number, operationDate: Date) {
        this.operationType = operationType;
        this.stockSymbol = stockSymbol;
        this.sharesCount = sharesCount;
        this.price = price;
        this.operationDate = operationDate;
    }
}
