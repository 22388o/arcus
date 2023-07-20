import { useState, useEffect } from "react";
import { userSession } from "../utils/stacks";

export default function useHiro() {
    const [address, setAddress] = useState('');
    let tempAddress;
    try{    
        tempAddress = userSession.loadUserData().profile?.stxAddress?.testnet;
    } catch(e) {console.error(e)}

    console.log(tempAddress);

    useEffect(() => {
        try{
            setAddress(tempAddress);
        }catch(e) {
            setAddress('');
        }
    }, [tempAddress])

    return address;
}