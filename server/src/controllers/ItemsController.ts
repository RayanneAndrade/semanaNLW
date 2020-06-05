import { Request, Response } from 'express'
import knex from '../database/connection'

const ipv4Address = 'http://192.168.100.10'

class ItemsControllers{
    async index (request: Request, response: Response){
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `${ipv4Address}:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsControllers