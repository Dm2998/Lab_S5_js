/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    

    // URL for the dummyjson products API
    const products_URL = 'https://dummyjson.com/products'

    // Call fetch 
    const response = await fetch(products_URL);

    // if response code 200 (OK)
    if (response.ok) {

        //get json from response
        const json = await response.json();

        //return the products array
        return {
        products: json.products
        }
    }

// an error occured - return status code amd message
return  {
    status: response.status,
    error: 'Could not load data'
};
}

