import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addProduct} from "../../sevives/productService.js";


const AddProduct = (props) =>{
    const dispatch = useDispatch();

    const navigate = useNavigate();



    const handleAdd = async (values) => {
        let data = {...values};
       let product = await dispatch(addProduct(data));
        props.handleAddNew(product)
        await navigate('/')
    }

    return(
        <>
        <div className="row">
            <div className="offset-3 col-6 mt-5">
                <h2>Add Products</h2>
            </div>

            <Formik initialValues={{
                name: '',
                price: '',
                quantity: '',
                category: '',
            }}
            onSubmit={(values) =>{
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
                        <label htmlFor="exampleInput" className="form-label">The loai</label>
                        <Field type="text" className="form-control" id="exampleInput" name={'category'}/>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Add</button>

                </Form>

            </Formik>
        </div>
        </>
    )

}

export default AddProduct