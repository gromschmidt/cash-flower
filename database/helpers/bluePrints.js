
/**
 * User Object
 */
exports.User = class User {
  constructor() {
    this.id = ""
    this.name = ""
    this.companyName = ""
    this.adress = {
      'street' : "",
      'nr' : "",
      'city' : "",
      'zip' : "",
    }
    this.phone = ""
    this.email = ""
    this.domain = ""
    this.bankData = {
      "name" : "",
      "iban" : "",
      "bic" : "",
    }
    this.steuerId = ""
    this.briefFuss = ""
  }
  
}

/**
 * Customer Object
 */
exports.Customer = class Customer {
  constructor() {
    this.id = ""
    this.slug = ""
    this.name = ""
    this.defaultPrice = 0
    this.adress = {
      'street': "",
      'nr': 0,
      'city': "",
      'zip': "",
    }
  }
}

/**
 * Invoice Object
 */
exports.Invoice = class Invoice {
  constructor () {
    this.id = ""
    this.customerId = ""
    this.userId = ""
    this.created = ""
    this.title = ""
    this.comment = ""
    this.positions = []
  }
}

exports.InvoicePosition = class InvoicePosition {
  constructor() {
    this.id = ""
    this.title = ""
    this.comment = ""
    this.value = 0
    this.hours = 0
  }

}