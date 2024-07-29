const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
const baseURL = process.env.NEXT_PUBLIC_STUK_BE

const headers = {
    "Authorization": `Bearer ${token}`
}

const instance = async (url: string) => {
    const response = await fetch(`${baseURL}${url}`, {
        headers,
        next: { revalidate: 60 }
    })
    return response.json();
}
export const getAboutUs = () => {
    return instance('/about-us?populate=*')
}
