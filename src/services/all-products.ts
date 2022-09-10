import { IProducts } from "@/global/Interface";

async function getAllProducts<T>(resourceUrl: string, limitResult:number, options: object): Promise<T[]> {
    try {
        const response = await fetch(`${resourceUrl}?limit=${limitResult}`, options);
        const result = response.status === 200 && await response.json();
        return result;
    }
    finally {
        console.info("finish fetch all products")
    }
}

const options = {method: 'GET'};
export const allProducts = await getAllProducts<IProducts>("https://fakestoreapi.com/products", 10, options);
