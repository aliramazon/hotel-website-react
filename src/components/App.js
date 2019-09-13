import React from 'react';
import Header from './Header';
import HotelView from './HotelView';
import Sidebar from './Sidebar';

const App = () => {
    return (
        <div className="container">
            <Header />
            <div class="content">
                <Sidebar />
                <HotelView />
            </div>
        </div>
    );
};
export default App;
