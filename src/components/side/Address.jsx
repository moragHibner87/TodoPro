function Address({address}){
    if(!address){
        return null
    }
    return (
        <div className="inner-expand px-5 overflow-hidden">
            <h2 className="text-lg font-semibold mb-1">Address:</h2>
            <div>
                <p><span className="font-semibold">Street:</span> {address.street}</p>
                <p><span className="font-semibold">City:</span> {address.city}</p>
                <p><span className="font-semibold">Zip Code:</span> {address.zipcode}</p>
            </div>
        </div>
    )
}

export default Address;