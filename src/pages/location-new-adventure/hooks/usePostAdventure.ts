import { useContext } from "react";
import { post, postFile } from "../../../api/api";
import { PreviewFile } from "../../../components/image-uploader.component";
import AuthContext from "../../../hooks/auth-context";
import { Adventure } from "../../../types/adventure";
import NewAdventureRequest from "../../../types/requests/new-adventure-request";

const usePostAdventure = () => {
    const auth = useContext(AuthContext);

    return (request: NewAdventureRequest, images: PreviewFile[]): Promise<Adventure|void> => {
        return post<Adventure|void>('/adventure', request, auth)
            .then(response => {
                if (!response?.data) throw new Error('Error adding adventure');
                const imagePromises = images.map(image => 
                    postFile<{ status: string }>(`/adventure/${(response.data as Adventure).adventureId}/image`, image, auth)
                        .then(res => console.log(res))
                        .catch(err => { throw err; }));
                return Promise.all(imagePromises)
                    .then(() => response.data);
            });
    };
}

export default usePostAdventure;