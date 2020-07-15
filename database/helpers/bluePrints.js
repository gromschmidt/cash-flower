exports.User = {
  "id": "",
  "name": "",
  "companyName": "",
  "adress": {
    "street": "",
    "nr": "",
    "city": "",
    "zip": ""
  },
  "phone": "",
  "email": "",
  "domain": "",
  "bankData": {
    "name": "",
    "iban": "",
    "bic": ""
  },
  "steuerId": "",
  "briefFuss": ""
}

exports.Customer = {
  "id": "",
  "slug": "",
  "name": "",
  "defaultPrice": 0,
  "adress": {
    "street": "",
    "nr": 0,
    "city": "",
    "zip": ""
  }
}

exports.Invoice = {
  "id": "",
  "customerId": "",
  "userId": "",
  "created": "",
  "title": "",
  "comment": "",
  "positions": [
    {
      "id": "",
      "title": "",
      "comment": "",
      "value": 0,
      "hours": 0
    }
  ]
    
}