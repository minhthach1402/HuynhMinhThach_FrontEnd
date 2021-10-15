import styles from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backgrop = props => {
    return <div onClick={props.hideModal} className={styles.backgrop}></div>;
}

const Overlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>;
}

const portalElement = document.getElementById('overlay');

const Modal = props => {
    return <> 
        {ReactDOM.createPortal(<Backgrop hideModal={props.hideMenu}/>, portalElement) }
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement) }
    </>
}

export default Modal;