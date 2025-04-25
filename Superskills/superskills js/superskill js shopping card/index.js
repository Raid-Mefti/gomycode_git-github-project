class Product{
    id;
    name;
    price;

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getId(){
        return this.id;
    }
    setId(newId){
        this.id = newId;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }
    getPrice(){
        return this.price;
    }
    setPrice(newPrice){
        this.price = newPrice;
    }

    totalPrice(quantity){
        return this.price*quantity
    }

}

class CartItem{
    properties;
    quantity;

    constructor(properties, quantity){
        this.properties = properties;
        this.quantity = quantity;
    }

    getProperties(){
        return this.properties;
    }
    setProperties(newProperty){
        this.properties = newProperty;
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(newQuantity){
        this.quantity = newQuantity;
    }
}

class ShoppingCartItem{
    instances;
    constructor(instances){
        this.instances = instances;
    }

    getInstances(){
        return this.instances;
    }
    setInstances(newInstance){
        this.instances = newInstance;
    }

    getTotalItems(){
        return this.instances.length
    }
    addItem(item){
        this.instances.push(item)
    }
    removeItem(item){
        this.instances.splice(item.indexOf(2),1)
    }

}
