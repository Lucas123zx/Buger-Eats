class registerElemnents {
  inputName = () => {return 'input[name="name"]'}
  inputCpf = () => {return 'input[name="cpf"]'}
  inputEmail = () => {return 'input[name="email"]'}
  inputWpp = () => {return 'input[name="whatsapp"]'}
  inputCep = () => {return 'input[name="postalcode"]'}
  inputNumberHome = () => {return 'input[name="address-number"]'}
  inputComplemnt = () => {return 'input[name=address-detail"]'}
  buttonSearchCep = () => {return 'input[type="button"]'}
  listMethodDelivery = () => {return 'ul[class="delivery-method"'}
  inputCnh = () => {return 'input[type="file"]'}
  buttonRegister = () => {return 'button[type="submit"]'}
  modalSucess = () => {return 'div[class="swal2-popup swal2-modal swal2-icon-success swal2-show"]'}
  buttonClose = () => {return 'button[type="button"]'}
}

module.exports = new registerElemnents()