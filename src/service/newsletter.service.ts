import axios, {AxiosResponse} from 'axios'
import { INewsLetter } from '../Models/newsLetter.interface';

export default class NewsLetterService {

    public static async SendContact(news: INewsLetter): Promise<AxiosResponse> {
        return await axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', news)
    }
}