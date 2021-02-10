import React from 'react';
import AddForm from './AddForm';

const Header = () => {
    return (
        <div>
            <h1 className="text-center">Todo</h1>
            <AddForm/>
        </div>
    );
};

export default Header;