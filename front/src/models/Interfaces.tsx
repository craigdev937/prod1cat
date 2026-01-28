export interface IData {
    name: string,
    description: string,
    image: string,
    price: string,
    currency: string,
    quantity: number,
    active: boolean,
    created_at?: string,
    updated_at?: string,
    category: {
        id: number,
        name: string
    }
};

export interface IProd extends IData {
    id: string
};

export interface IProduct extends IProd {
    success: boolean,
    count: number,
    data: IProd[]
};




