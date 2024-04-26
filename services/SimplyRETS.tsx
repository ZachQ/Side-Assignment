const getPropertyListings = async () => {
    const origin = 'https://api.simplyrets.com'
    const path = `/properties`
    const url = `${origin}${path}`
    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets';
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
                'Content-Type': 'application/json'
            }});
        const data = await response.json();
        return data;
    } catch (e) {
        // TODO: Handle error
        return {}
    }
}

export { getPropertyListings }