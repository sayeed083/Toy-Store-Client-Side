

const MyToySingle = ({ mytoy }) => {

    const { toyPicture, toyName, sellerName, sellerEmail, category, price, ratings, quantity, details } = mytoy;


    return (


        <tr>
            <th>
                <button className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={toyPicture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {toyName}

            </td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <td>

                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn bg-red-600">See Details Here</label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Car Details</h3>
                        <p className="py-4 ">{details}</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn bg-cyan-300">Close</label>
                        </div>
                    </div>
                </div>


            </td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>

            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>


    );
};

export default MyToySingle;