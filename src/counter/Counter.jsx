import {useDispatch, useSelector} from 'react-redux';
import {addOne, munisOne, setName} from "./counterSlice";
import {useState} from "react";

const Counter = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.counterData);
    const [name, setNameValue] = useState('');
    const addNume = () => {
        dispatch(addOne());
    }
    const minusNume = () => {
        dispatch(munisOne());
    }
    const changeName = () => {
        dispatch(setName(name));
    }
    return (
        <>
            <div>
                <button onClick={addNume}>+</button>
                <span>{data?.count}</span>
                <button onClick={minusNume}>-</button>
                <input type="text" value={data?.name}/>
                <button onClick={changeName}>change name</button>
                <input type="text" onChange={(e) => setNameValue(e.target.value)} value={name}
                       placeholder="enter name"/>
            </div>
        </>
    );
};

export default Counter;