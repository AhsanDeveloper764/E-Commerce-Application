class productDetails {
    constructor(productDetail){
        this._id = productDetail._id;
        this.productname = productDetail.productname;
        this.discount = productDetail.discount;
        this.color = productDetail.color;
        this.quantity = productDetail.quantity;
        this.image = productDetail.image;
    }
}
module.exports = productDetails;