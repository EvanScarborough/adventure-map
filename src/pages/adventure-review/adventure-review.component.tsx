import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundArea, Button, CollectionLayout, ColumnLayout, DottedDivider, MainArea, PageArea, RowLayout } from "../../components/basic.styled";
import { TextArea, TextInput } from "../../components/form.styled";
import Pagination from "../../components/pagination.component";
import RatingInput from "../../components/rating-input.component";
import { Body, FancyHeader, SectionHeader, SmallNote } from "../../components/typography.styled";
import useLocation from "../../hooks/useLocation";
import useUsers from "../../hooks/useUsers";
import NewAdventureRequest from "../../types/requests/new-adventure-request";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Chip from "../../components/chip.component";
import UserBadge from "../../components/user-badge.component";
import ImageUploader, { PreviewFile } from "../../components/image-uploader.component";
import AuthContext from "../../hooks/auth-context";
import React from "react";
import { Adventure } from "../../types/adventure";
import ReactLoading from 'react-loading';
import useAdventure from "../../hooks/useAdventure";
import AdventureReview from "../../types/requests/adventure-review-request";
import usePostReview from "./hooks/usePostReview";

const AdventureReviewPage = () => {
    const { adventureId } = useParams();
    const { adventure } = useAdventure(+(adventureId as string));
    const { location } = useLocation(adventure?.locationId ?? null);
    const auth = React.useContext(AuthContext);

    const [pageOn, setPageOn] = useState(0);
    const [pageAllow, setPageAllow] = useState(0);
    const [review, setReview] = useState<AdventureReview>({
        rating: 0,
        comment: ""
    });
    const [files, setFiles] = useState<PreviewFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();
    if (!auth) navigate("/login");

    const postReview = usePostReview(+(adventureId as string));

    const handleBackButton = () => {
        if (pageOn === 0) navigate(`/location/${adventure?.locationId}`);
        else setPageOn(pageOn-1);
    };
    const handleNextButton = () => {
        if (pageOn === 1) {
            setUploading(true);
            postReview(review, files)
                .then(res => {
                    navigate(`/location/${adventure?.locationId}`);
                })
                .catch(err => console.log(err))
                .finally(() => setUploading(false));
        }
        else setPageOn(pageOn + 1);
    };

    const dateLocale = 'en-US';
    const adventureTime = adventure?.time ? new Date(adventure.time).toLocaleDateString(dateLocale,
        { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) : '';

    return (
        <PageArea>
            <BackgroundArea/>
            <MainArea hardLimitHeight={1}>
                <FancyHeader center={1}>Review Adventure!</FancyHeader>
                <Body center={1} margin="0 40px 16px 40px">
                    {`Review your experience at ${location?.name} with ${location?.addedByUser?.displayName} on ${adventureTime}`}
                </Body>
                <DottedDivider />
                <Pagination pageOn={pageOn}>
                    {/* Rating and Comment */}
                    <ColumnLayout>
                        <SectionHeader>
                            How would you rate your experience?
                        </SectionHeader>
                        <RatingInput
                            rating={review.rating}
                            onChange={r => {
                                setReview({...review, rating:r});
                                if (pageAllow < 2) setPageAllow(2);
                            }} />
                        <SectionHeader>
                            Any comment?
                        </SectionHeader>
                        <TextArea
                            limitWidth={1}
                            rows={6}
                            value={review.comment}
                            onChange={e => {
                                setReview({...review, comment:e.target.value});
                            }} />
                    </ColumnLayout>
                    {/* Upload images */}
                    <ColumnLayout>
                        <SectionHeader>
                            Add some images of your adventure.
                        </SectionHeader>
                        <ImageUploader files={files} setFiles={setFiles}/>
                    </ColumnLayout>
                </Pagination>
                {
                    uploading
                    ?
                        <ReactLoading color="#ccc" type="bars" />
                    :
                        <RowLayout>
                            <Button cancel={pageOn === 0 ? 1 : 0} onClick={()=>handleBackButton()}>
                                { pageOn === 0 ? "Cancel" : "Back" }
                            </Button>
                            <Button disabled={pageAllow <= pageOn} onClick={()=>handleNextButton()}>
                                { pageOn === 1 ? "Submit" : "Next" }
                            </Button>
                        </RowLayout>
                }
            </MainArea>
        </PageArea>
    );
};

export default AdventureReviewPage;