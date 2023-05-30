import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {editProduct, findProductById} from "../../sevives/productService.js";
import {useDispatch, useSelector} from "react-redux";


const Edit =() => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let {id} = useParams();

    const product = useSelector(({products}) =>{
        return products.currentProduct;
    });

    useEffect(() => {
        dispatch(findProductById(id))
    }, [])


    return(
        <>
            <h1>Đây là trang Edit</h1>

            <Formik
                initialValues={{...product, category: (product.category ? product.category.id: '')}}
                onSubmit={(values) => {
                    dispatch(editProduct({
                        id: id,
                        product: values,
                    })).then(()=> {
                        navigate('/')
                    })

                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field type="text" name="name" />
                    <Field type="number" name="price"/>
                    <Field type="number" name="quantity"/>
                    <Field as="select" name="category">
                        <option value="1">Hoa qua</option>
                        <option value="2">Banh keo</option>
                    </Field>
                    <button type='submit'>Nhập</button>
                </Form>
            </Formik>
        </>

    )
}

export default Edit;
