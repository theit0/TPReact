import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import {Button, Table} from 'react-bootstrap'
import { ModalType } from "../../types/ModalType";



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
    
    const handleClick = (newTitle:string,prod:Product,modal:ModalType)=>{
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    }
    
    const [products,setProducts] = useState<Product[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
       const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
       }
       fetchProducts();
    },[])

    console.log(JSON.stringify(products,null,2))

    return (
        <div className="p-3">
            <Button onClick={()=>handleClick("Nuevo producto",initializableNewProduct(),
            ModalType.CREATE)}>Nuevo producto</Button>
            {
                isLoading ? <Loader/> : (
                   <Table hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Imagen</th>
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
                                </tr>
                              )
                            })
                        }
                    </tbody>
                        
                   </Table> 
                )
            }
        </div>
    )
}

export default ProductTable