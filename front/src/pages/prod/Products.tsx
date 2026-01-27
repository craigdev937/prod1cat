import React from "react";
import "./Products.css";
import { API } from "../../global/API";
import { Spinner } from "../../components/spin/Spinner";

export const Products = () => {
    const { error, isLoading, data } = API.useGetQuery();
    const PR = data!;
    console.log(PR);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className="prod">
                    <section className="prod__container">
                        {PR.data.map((prod) => (
                            <article 
                                key={prod.id} 
                                className="prod__card"
                            >
                                <aside className="prod__content">
                                    <h2>{prod.name}</h2>
                                    <p>{prod.description}</p>
                                    <div className="prod__details">
                                        <span className="prod__price">
                                            {prod.price} {prod.currency}
                                        </span>
                                        <span className="prod__status">
                                            {prod.active ? "Active" : "Inactive"}
                                        </span>
                                    </div>
                                    <div className="prod__category">
                                        Category: {prod.category.name}
                                    </div>
                                    <div className="prod__meta">
                                        <small>Created: {new Date(prod.created_at).toLocaleDateString()}</small>
                                        <small>Updated: {new Date(prod.updated_at).toLocaleDateString()}</small>
                                    </div>
                                    <div className="prod__actions">
                                        <button 
                                            className="btn"
                                            >View
                                        </button>
                                        <button 
                                            className="btn"
                                            >Edit
                                        </button>
                                        <button 
                                            className="btn"
                                            >Delete
                                        </button>
                                    </div>
                                </aside>
                                <aside className="prod__image">
                                    <img 
                                        loading="lazy"
                                        alt={`${prod.name} product image`}
                                        src={prod.image}  
                                    />
                                </aside>
                            </article>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


