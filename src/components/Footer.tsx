import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <Logo/>
                    <div className="footer-copyright">
                        <p>© Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <p>Публичная оферта</p>
                    </div>
                </div>
                <Menu/>
                <div className="footer-contacts">
                    <a className='hover-underline-animation' href="tel:+380999051727">+38 (099) 905-17-27</a>
                    <a className='hover-underline-animation' href="mailto:hello@womazing.com">hello@womazing.com</a>
                    <div className="footer-socials">
                        <a href="#insta"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_278)" fill="#000"><path d="M15.61.5H6.39A6.398 6.398 0 0 0 0 6.89v9.22a6.398 6.398 0 0 0 6.39 6.39h9.22A6.398 6.398 0 0 0 22 16.11V6.89A6.398 6.398 0 0 0 15.61.5Zm4.671 15.61a4.677 4.677 0 0 1-4.672 4.671H6.391a4.677 4.677 0 0 1-4.672-4.672V6.891A4.677 4.677 0 0 1 6.39 2.219h9.218a4.677 4.677 0 0 1 4.672 4.672v9.218Z"/><path d="M11 5.57c-3.27 0-5.93 2.66-5.93 5.93 0 3.27 2.66 5.93 5.93 5.93 3.27 0 5.93-2.66 5.93-5.93 0-3.27-2.66-5.93-5.93-5.93Zm0 10.14a4.216 4.216 0 0 1-4.21-4.21A4.216 4.216 0 0 1 11 7.29a4.216 4.216 0 0 1 4.21 4.21A4.216 4.216 0 0 1 11 15.71ZM17.016 6.344a.86.86 0 1 0 0-1.72.86.86 0 0 0 0 1.72Z"/></g><defs><clipPath id="clip0_4_278"><path fill="#fff" d="M0 .5h22v22H0z"/></clipPath></defs></svg></a>
                        <a href="#facebook"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_303)"><path d="M18.54 0H2.46A2.464 2.464 0 0 0 0 2.46v16.08A2.464 2.464 0 0 0 2.46 21h16.08A2.464 2.464 0 0 0 21 18.54V2.46A2.464 2.464 0 0 0 18.54 0Zm.82 18.54c0 .451-.369.82-.82.82H13.7V13.37h2.625l.306-2.543H13.7V8.08c0-.701.53-1.23 1.23-1.23h1.846V4.47c-.485-.068-1.422-.163-1.845-.163-.957 0-1.916.403-2.631 1.107-.737.725-1.143 1.674-1.143 2.673v2.741H8.49v2.543h2.666v5.988H2.461a.821.821 0 0 1-.82-.82V2.461c0-.452.368-.82.82-.82h16.078c.452 0 .82.368.82.82v16.078Z" fill="#000"/></g><defs><clipPath id="clip0_4_303"><path fill="#fff" d="M0 0h21v21H0z"/></clipPath></defs></svg></a>
                        <a href="#twitter"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20.271 5.165-.011-.044a4.867 4.867 0 0 0 2.111-2.65 9.815 9.815 0 0 1-3.055 1.168c-.86-.918-2.01-1.483-3.369-1.483-2.604 0-4.761 2.109-4.761 4.717 0 .371.052.735.134 1.078v.045C7.44 7.774 3.924 5.8 1.617 2.965c-.405.697-.629 1.694-.629 2.56 0 1.348.8 3.153 2.067 3.998v.09c-.756-.03-1.53-.551-2.157-.898 0 .02.028.045.028.066 0 2.289 1.677 4.263 3.836 4.696-.376.1-.906.18-1.303.18-.305 0-.61-.08-.898-.136.6 1.877 2.335 3.1 4.402 3.1v.045c-1.609 1.247-3.647 2.111-5.84 2.111-.38 0-.853-.045-1.123-.09 2.086 1.34 4.566 2.157 7.232 2.157 8.678 0 13.432-7.143 13.432-13.387v-.629c.923-.667 1.705-1.567 2.336-2.516 0 0-1.656.785-2.729.853Zm-1.404 2.292c0 1.348-.264 2.764-.764 4.094a11.977 11.977 0 0 1-2.246 3.75c-1.514 1.709-4.239 3.746-8.625 3.746-.128 0-.257-.002-.386-.007.424-.245.83-.519 1.218-.82l.696-.539v-2.857l-.74-.008a1.477 1.477 0 0 1-1.461-1.477v-1.47l-.972-.219a.943.943 0 0 1-.735-.92V9.48l-.023-.916-.799-.534a3.666 3.666 0 0 1-.88-1.154c2.357 1.72 5.158 2.749 8.068 2.915l1.9.109v-2.16l-.05-.207a2.857 2.857 0 0 1-.086-.659c0-.774.31-1.504.87-2.057a2.968 2.968 0 0 1 2.095-.863c.796 0 1.49.308 2.06.915l.458.489.055.214.012.044.335 1.298v.544Z" fill="#000"/></svg></a>
                    </div>
                    <img src="/images/visa-mastercard.png" alt="Card Type" />
                </div>
            </div>
        </footer>
    );
};