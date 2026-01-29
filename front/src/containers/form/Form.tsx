import "./Form.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProdSchema, ProdType } from "../../validation/Schema";
import { IData } from "../../models/Interfaces";

type Props = {
    submitLabel?: string,
    initialData?: IData,
    onSubmit: (data: IData) => void
};

export const Form = ({ 
    submitLabel = "Add Product", 
    initialData, 
    onSubmit 
}: Props) => {
    const { register, handleSubmit, 
        formState: { errors } } = useForm<ProdType>({
        defaultValues: initialData || {
            currency: "USD",
            quantity: 0,
            active: true
        },
        resolver: zodResolver(ProdSchema)
    });

    return (
        <form 
            className="form__container"
            onSubmit={handleSubmit(onSubmit)}
        >
            <section>
                <label htmlFor="name">Name</label>
                <input id="name" {...register("name")} />
                {errors.name && 
                    <span className="error"
                    >{errors.name?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="description">Description</label>
                <input id="description" {...register("description")} />
                {errors.description && 
                    <span className="error"
                    >{errors.description?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="image">Image</label>
                <input id="image" {...register("image")} />
                {errors.image && 
                    <span className="error"
                    >{errors.image?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="price">Price</label>
                <input id="price" {...register("price")} />
                {errors.price && 
                    <span className="error"
                    >{errors.price?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="currency">Currency</label>
                <input id="currency" {...register("currency")} />
                {errors.currency && 
                    <span className="error"
                    >{errors.currency?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="quantity">Quantity</label>
                <input 
                    id="quantity" 
                    type="number"
                    {...register("quantity", 
                        { valueAsNumber: true })} 
                />
                {errors.quantity && 
                    <span className="error"
                    >{errors.quantity?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="active">Active</label>
                <input 
                    id="active" 
                    type="checkbox" 
                    {...register("active")} 
                />
                {errors.active && 
                    <span className="error"
                    >{errors.active?.message}
                </span>}
            </section>
            <section>
                <label htmlFor="category.id">Category ID</label>
                <input id="category.id" {...register("category.id")} />
                {errors.category?.id && 
                    <span className="error"
                    >{errors.category?.id.message}
                </span>}
            </section>
            <section>
                <label htmlFor="category">Category Name</label>
                <input id="category.name" {...register("category.name")} />
                {errors.category?.name && 
                    <span className="error"
                    >{errors.category?.name.message}
                </span>}
            </section>
            <button 
                className="form__btn"
                type="submit" 
            >
                {submitLabel}
            </button>
        </form>
    );
};



