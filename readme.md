## Follow the instructions to use the application

#### 1st Step

clone the git repository and run `npm install`

#### 2nd Step

To start the server locally, run `npm start`
and you are ready to go.

# introduction to all routes

### I build the authentication routes for 2 types of users.

1. admin
2. user

## Here Start all routes,

** Main api-[https://authentication-user.vercel.app/](https://authentication-user.vercel.app/) **

1. create/register user- https://authentication-user.vercel.app/api/user/sign_up
2. create/register admin- https://authentication-user.vercel.app/api/admin/sign-up
3. login user- https://authentication-user.vercel.app/api/auth/login
4. getAllUsersOnly- https://authentication-user.vercel.app/api/user/users (authenticate route only user and admin can browse. need authorization header)
5. getAllAdminOnly- https://authentication-user.vercel.app/api/admin/admins (authenticate route admin can browse. need authorization header)
6. getSingleAdmin- https://authentication-user.vercel.app/api/admin/65b1e14da0fea2fb27dc175d (admin only)
7. getSingleUser- https://authentication-user.vercel.app/api/user/65b1e71ce6d20f679dba1442 (admin,user only)
8. UpdateAUser= https://authentication-user.vercel.app/api/user/65b1e71ce6d20f679dba1442 (user only)
9. updateAAdmin = https://authentication-user.vercel.app/api/admin/65b1e14da0fea2fb27dc175d (admin only)
10.   deleteAAdmin = https://authentication-user.vercel.app/api/admin/65b1e14da0fea2fb27dc175d (admin only)
11.   deleteAUser = https://authentication-user.vercel.app/api/user/65b1e14da0fea2fb27dc175d (admin,user only)
12.   changePassword = https://authentication-user.vercel.app/api/auth/change-password (takes

```{
    "old_password": "aA@12346",
    "new_password": "aA@12345"
}
```

) 13. getAllUserAndAdmin = https://authentication-user.vercel.app/api/user/all-user

data response structure:

```
{
    "success": true,
    "message": "All user retrieved successfully",
    "result": [
        {
            "name": {
                "first_name": "Jone",
                "last_name": "Methew"
            },
            "_id": "65b23eae420bf501c5c79d59",
            "username": "jonemethew",
            "email": "jonemethew@gmail.com",
            "password": "$2b$10$WvlSbNO6qOyJpHa5Wu46w.5jy0PwMyEHoMdf1M0RCd5R7evwdpkku",
            "role": "user",
            "isDeleted": false,
            "createdAt": "2024-01-25T10:57:50.736Z",
            "updatedAt": "2024-01-25T10:57:50.736Z",
            "__v": 0
        }
    ]
}
```
