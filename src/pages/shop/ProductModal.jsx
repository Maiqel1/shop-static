import React, { useState, useEffect } from 'react';

function ProductModal({ isOpen, onClose, product }) {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (product.photos && product.photos.length > 0) {
            setSelectedImage(product.photos[0].url);
        }
    }, [product]);

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
                {selectedImage ? (
                    <img
                        src={`https://api.timbu.cloud/images/${selectedImage}`}
                        alt={product.name}
                        className="mainImage img-fluid"
                    />
                ) : (
                    <p>No image available</p>
                )}
                <div className="thumbnailContainer">
                    {product.photos && product.photos.length > 0 ? (
                        product.photos.map((photo, index) => (
                            <img
                                key={index}
                                src={`https://api.timbu.cloud/images/${photo.url}`}
                                alt={`${product.name} ${index}`}
                                className="thumbnail img-fluid"
                                onClick={() => handleImageClick(photo.url)}
                            />
                        ))
                    ) : (
                        <p>No additional images</p>
                    )}
                </div>
                <p>N{product.current_price[0].NGN[0]}</p>
                <p>{product.description === 'null' || '' || null ? 'There is no description for this product' : product.description}</p>
            </div>
        </div>
    );
}

export default ProductModal;
