type AddressListType = { 
  children?: any
  }

const AddressList = ({ children }: AddressListType) => {
  return (
    <div className={``}>
      AddressList
      { children }
      
    </div>
  )
}

export default AddressList