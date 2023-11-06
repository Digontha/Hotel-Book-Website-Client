
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Toast from "../Components/Toast";


const Update = () => {
    const updateData = useLoaderData()
    console.log(updateData);
    const { date, _id } = updateData

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const newDate = form.date.value
        const data = {
            newDate
        }
        
        fetch(`http://localhost:5000/bookings/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res.json());
            })
            .then(result => {
                console.log(result);
                
            })
            
    }



    return (
        <>
            <form onSubmit={handleUpdate} className="text-center h-[50vh] bg-slate-300 flex flex-col items-center justify-center">
                <p className="mb-5 underline">Update your booking date</p>
                <input name="date" defaultValue={date} className="p-5 rounded-xl" type="date" />
                <input onClick={handleShowToast} type="submit" className="btn btn-neutral mt-5" value="Update date" />
            </form>
            <div>
                <Toast
                    message="Updated You date update successfully"
                    show={showToast}
                    onClose={handleCloseToast}
                />
            </div>
        </>
    );
};

export default Update;