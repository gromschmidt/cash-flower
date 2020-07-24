
/**
 * Input change Handler to update contents
 * @param {sting} value 
 * @param {*} key name of the Object Key
 * @param {*} parent parent element for subElements
 */

const changeConstructor = (change, obj) => {
  return (value, key, parent) => {
    switch (parent) {
      case 'name': 
        console.log(value);
        return change({...obj, name: value, slug: slugify(value)})

      case 'adress':
        return change({...obj, adress: {...obj.adress, [key]: value}})
    
      default:
        change({...obj, [key]: value})
        break;
    } 
  }
}


export default changeConstructor