import axios from 'axios';

export const getAll = async () => {
    const res = await axios.get('https://api.xor.cl/tyaas/')
    return res.data
}

