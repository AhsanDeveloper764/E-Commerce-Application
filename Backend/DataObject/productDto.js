class productdto {
    constructor(user){
        this.productname = user.productname;
        this.price = user.price;
        this.discount = user.discount
        this.color = user.color
        this.quantity = user.quantity
        this.image = user.image
    }
}

module.exports = productdto