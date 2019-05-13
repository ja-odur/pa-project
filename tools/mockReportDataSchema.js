export const schema = {
  "type": "object",
  "properties": {
    "reports": {
      "type": "array",
      "minItems": 40,
      "maxItems": 45,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },

          "date": {
            "type": "string",
            "pattern": "2018-12-02T16:31:17.778Z|2018-11-30T16:31:17.778Z|2018-11-17T16:31:17.778Z|2018-11-15T16:31:17.778Z"

          },

          "client": {
            "type": "string",
            "pattern": "Arafat|Delly|Prebern|Xenom|Rapha"
          },

          "product": {
            "type": "string",
            "pattern": "Doxycycline 100mg capsules 20/2020|Gabapentin nourmed 300mg 100s 9/2019|Trixylix cough syrup 2020|0lanzapine 28s 3/19 10mg"
          },

          "importer": {
            "type": "string",
            "pattern": "Pine|AV|GV"
          },
          "importerCost": {
            "type": "integer",
            "minimum": 50000,
            "maximum": 200000,
            "faker": "name.importerCost"
          },
          "cost": {
            "type": "integer",
            "minimum": 50000,
            "maximum": 200000,
            "faker": "name.cost"
          },

          "paid": {
            "type": "integer",
            "minimum": 50000,
            "maximum": 200000,
            "faker": "name.paid"
          },
          "pending": {
            "type": "integer",
            "minimum": 50000,
            "maximum": 200000,
            "faker": "name.pending"
          },

          "profit": {
            "type": "integer",
            "minimum": 50000,
            "maximum": 200000,
            "faker": "name.profit"
          },

          "quantity": {
            "type": "integer",
            "minimum": 1,
            "maximum": 6,
            "faker": "name.quantity"
          }

        },
        required: [ 'id', 'date', 'client', 'product', 'importer', 'importerCost', 'cost', 'paid', 'pending', 'profit', 'quantity']
      }
    }
  },
  required: ['reports']
};
