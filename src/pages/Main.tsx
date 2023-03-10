import React from 'react';
import { fetchNewCollectionsProducts } from '../redux/product/asyncActions';
import { Functions } from '../components/Functions';
import { Promo } from '../components/Promo';
import { Team } from '../components/Team';
import { TitleProducts } from '../components/TitleProducts';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
    return (
        <>
            <Promo/>
            <TitleProducts title='Новая коллекция' asyncFunc={fetchNewCollectionsProducts} button={<Link to="/shop" className="action second">Открыть магазин</Link>}/>
            <Functions/>
            <Team/>
        </>
    );
};