



export const infoCheck = (info) => {
   return $.ajax({
        method: 'GET',
        url: 'api/users/info_check',
        data: {
            info
        }
    });
};

export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            user
        }
    })
);
