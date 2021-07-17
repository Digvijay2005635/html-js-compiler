import { Action } from "./actions"

export interface codeState {
    html: string,
    css: string,
    js: string,
    openEditors: string[],
    activeFile: string,
    theme: string
}

const initalState = {
    html: '<!-- No need include body or html tag, happy coding -->',
    css: '/* CSS code goes here */',
    js: '// Javascrip code',
    openEditors: [],
    activeFile: '',
    theme: 'light'
}



export const codeReducer = (state:codeState = initalState, action: Action) => {
    switch(action.type){
        case "UPDATE_HTML":
            return {...state, html: action.payload }
        
        case "UPDATE_CSS":
            return {...state, css: action.payload}

        case "UPDATE_JS":
            return {...state, js: action.payload}

        case "UPDATE_OPEN_FILES":
            return {...state, openEditors: [...state.openEditors, action.payload]}

        case "DELETE_OPEN_FILE":
            return {...state, openEditors: state.openEditors.filter(e=>e!==action.payload)}

        case "UPDATE_ACTIVE_FILE":
            return {...state, activeFile: action.payload}

        case "UPDATE_THEME":
            return {...state, theme: action.payload}
        default:
            return state
    }
}