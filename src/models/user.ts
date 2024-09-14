type User = {
    id: number
    name: string
    email: string
    password: string
}

export type UserCreateInputType = {
    name: string
    email: string
    password: string
}

export type UserLoginInputType = {
    email: string
    password: string
}

export type UserType = Omit<User, 'password'>
export type Users = UserType[]
