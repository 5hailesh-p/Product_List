import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import { ProductContext } from '../context/ProductContext';
import { currency } from '../constant/ProductConstants';
interface Props {
    allCategory: string[],
    setDisplayProduct: any,
}


export const FilterProducts = ({ allCategory, setDisplayProduct }: Props) => {

    const allProducts = useContext(ProductContext)
    const [catFiltered, setCatFiltered] = useState<string[]>([])
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(1000)
    const [search, setSearch] = useState<string>('')
    const [priceSortAsc, setPricesortAsc] = useState<boolean>()
    const [ratingDsc, setRatingDsc] = useState<boolean>(true)
    const noCat = catFiltered.length === 0

    const dProduct = useMemo(() => {

        let temp = allProducts


        if (search) {
            temp = temp.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        }
        if (minPrice > 0) {
            temp = temp.filter((p) => p.price <= maxPrice && p.price >= minPrice)
        }
        if (catFiltered.length !== 0) {
            temp = temp.filter((p) => catFiltered.includes(p.category))
        }
        if (priceSortAsc) {
            temp = temp.sort((a, b) => a.price - b.price)
        } else {
            temp = temp.sort((a, b) => b.price - a.price)
        }

        if (ratingDsc) {
            temp = temp.sort((a, b) => b.rating - a.rating)
        }

        return temp
    }, [priceSortAsc, ratingDsc, catFiltered, minPrice, search, allProducts])

    useEffect(() => {
        setDisplayProduct(dProduct)
    }, [dProduct])

    const handelFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setCatFiltered([...catFiltered, e.target.value])
        } else {
            setCatFiltered([...catFiltered.filter((i) => i != e.target.value)])
        }
    }


    return (
        <>

            <Form>
                <div className="bg-body-secondary d-flex gap-3 justify-content-between my-4 overflow-x-auto p-1 p-3 rounded-2 flex-wrap flex-md-nowrap">

                    <Form.Check type="checkbox" checked={noCat} onChange={() => setCatFiltered([])} id="All" value={allCategory} label="All" />
                    {allCategory.map((cat) => (
                        <Form.Check type="checkbox" onChange={handelFilter} checked={catFiltered.includes(cat)} key={cat} id={cat} value={cat} label={cat.toString().toUpperCase()} />
                    ))}
                </div>

                <div className='my-3'>
                    <div className='row justify-content-md-between align-items-center g-3'>
                        <div className='col-md-12'>
                            <label className="form-label"> Search By Name </label>
                            <input type="text" placeholder="Enter Product Name " className='form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className='col-md-4 col-6'>
                            <label className="form-label"> Min Price: {currency} {minPrice}  </label>
                            <input type="number" placeholder="Min" className='form-control' value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />

                        </div>
                        <div className='col-md-4 col-6'>
                            <label className="form-label"> Max Price:  {currency} {maxPrice} </label>
                            <input type="number" placeholder="Max" className='form-control' value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
                        </div>
                        <div className='col-md-4 '>
                            <label className="form-label"> Sort :   </label>
                            <Form.Check type="switch" checked={priceSortAsc} onChange={() => setPricesortAsc(!priceSortAsc)} id="Price-Sort" label={priceSortAsc ? "Price: Low - High" : "Price: High - Low"} />
                            <Form.Check type="switch" checked={ratingDsc} onChange={() => setRatingDsc(!ratingDsc)} id="Rating-Sort" label={ratingDsc ? "Rating: High - Low" : "Rating: Low - High"} />
                        </div>


                    </div>
                </div>
            </Form>
        </>
    )
}
