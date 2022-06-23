export enum PlantState {
    PLANTED = 'planted',
    FLOWERY = 'flowery',
    HARVESTED = 'harvested'
}

export enum PlantType {
    FRUIT = 'fruit',
    VEGETABLE = 'vegetable'
}

export interface Plant {
    id : string,
    name : string,
    type : PlantType,
    description : string,
    state : PlantState,
    updated: Date
}