type CenterType = { 
  children?: any
  }

const Center = ({ children }: CenterType) => {
  return (
    <div className={`grid place-items-center`}>
      { children }
    </div>
  )
}

export default Center