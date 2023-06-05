import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {topFiveProducts} from "../../sevives/productService.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableControl } from 'react-bootstrap-table-control';
import Papa from "papaparse";
import {CSVLink} from "react-csv";
import { Button } from "@mui/material";

const Excel = () => {
    const dispatch = useDispatch();
    const [topProducts, setTopProducts] = useState([]);
    const [dataExport, setDataExport] = useState([]);

    const topFiveExcelProducts = useSelector((state) => state.products.excel);
    console.log(topFiveExcelProducts, 5556)

    useEffect(() => {
        dispatch(topFiveProducts());
    }, [dispatch]);


    useEffect(() => {
        setTopProducts(topFiveExcelProducts);
    }, [topFiveExcelProducts]);


    const getProductsExport = (event, done) => {
        let result = [];
        if (topProducts && topProducts.length > 0) {
            result.push([ "Name", "Price", "Quantity"])
            topProducts.map((item, index) => {
                let arr = [];
                arr[0] = item.name;
                arr[1] = item.price;
                arr[2] = item.quantity;
                result.push(arr);
            })
            setDataExport(result);
            done();
        }
    }

    const handleImportCSV = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let file = event.target.files[0];

            if (file.type !== "text/csv") {
                alert("toang");
                return;
            }

            Papa.parse(file, {
                complete: function (results) {
                    let rawCSV = results.data;
                    if (rawCSV.length > 0) {
                        if (rawCSV[0] && rawCSV[0].length === 3) {
                            if (rawCSV[0][0] !== "name"
                                || rawCSV[0][1] !== "price"
                                || rawCSV[0][2] !== "quantity"
                            ) {
                                alert('toang lam')
                            } else {
                                let result = [];
                                rawCSV.map((item, index) => {
                                    if (index > 0 && item.length === 3) {
                                        let obj = {};
                                        obj.name = item[0]
                                        obj.price = item[1]
                                        obj.quantity = item[2]
                                        result.push(obj);
                                    }
                                })
                                setTopProducts(result)
                                console.log(">>>", result)
                            }
                        } else {
                            alert("toang that roi!")
                        }
                    } else
                        alert("toang nua")
                }
            });
        }
    }



    return (
        <>
            <div style={{display:"flex" ,alignItems:"flex-start"}}>
                <Button>
                    <label
                        htmlFor="test"
                        className="btn btn-warning"
                    >
                        <i className="fa-solid fa-file-import"></i>
                        Import
                    </label>
                </Button>
                <input id="test" type="file" hidden
                       onChange={(event) => handleImportCSV(event)}/>
                <Button>
                    <CSVLink
                        data={dataExport}
                        filename={"my-file.csv"}
                        className="btn btn-primary"
                        asyncOnClick={true}
                        onClick={getProductsExport}
                    ><i className="fa-solid fa-download"></i>
                        Export
                    </CSVLink>
                </Button>
            </div>
            <TableControl
                header={[
                    { key: "name", name: "Name" },
                    { key: "price", name: "Price" },
                    { key: "quantity", name: "Quantity" }
                ]}
                itens={Array.isArray(topProducts) &&
                    topProducts.map((item) => ({
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity
                    }))}
            />
        </>
    );
};

export default Excel;