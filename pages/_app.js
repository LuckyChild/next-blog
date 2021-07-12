// 顶层组件

import '../styles/global.css'
import '../styles/prism.css'
export default function App({ Component, pageProps }){
    return <Component {...pageProps}/>
}