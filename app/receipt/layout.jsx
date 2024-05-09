import React from 'react';
import classes from './layout.module.css'
import Header from '@/components/main-factor/Header';
import PopularCategory from '@/components/main-factor/PopularCategory';

const ReceiptLayout = ({ children }) => {
    return (
        <div className={`${classes.layout}`}>
            <header className={`${classes.box1}`}>
                <Header />
            </header>
            <aside className={`${classes.box2}`}>
                <PopularCategory />
            </aside>
            <main className={`${classes.box3}`}>{children}</main>
        </div>
    );
};

export default ReceiptLayout;