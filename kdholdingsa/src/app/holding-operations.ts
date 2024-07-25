import { MarketOperationTypeEnum } from "./enums/market-operation-type.enum";
import { MarketOperationModel } from "./models/market-operation.model";

// SAMPLE OPERATIONS - ONLY FOR TESTING PURPOSES
export const holdingOperations: MarketOperationModel[] = [
    new MarketOperationModel(MarketOperationTypeEnum.BUY, "PKN", 580, 63.7, new Date("2024-07-23")),
    new MarketOperationModel(MarketOperationTypeEnum.BUY, "PKO", 160, 32, new Date("2024-07-25")),
    new MarketOperationModel(MarketOperationTypeEnum.SELL, "PKN", 400, 67.9, new Date("2024-07-26")),
];
