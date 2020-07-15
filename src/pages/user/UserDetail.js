
import React from 'react';
import { useParams } from 'react-router-dom'
import { Pane, majorScale, Heading, Text, Paragraph } from 'evergreen-ui'



const USERDATA = {
  "id": "u1",
  "name": "Patrick Bässler",
  "companyName": "Web Design",
  "adress": {
    "street": "Musterstraße",
    "nr": "1",
    "city": "Stuttgart",
    "zip": "07072"
  },
  "phone": "01590 / 81 32 143",
  "email": "baesslerpa@gmail.com",
  "domain": "patrick-baessler.de",
  "bankData": {
    "name": "Sparkasse Pforzheim Calw",
    "iban": "DE00 600 21234 6346345",
    "bic": "123456788"
  },
  "steuerId": "62 417 385 890",
  "briefFuss": "Es wird gemäß §19 Abs. 1 Umsatzsteuergesetz keine Umsatzsteuer erhoben. Der Gesamtbetrag ist ab Erhalt dieser Rechnung zahlbar innerhalb von 14 Tagen ohne Abzug. Wenn nicht anders angegeben entspricht das Leistungsdatum dem Rechnungsdatum."
}

const UserDetail = () => {

  // The User ID from Url
  let { userID } = useParams()

  /**
   * DB User functions
   */
  const db = {
    /**
     * Get user by id
     * @param id User id
     */
    get(id) {
      console.log('get'); 
    },
    /**
     * Update User by id
     * @param id User id
     */
    update(id) {
      console.log('update'); 
    }
  }

  return ( 
    <div>
        <h1>UserDetail {userID}</h1>
        <div onClick={db.get}>Klick</div>
    </div> 
  );
}
 
export default UserDetail;