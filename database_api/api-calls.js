import * as conn from './connection_info';


/*
    Send the client's current location to the database
*/
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
        console.log("A problem occured sending location data: " + error);
    }
    return "Up to date";
}


/*
    Get user profile information for a specific user
*/
export async function getUserInfo(uid)
{
    const url = conn.host + '/api/get-user';
    var user;
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
                    "uid": uid
                })
            }
        );
        const info = await response.json();
        console.log("API call to get user: uid: " + info.uid);
        user = JSON.parse(info);
    }
    catch(error)
    {
        //console.error(error.message);
        console.log("A problem occured getting user info: " + error);
    }
    return user;
}