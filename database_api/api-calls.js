import * as conn from './connection_info';

export async function sendLocationToDatabase(lat, long)
{
    const url = conn.host + '/api/location';

    try 
    {
        const response = await fetch(url, 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "latitude": lat,
                    "longitude": long,
                    "uid": conn.uid
                })
            }
        );
        const info = await response.json();
        console.log("API call to store loc: lat: " + lat + "; long: " + long);
    }
    catch(error)
    {
        //console.error(error.message);
        console.log("A problem occured: " + error);
    }
    return "Up to date";
}