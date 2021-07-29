import { useState } from "react";
import sample from "../assets/all-sample";
import { getAccessToken } from "../components/access";
const Select = () => {
    const [datas, setDatas] = useState(sample);
    const [select, setSelect] = useState([]);
    const [token, setToken] = useState(() => getAccessToken());

    const isSelected = (id) => {
        return select.includes(id);
    };

    const handleSelect = (id) => {
        if (!isSelected(id)) {
            addSelect(id);
        } else {
            removeSelect(id);
        }
    };

    const addSelect = (id) => {
        setSelect((prevState) => [...prevState, id]);
    };

    const removeSelect = (id) => {
        setSelect(select.filter((item) => item !== id));
    };

    return { datas, setDatas, select, token, isSelected, handleSelect };
};

export { Select };
