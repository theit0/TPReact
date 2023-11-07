import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";
import {toast} from 'react-toastify';

type ProductModalProps = {
    show:boolean;
    onHide:()=> void,
    title:string;
    modalType:ModalType;
    prod:Product;
    refreshData:React.Dispatch<React.SetStateAction<boolean>>;
}


const ProductModal = ({show,onHide,title,modalType,prod,refreshData}:ProductModalProps) => {
  
    const handleSaveUpdate = async (pro:Product) => {
        try {
            const isNew = prod.id === 0;
            if(isNew){
                await ProductService.createProduct(pro);
            } else {
                await ProductService.updateProduct(pro.id,pro);
            }
            toast.success(isNew?"Producto creado":"Producto actualizado",{
                position:"top-center"
            });
            onHide();
            refreshData(prevState=> !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error");
        }
    }

    const handleDelete = async ()=>{
        try {
            await ProductService.deleteProduct(prod.id);
            toast.success("Producto eliminado con éxito",{
                position:"top-center"
            });
            onHide();
            refreshData(prevState=> !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error");
        }
    }



    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required("El titulo es requerido"),
            price: Yup.number().min(0).required("El precio es requerido"),
            category: Yup.string().required("La categoria es requerida"),
            description: Yup.string().required("La descripcion es requerida"),
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
            <>
                <Modal show={show} onHide={onHide} centered backdrop="static">
                    <Modal.Header>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <p>¿Está seguro que desea eliminar el producto?</p>
                        <strong>{prod.title}</strong>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                        <Button variant="danger" onClick={handleDelete}>Borrar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        ) : (
            <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="formTitulo">
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

                        <Form.Group controlId="formPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                            name="price"
                            type="number"
                            value={formik.values.price ||''}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.price && formik.touched.price)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                            name="description"
                            type="text"
                            value={formik.values.description || ''}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.description && formik.touched.description)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCategory">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                            name="category"
                            type="text"
                            value={formik.values.category || ''}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.category && formik.touched.category)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                            name="image"
                            type="text"
                            value={formik.values.image || ''}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.image && formik.touched.image)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.image}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Modal.Footer className="mt-4">
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        )}

    </>
  )
}

export default ProductModal