



export const infoCheck = (info) => (
    $.ajax({
        method: 'GET',
        url: 'api/users/info_check',
        data: {
            info
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
