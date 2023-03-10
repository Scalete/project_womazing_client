import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartItem } from '../components/Cart/CartItem';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { clearCart, deleteCartItem, resetStatus, useCartProducts } from '../redux/cart/selectors';
import { Status } from '../redux/globalIntefaces';
import { useAppDispatch } from '../redux/store';
import { calculateDiscount } from '../utils/helperFunctions';

export const Cart: React.FC = () => {

    const { cartProducts } = useSelector(useCartProducts);
    const { status } = useSelector(useCartProducts);
    const dispatch = useAppDispatch();

    const renderProducts = () => {
        return cartProducts.map((item, i) => <CartItem key={i} _cartId={i} _id={item.product._id as string} imgUrl={item.product.imgUrl} title={item.product.title} discount={item.product.discount} price={item.product.price} count={item.count} extraOptions={item.extraOptions} onDeleteItem={onDeleteItem}/>);
    }

    const calcTotalSum = () => {
        return cartProducts
        .map(item => item.product.discount ? calculateDiscount(item.product.price, item.product.discount) * item.count: item.product.price * item.count)
        .reduce((sum, item) => sum + item);
    }

    React.useEffect(() => {
        if (status === Status.SUCCES) {
            toast.success("Продукт успешно удален");
        } else if (status === Status.ERROR) {
            toast.warn("Продукт не удален");
        } else if (status === Status.ALL_CART_DELETE) {
            toast.success("Корзина успешно очищена");
        } else if (status === Status.ALL_CART_ERROR_DELETE) {
            toast.warn("Корзина не очищена");
        }

        if (status !== Status.LOADING) {
            dispatch(resetStatus());
        }
    }, [status, dispatch]);

    const onDeleteItem = (_cartId: number) => {
        dispatch(deleteCartItem(_cartId));
    }

    const onClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <TitleBreadcrumbs title='Корзина' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/cart', name: 'Корзина'}]}/>
            
            <section className="cart">
                <div className="container">
                    {
                        !cartProducts.length ? <EmptyCart/> : (
                            <>
                                <ul className="cart-header">
                                    <li>Товар</li>
                                    <li>Цена</li>
                                    <li>Количество</li>
                                    <li>Всего</li>
                                </ul>
                                {renderProducts()}
                                <div className="actions">
                                    <div className="action red" onClick={onClearCart}>Очистить корзину</div>
                                    <div>
                                        <span>Подытог: ${calcTotalSum()}</span>
                                        <div className="actions-wrapper">
                                            <div className="total"><span>Итого:</span><span>${calcTotalSum()}</span></div>
                                            <Link to={'/checkout'} className="action main">Оформить заказ</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </>
        
    );
};