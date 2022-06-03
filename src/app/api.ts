import axios from "axios";

export const BASE_URL = "https://kitsu.io/api/edge";

export async function getCharacterInfo(urlParams?: string | null) {
    const response = await axios.get(urlParams ? urlParams: `${BASE_URL}/anime?page[limit]=20&page[offset]=0`);
    return response.data;
}
