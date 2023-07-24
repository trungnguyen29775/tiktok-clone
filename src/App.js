import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Fragment } from 'react';
import HeaderOnly from './components/Layouts/HeaderOnly';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;
                        let Layout = DefaultLayout;
                        if (item.layout === null) Layout = Fragment;
                        else if (item.layout === HeaderOnly) Layout = item.layout;
                        return (
                            <Route
                                path={item.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
