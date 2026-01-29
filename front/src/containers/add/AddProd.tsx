import "./AddProd.css";
import { useNavigate } from "react-router";
import { Form } from "../form/Form";
import { API } from "../../global/API";
import { IData } from "../../models/Interfaces";

export const AddProd = () => {
    const navigate = useNavigate();
    const [addProduct] = API.useAddMutation();

    const handleAdd = async (data: IData) => {
        await addProduct(data);
        console.log(data);
        navigate("/");
    };

    return (
        <main className="add__prod">
            <h1 className="add_title">Add Product!</h1>
            <Form 
                submitLabel="Add Product"
                onSubmit={handleAdd}
            />
        </main>
    );
};


