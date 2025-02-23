const API_URL = "http://localhost:8080/login";

export const login = async (email, password) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email, password
        })
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return await response.json();
};