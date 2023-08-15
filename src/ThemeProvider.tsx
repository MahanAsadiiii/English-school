// import { useEffect, useState,ReactNode } from "react"
// import {T_ThemeColorKey, E_Theme, T_Theme, ThemeDarkColors, ThemeLightColors} from "./static/index"

// interface Layout {
//     children: ReactNode;
// }

// const ThemeProvider: React.FC<Layout> = ({ children }) => {

//     const [theme, setTheme] = useState<T_Theme>(Initials.theme)

//     const updateTheme = () => {
//         const html = document.documentElement
//         if(theme === "light"){
//             const keys: T_ThemeColorKey[] = Object.keys(ThemeLightColors) as T_ThemeColorKey[]
//             return keys.forEach(_ => html.style.setProperty(_, ThemeLightColors[_]))
//         }
//         const keys: T_ThemeColorKey[] = Object.keys(ThemeDarkColors) as T_ThemeColorKey[]
//         keys.forEach(_ => html.style.setProperty(_,ThemeDarkColors[_]))
//     }
//     const toggleTheme =() =>{
//         const newTheme: T_Theme = theme === "light" ? "dark" : "light"
//         setTheme(newTheme)
//     }
//     const getColor = (color: E_Theme) => (theme === "light" ? ThemeLightColors[color] : ThemeDarkColors[color])

//     useEffect(() => {
//         updateTheme()
//     },[theme])


// }

// export {ThemeProvider}