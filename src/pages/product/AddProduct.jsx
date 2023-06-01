import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addProduct} from "../../sevives/productService.js";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../sevives/firebase.js";
import {getCategory} from "../../sevives/categoryService.js";
import { v4 } from "uuid";
import {useEffect, useState} from "react";


const AddProduct = (props) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                setImageUrls(url);
            });
        });
    };


    const handleAdd = async (values) => {
        let data = {...values};
       let product = await dispatch(addProduct(data));
       await props.handleAddNew(product)
         navigate('/')
    }

    const category = useSelector(state =>{
        return state.category.category
    });



    useEffect( ()=>{
         dispatch(getCategory())
    },[]);



    return(
        <>
        <div className="row">

            <Formik initialValues={{
                name: '',
                price: '',
                quantity: '',
                category: ''
            }}
            onSubmit={(values) =>{
                values = {...values, image: imageUrls}
                handleAdd(values)
            }}
            >

                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Name product</label>
                        <Field type="text" className="form-control" id="exampleInput" name={'name'}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Price product</label>
                        <Field type="text" className="form-control" id="exampleInput" name={'price'}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Quantity product</label>
                        <Field type="text" className="form-control" id="exampleInput" name={'quantity'}/>
                    </div>

                    <div className="mb-3">
                        <Field as='select' name={'category'} >
                            {category !== undefined && category.map((item)=>(
                                <option value={item.id}>{item.name}</option>
                            ))

                            }
                        </Field>
                    </div>

                    <Form>

                        <div className="mb3">

                            {imageUrls && (
                                <img
                                    src={imageUrls}
                                    alt="Preview"
                                    style={{width: 150, height:150}}
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

                        <button style={{margin: 10}} onClick={uploadFile}> Upload</button>
                    </Form>
                    <br/>


                    <button style={{marginTop: 50}} type="submit" className="btn btn-outline-primary" >Add</button>

                </Form>

            </Formik>

        </div>
        </>
    )

}

export default AddProduct