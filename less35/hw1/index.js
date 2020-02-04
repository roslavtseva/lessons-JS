export function parseUser(data) {
    try {
        const result = JSON.parse(data);
        return result;
    } catch(error) {
        return null;
    }
};