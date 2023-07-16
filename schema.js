const {buidSchema} =require('graphql') 

const schema = buildSchema(`
type Product {
    id:ID
    productName:String
    category:String
    price:Int
    quantity:[QuantityInfo]
}

type QuantityInfo {
initialStock:Int
usedStock:Int
remainingStock:Int

}

type Query{
   getProduct(id:ID):Product 
}

input ProductInput{
    id:ID
    productName:String!
    category:String
    price:Int!
    quantity:[QuantityInfoInput]

}

input QuantityInfoInput{
    initialStock:Int!
    usedStock:Int
    remainingStock:Int
}

type Mutation{
    setProduct(input: ProductInput):Product
}



`)

export default schema;