import { useEffect, useState } from "react";

const useItem = () =>{
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('https://hidden-tor-69572.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return [items, setItems]
}

export default useItem;
