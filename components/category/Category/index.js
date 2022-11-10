import React from 'react'

const index = ({ name, image }) => {
  return (
    <a href="#" className="group relative block bg-black">
      <img
        alt={name}
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-6">
        <p className="text-lg font-bold text-white">{name}</p>
      </div>
    </a>
  )
}

export default index
