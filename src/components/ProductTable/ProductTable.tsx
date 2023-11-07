import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import {Button, Table} from 'react-bootstrap'
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";



const ProductTable = () => {
    const initializableNewProduct = ():Product => {
        return {
            id:0,
            title:"",
            price:0,
            description:"",
            category:"",
            image:""
        };
    };
    
    const [product,setProduct] = useState<Product>(initializableNewProduct);
    const [showModal,setShowModal]= useState(false);
    const [modalType,setModalType] = useState<ModalType>(ModalType.NONE);
    const [title,setTitle] = useState("");
    
    
    const [products,setProducts] = useState<Product[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    
    const [refreshData,setRefreshData] = useState(false);

    useEffect(()=>{
       const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
       }
       fetchProducts();
    },[refreshData])


    const handleClick = (newTitle:string,prod:Product,modal:ModalType)=>{
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    }

    return (
        <div className="p-3">
            <Button onClick={()=>handleClick("Nuevo producto",initializableNewProduct(),
            ModalType.CREATE)}>Nuevo producto</Button>
            {
                isLoading ? <Loader/> : (
                   <Table hover>
                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>PRECIO</th>
                            <th>DESCRIPCION</th>
                            <th>CATEGORIA</th>
                            <th>IMAGEN</th>
                            <th>EDITAR</th>
                            <th>BORRAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product)=> {
                              return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <img src={product.image}
                                            style={{width:"50px"}}
                                        />
                                    </td>
                                    <td><EditButton onClick={()=> handleClick("Editar producto", product,ModalType.UPDATE)}/></td>
                                    <td><DeleteButton onClick={()=> handleClick("Borrar producto", product,ModalType.DELETE)}/></td>
                                </tr>
                              )
                            })
                        }
                    </tbody>
                        
                   </Table> 
                )
            }

            {
                showModal && (
                    <ProductModal
                        show={showModal}
                        onHide={()=>setShowModal(false)}
                        title={title}
                        modalType={modalType}
                        prod={product}
                        refreshData={setRefreshData}
                    />
                )
            }
        </div>
    )
}

export default ProductTable