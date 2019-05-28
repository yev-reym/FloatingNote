

export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            user
        }
    })
);

export const checkLogin = (email) => (
        $.ajax({
         method: 'GET',
         url: 'api/session/email_check',
         data: {
             email
         }
        })
);

export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {
            user
        }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
);