import{nanoid}from 'nanoid'

class Product{
constructor(id,{productName,category,price,quantity})
{
    this.id=id;
    this.productName=productName;
    this.category=category;
    this.price=price;
    this.quantity=quantity;
}
}

const productHolder={}

const resolvers={
    getProduct: ({id})=>{
        return  new Product(id,productHolder[id])
    },

    setProduct:({input})=>{
        let id=nanoid()
        productHolder[id] = input
        return new Product(id,input)

    }
}

export default resolvers;

