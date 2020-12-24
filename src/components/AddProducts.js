import React from 'react'

 function AddProducts() {
    return (
        <div className='container'>
           <br/>
           <h2>Add PRODUCTS</h2>
           <hr/>
           <form autoComplete="off" className='form-group'>
           <label htmlFor="product-name" >product Name</label>
           <br/>
           <input type='text' className='form-control' required />

           <label htmlFor="product-price" >product Price</label>
           <br/>
           <input type='number' className='form-control' required />
           <input type='file'/>
           <br/>
           <button className='btn btn-success btn-md'>ADD</button>
           
           </form>

        </div>
    )
}

export default AddProducts
