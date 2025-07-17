import React from 'react'
import clsx from 'clsx'

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={clsx('bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105')}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="mt-2 text-text">{description}</p>
      </div>
    </div>
  )
}

export default ProductCard