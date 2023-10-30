import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    if (name.trim() !== '') {
        addUserCallback(name.trim())
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }

    //setError(false)
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: any) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        setError(null)
    }// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить

    if (e.key === 'Enter') {
        addUser()
        e.currentTarget.blur()
    }

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<null | string>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

            setName(e.currentTarget.value)
            setError(null)
        // need to fix any
         // need to fix

        //error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {

        pureOnEnter(e, addUser)
        //

    }
    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : undefined;


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
