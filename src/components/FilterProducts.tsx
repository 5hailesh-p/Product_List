import React, { useContext, useEffect, useState } from 'react'
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
    const [priceRange, setPriceRange] = useState<number>(400)

    useEffect(() => {
        let temp = allProducts
        if (priceRange > 0) {
            temp = temp.filter((p) => p.price <= priceRange)
        }
        if (catFiltered.length == 0) {
            setDisplayProduct(temp)
        } else {
            setDisplayProduct(temp.filter((p) => catFiltered.includes(p.category)))
        }
    }, [catFiltered, priceRange])


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
                    {allCategory.map((cat) => (
                        <Form.Check type="checkbox" onChange={handelFilter} key={cat} id={cat} value={cat} label={cat.toString().toUpperCase()} />
                    ))}
                </div>

                <div className=''>
                    <label htmlFor="range3" className="form-label">Price Range:  [Min: {currency} 0 and Max: {currency} {priceRange}] </label>
                    <input type="range" onChange={(e) => setPriceRange(Number(e.target.value))} value={priceRange} className="form-range" min="0" max="5000" step="10" id="range3"></input>

                </div>

            </Form>
        </>
    )
}
