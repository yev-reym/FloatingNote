



export const checkEmail = (email) => (
    $.ajax({
        method: 'GET',
        url: 'api/users/email_check',
        data: {
            email
        }
    })
);

export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            user
        }
    })
);
