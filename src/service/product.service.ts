import axios, {AxiosResponse} from 'axios'
import { IProduct } from '../Models/product.interface';
export default class ProductSevice {

    public static async GetProducts(): Promise<AxiosResponse<IProduct[]>> {
        return await axios.get<IProduct[]>('https://corebiz-test.herokuapp.com/api/v1/products')
    }
}