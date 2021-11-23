import { forwardRef, RefForwardingComponent, useCallback, useState, useImperativeHandle } from "react";

export interface ModalHandles {
    openModal: () => void;
}

type Props = {
    title: string,
    body: string
}

const Modal: React.RefForwardingComponent<ModalHandles, Props> = (props, ref) => {

    const [visible, setVisible] = useState(true);

    const openModal = useCallback(() =>{
        setVisible(true);
    }, []);

    useImperativeHandle(ref, () => {
        return{
            openModal
        }
    }, []);

    const closeModal = useCallback(() => {
        setVisible(false);
    }, []);

    if(!visible){
        return null;
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.body}</h3>
            <button onClick={closeModal} > Fechar Modal</button>
        </div>
    );
}

export default forwardRef(Modal);