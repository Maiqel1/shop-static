
import React, { useState } from 'react'

function ProductModal({ isOpen, onClose, product }) {
    const [selectedImage, setSelectedImage] = useState(product.photos[0].url);

    if (!isOpen) {
        return null;
    }

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };


    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <button className="closeBtn" onClick={onClose}>x</button>
                <h4>{product.name}</h4>
                <img src={`https://api.timbu.cloud/images/${selectedImage}`} alt={product.name} className="mainImage img-fluid" />
                <div className="thumbnailContainer">
                    {product.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={`https://api.timbu.cloud/images/${photo.url}`}
                            alt={`${product.name} ${index}`}
                            className="thumbnail img-fluid"
                            onClick={() => handleImageClick(photo.url)}
                        />
                    ))}
                </div>
                <p>N{product.current_price[0].NGN[0]}</p>
                <p>{product.description === 'null' ? 'There is no description for this product' : product.description}</p>
            </div>
        </div>
    );
}

export default ProductModal;