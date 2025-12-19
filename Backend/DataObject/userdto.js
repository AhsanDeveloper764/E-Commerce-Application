class userdto {
    constructor(user){
        this._id = user._id
        this.name = user.name
        this.lastName = user.lastname
        this.email = user.email
        this.companyName = user.companyName
        this.addressLine1 = user.addressLine1
        this.addressLine2 = user.addressLine2
        this.city = user.city
        this.state = user.state
        this.country = user.country
        this.code = user.code
        this.phoneNumber = user.phoneNumber  
    }
}

module.exports = userdto;