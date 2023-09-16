import { useState, useEffect } from 'react'
import { getComments, comment, apiResponse } from '../../api/CommentApi'


function CommentList() {


    const [commentList, setCommentList] = useState<comment[]>([])

    async function getdata() {
        const data: apiResponse = await getComments()
        setCommentList(data.data)
    }

    useEffect(() => {

        getdata()

    }, [])

    return (
        <div>{ commentList.length > 0 && commentList.map((item: comment, i: number) => {
            return <p key={ i }>{ item.name }</p>
        }) }</div>
    )
}

export default CommentList