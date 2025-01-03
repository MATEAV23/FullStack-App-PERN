import { safeParse } from 'valibot'
import { DraftProductSchema } from '../types'

type ProducData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data : ProducData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success) {
            
        } else {
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}