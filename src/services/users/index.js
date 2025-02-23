const API_URL = "http://localhost:8080/users";


export const getUsers = async (token) => {
    const response = await fetch(API_URL, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`} });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
};

export const getUser = async (token, id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`} });
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
};

export const createUser = async (token, user) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return await response.json();
};

export const updateUser = async (token, user) => {
    const response = await fetch(`${API_URL}/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
    return await response.json();
};

export const deleteUser = async (token, id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`},
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
    return await response.json();
};
