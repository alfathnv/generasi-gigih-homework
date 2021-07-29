import React from "react";
import { Select } from "../components/select";
import { createPlaylist } from "../components/create";

const CreateTrack = () => {
    const { select, token } = Select();

    const handleSubmit = () => {
        createPlaylist(token, select);
    };
    return (
        <form onSubmit={() => createPlaylist(token, select)} action="#">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                minLength="10"
                placeholder="title"
            ></input>
            <hr></hr>
            <label htmlFor="desc">Description</label>
            <textarea
                type="text"
                id="desc"
                name="desc"
                rows="3"
                minLength="20"
                placeholder="description..."
            ></textarea>

            <button>Submit</button>
        </form>
    );
};

export default CreateTrack;
