import Home from './Pages/Home';
import Follow from './Pages/Follow';
import UploadFile from './Pages/UploadFile';
import HeaderOnly from './components/Layouts/HeaderOnly';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/upload',
        component: UploadFile,
        layout: HeaderOnly,
    },
];
export default routes;
