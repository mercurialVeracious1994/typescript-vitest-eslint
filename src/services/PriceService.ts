const BASEURL = 'https://equalexperts.github.io/'

const getPrice = async <T>(productName: string): Promise<T> => {
    const url = BASEURL + `backend-take-home-test-data/${productName}.json`;
    try {
        return await fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json();
            })
    } catch (e) {
        // @ts-ignore
        throw new Error(e.message.toString())
    }
}

export const PriceService = {getPrice}
