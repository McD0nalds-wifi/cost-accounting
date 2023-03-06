import { Route, Routes } from 'react-router-dom'

import { routes } from '../shared/common'
import { Layout } from '../widgets/layout'
import Main from './main'

const Routing = () => {
    return (
        <Layout>
            <Routes>
                <Route path={routes.main.path} element={<Main />} />
            </Routes>
        </Layout>
    )
}

export default Routing
