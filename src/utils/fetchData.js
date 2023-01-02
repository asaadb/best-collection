export const getProducts = () => (
    fetch('https://fakestoreapi.com/products')
        .then(res =>res.json())
        .then(data => data)
        .catch(err => console.log('ERROR OCCURED WHILE FETCHING PRODUCTS:', err))
)

export const getCategories = () => (
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log('ERROR OCCURED WHILE FETCHING CATEGORIES:', err))
)