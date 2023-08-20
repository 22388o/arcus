import { useState, useEffect } from "react";
import { userSession } from "../utils/stacks";

export default function useHiro() {
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const tempAddress = await userSession.loadUserData().profile?.stxAddress?.testnet;
                setAddress(tempAddress || '');
            } catch (e) {
                console.error(e);
                setAddress('');
            }
        };

        fetchAddress();
    }, []);

    return address;
}
