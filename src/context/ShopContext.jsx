import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    products.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [apiData, setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        getAPIData(currentPage);
    }, [currentPage]);

    // const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const getAPIData = async (page) => {
        try {
            const response = await fetch('https://api.timbu.cloud/products?organization_id=c6da4c35e5464beaa11fcae0cd2b61c8&reverse_sort=false&page=1&size=12&Appid=NKN3IHWVBNDGDAI&Apikey=deae56c41b694246bc2a54316c93bc6620240712132338008877');
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setApiData(data.items);
                setTotalPages(Math.ceil(data.total / productsPerPage));
                setCartItems(getDefaultCart(data.items));
            } else {
                console.error("No items found in the API response.");
            }

        } catch (error) {
            console.error("Error fetching API data:", error);
        }
    };


    const clearCart = () => {
        setCartItems(getDefaultCart(apiData));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = apiData.find((product) => product.id === item);
                totalAmount += cartItems[item] * itemInfo.current_price[0].NGN[0];
            }
        }
        return totalAmount;
    }

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: (prev[itemID] || 0) + 1 }));
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
    }

    const removeCartItem = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        removeCartItem,
        apiData,
        currentPage,
        totalPages,
        setCurrentPage,
        clearCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
