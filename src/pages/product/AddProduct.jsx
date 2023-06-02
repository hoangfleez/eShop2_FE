
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addProduct} from "../../sevives/productService.js";
import {useNavigate} from "react-router-dom";
import {getCategory} from "../../sevives/categoryService.js";
import {ref, uploadBytes, getDownloadURL, listAll} from "firebase/storage";
import {storage} from "../../sevives/firebase.js";
import {v4} from "uuid";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {paymentCart} from "../../sevives/cartService.js";


const AddProduct = (props) => {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');

    const uploadFile = (event) => {
        event.preventDefault();
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                setImageUrls(url);
            });
        });
    };


    const handleSaveProduct = async () => {
        let abc = {
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            image: imageUrls
        }


        let data = await dispatch(addProduct(abc));
        if (data) {
            MySwal.fire({
                icon: 'success',
                title: 'Them thanh cong.',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(()=>{handleClose();
                setName("");
                setPrice("");
                setCategory("");
                setQuantity("");
                setImageUrls("")
                navigate("/admin")}, 1500)

        } else {

        }
    }


    const categorys = useSelector(state => {
        return state.category.category
    });


    useEffect(() => {
        dispatch(getCategory())
    }, []);


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <div className="body-add-new">
                            <lable className="form-label">Name</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="body-add-new">
                            <lable className="form-label">Price</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>

                        <div className="body-add-new">
                            <lable className="form-label">Quantity</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={quantity}
                                onChange={(event) => setQuantity(event.target.value)}
                            />
                        </div>


                        <div className="body-add-new">
                            <lable className="form-label">Category</lable>
                            <select as='select' name={'category'} onChange={(event) => setCategory(event.target.value)}>
                                {categorys && categorys.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                                }
                            </select>
                        </div>

                        <form>
                            <div className="mb3">
                                {imageUrls && (
                                    <img
                                        src={imageUrls}
                                        alt="Preview"
                                        style={{width: 150, height: 150}}
                                    />)}

                                <label htmlFor="arquivo">Upload Image:</label>
                                <input
                                    id="exampleInput"
                                    type="file"
                                    className="form-control"
                                    onChange={(event) => {
                                        setImageUpload(event.target.files[0]);
                                    }}
                                />
                            </div>

                            <button style={{margin: 10}} onClick={(event) => uploadFile(event)}> Upload</button>
                        </form>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveProduct()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default AddProduct
