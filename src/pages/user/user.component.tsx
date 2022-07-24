import { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ColumnLayout } from "../../components/basic.styled";
import { SectionHeader, Title } from "../../components/typography.styled";
import UserBadge from "../../components/user-badge.component";
import AuthContext from "../../hooks/auth-context";
import useUser from "../../hooks/useUser";
import { UploadImageButton, UserBodyArea, UserHeroArea } from "./user.styled";
import { FiCamera } from "react-icons/fi";
import Modal from "../../components/modal.component";
import ImageUploader, { PreviewFile } from "../../components/image-uploader.component";
import Auth from "../../types/auth";
import ReactLoading from 'react-loading';
import useNotifications from "../../hooks/useNotifications";
import NotificationBadge from "./components/notification.card.component";
import BackToMapButton from "../../components/back-to-map-button.component";


interface UserPageProps {
    login: (auth:Auth|null) => void
};
const UserPage = ({ login }: UserPageProps) => {
    const auth = useContext(AuthContext);
    const { userId } = useParams<{ userId: string }>();
    const { user, postProfilePic } = useUser(+(userId as string));
    const notifications = useNotifications();
    console.log(notifications);

    const [ showProfileImageModal, setShowProfileImageModal ] = useState(false);
    const [ files, setFiles ] = useState<PreviewFile[]>([]);
    const [ isFileUploading, setIsFileUploading ] = useState(false);

    const navigate = useNavigate();

    const isCurrentUser = (auth && auth.userId === user?.user?.userId);

    const handlePostProfilePic = () => {
        setIsFileUploading(true);
        postProfilePic(files[0])
            .then(res => {
                console.log(res);
                if (res.error) console.log(res);
                else login({...(auth as Auth), profilePictureUrl: res.data.profilePictureUrl});
                window.location.reload();
            })
            .catch(err => console.log(err))
            .finally(() => { setIsFileUploading(false) });
    };

    return (
        <>
            <BackToMapButton />
            <UserHeroArea />
            <ColumnLayout>
                <UserBadge user={user?.user ?? null} huge imageOnly hideTooltip/>
                {
                    user == null
                    ?
                        <>
                            <Skeleton width="200px" height="2em"/>
                        </>
                    :
                        <>
                            <UploadImageButton onClick={() => setShowProfileImageModal(true)}><FiCamera size={32}/></UploadImageButton>
                            <Title>{user.user?.displayName}</Title>
                            {isCurrentUser && <Button onClick={() => { login(null); navigate('/'); }}>Log Out</Button>}
                            <UserBodyArea>
                                {isCurrentUser &&
                                <>
                                    <SectionHeader>Notifications</SectionHeader>
                                    {notifications.map((n,i) => <NotificationBadge key={i} notification={n}/>)}
                                </>}
                            </UserBodyArea>
                        </>
                }
            </ColumnLayout>
            <Modal show={showProfileImageModal} title="Upload Profile Picture" width="400px"
                onClose={() => { setFiles([]); setShowProfileImageModal(false); }}>
                <ColumnLayout>
                    <ImageUploader maxFiles={1} files={files} setFiles={setFiles} width="200px"/>
                    {
                        isFileUploading
                        ?
                            <ReactLoading color="#ccc" type="bars" />
                        :
                            <Button disabled={files.length !== 1} onClick={() => handlePostProfilePic()}>Submit</Button>
                    }
                </ColumnLayout>
            </Modal>
        </>
    )
};

export default UserPage;