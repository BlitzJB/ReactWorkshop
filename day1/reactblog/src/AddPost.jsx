import "./AddPost.css";
import { useState, useRef } from "react";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const contentRef = useRef();

    const onChange = (e) => {
        setTitle(e.target.value);
    }

    const payload = {
        title: title,
        content: contentRef.current.value
    }

    const onClick = () => {
        console.log(payload);
    }


    return <>
        <section className="add">
            <input value={title} onChange={onChange} placeholder="Title" type="text" />
            <textarea ref={contentRef} placeholder="content" cols="30" rows="10"></textarea>
            <button onClick={onClick}>Create Post</button>
        </section>
    </>
}