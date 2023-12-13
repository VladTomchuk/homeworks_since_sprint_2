const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): changeThemeIdType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
