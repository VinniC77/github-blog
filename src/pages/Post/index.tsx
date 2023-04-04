import { useCallback, useEffect, useState } from "react";
import { PostHeader } from "./components/PostHeader";
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {

    const [postData, setPostData] = useState<IPost>({} as IPost)
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {
        try {
            setIsLoading(true);

            const response = api.get(`/repos/${userName}/${repoName}/issues/${id}`)

            setPostData(response.data)
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        getPostDetails();
    }, [postData])

    return (
        <>
        <PostHeader />
        </>
    )
}