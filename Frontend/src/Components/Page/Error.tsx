import errorImage from '../../assets/404.png'
const Error = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-full">
        <img src={errorImage} alt="Error" className="w-full h-201 object-cover"/>
      </div>
    </div>
  )
}

export default Error
