/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    

    // URL for the dummyjson products API
    const nasa_URL = 'https://api.nasa.gov/planetary/apod?api_key=RCBBYFJ2lqRoG6jVU4uCBiBa2abgRuqyA4MgJPv2'

    // Call fetch 
    const response = await fetch(nasa_URL);

    // if response code 200 (OK)
    if (response.ok) {

        //get json from response
        const json = await response.json();

        //return the products array
        return {
        nasa: json
        }
    }

// an error occured - return status code amd message
return  {
    status: response.status,
    error: 'Could not load data'
};
}