export const CircleNumber = props => {
  const borderWithClass = props.borderWidth ? 'border' : `border-${props.borderWidth}`
  const radiantClass = props.radiant ? 'inner-shadow-gold' : ''

  return(
    <div
      className={`w-10 h-10 relative text-xl font-black text-black flex justify-center items-center bg-${props.appearance} ${borderWithClass} border-${props.border} rounded-full inner-shadow box-${props.position} z-10 ${radiantClass}`}
      {...props}
    >
      {props.children}
    </div>
  )
}