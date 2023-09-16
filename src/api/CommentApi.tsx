

export type comment = {
    postId: number;
    id: number;
    email: string;
    body: string;
    name: string;
}

export type apiResponse = {
    data: comment[]
}

export const getComments = async () => {

    const res = await fetch('http://localhost:3000/data',
        {
            method: 'GET',


        }
    ).then(res => res.json())
    console.log(res)
    return { data: res };
}