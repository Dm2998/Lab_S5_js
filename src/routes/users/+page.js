/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    

    // URL for the dummyjson products API
    const user_URL = 'https://dummyjson.com/users'

    // Call fetch 
    const response = await fetch(user_URL);

    // if response code 200 (OK)
    if (response.ok) {

        //get json from response
        const json = await response.json();

        //return the products array
        return {
        users: json.users
        }
    }

// an error occured - return status code amd message
return  {
    status: response.status,
    error: 'Could not load data'
};
}