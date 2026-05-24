// Improved error messages
function handleError(error) {
    switch (error.code) {
        case 'NOT_FOUND':
            console.error('Error: Resource not found. Please check the URL and try again.');
            break;
        case 'UNAUTHORIZED':
            console.error('Error: Unauthorized access. Please log in and try again.');
            break;
        default:
            console.error('Error: An unexpected error occurred. Please try again later.');
    }
}