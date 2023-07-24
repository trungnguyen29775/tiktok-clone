import SideBar from './SideBar';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                {children}
            </div>
        </div>
    );
}
export default DefaultLayout;
