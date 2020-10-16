import React from 'react';
import Navegador from '../components/Navegador/Navegador'
const Layout = React.FC = ({children, title}) => {
        return (
            <div>
                <Navegador title={title}/>
                {children}
            </div>
        )
}

export default Layout