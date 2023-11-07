import { Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
import * as Yup from 'yup';
import { useFormik } from "formik";

type ProductModalProps = {
    show:boolean;
    onHide:()=> void,
    title:string;
    modalType:ModalType;
    prod:Product;
}


const ProductModal = ({show,onHide,title,modalType,prod}:ProductModalProps) => {
  
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required("El titulo es requerido"),
            price: Yup.number().min(0).required("La descripcion es requerida"),
            description: Yup.string().required("La categoria es requerida"),
            image: Yup.string().required("La imagen es requerida")
        })
    }
  
    const formik = useFormik({
        initialValues: prod,
        validationSchema:validationSchema(),
        validateOnChange:true,
        validateOnBlur:true,
        onSubmit:(obj:Product) => handleSaveUpdate(obj),
    })

    return (
    <>
        {modalType=== ModalType.DELETE ? (
            <>Por el momento vacio</>
        ) : (
            <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                            name="title"
                            type="text"
                            value={formik.values.title || ''}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.title && formik.touched.title)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        )}

    </>
  )
}

export default ProductModal