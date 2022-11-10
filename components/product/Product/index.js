const Product = ({ name, description, price, images, summary }) => {
  return (
    <a href="#" className="block">
      <img
        alt={name}
        src={images[0]}
        className="h-[300px] w-full object-cover sm:h-[300px]"
      />
      <div className="mt-2 text-slate-900">
        <p className="uppercase">{name}</p>
        <p className="text-slate-500">{description}</p>
        <p className="text-2xl my-2">{price}</p>
      </div>
    </a>
  )
}

export default Product
