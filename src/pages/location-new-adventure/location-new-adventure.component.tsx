import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundArea, Button, CollectionLayout, ColumnLayout, DottedDivider, MainArea, PageArea, RowLayout } from "../../components/basic.styled";
import { TextArea, TextInput } from "../../components/form.styled";
import Pagination from "../../components/pagination.component";
import RatingInput from "../../components/rating-input.component";
import { FancyHeader, SectionHeader, SmallNote } from "../../components/typography.styled";
import useLocation from "../../hooks/useLocation";
import useUsers from "../../hooks/useUsers";
import NewAdventureRequest from "../../types/requests/new-adventure-request";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Chip from "../../components/chip.component";
import UserBadge from "../../components/user-badge.component";
import ImageUploader, { PreviewFile } from "../../components/image-uploader.component";
import { SearchResultsPopupArea, SearchResultsPopupContainer, SearchResultSuggestion } from "./location-new-adventure.styled";
import AuthContext from "../../hooks/auth-context";
import React from "react";
import usePostAdventure from "./hooks/usePostAdventure";
import ReactLoading from 'react-loading';
import Div100vh from 'react-div-100vh';

const getDateComponentMs = (time: Date): number => {
    return new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
        0, 0, 0
    ).getTime();
};
const msSinceMidnight = (time: Date): number => {
    return time.getTime() - getDateComponentMs(time);
};
const timeStringToMs = (time: string): number => {
    return ((+time.split(":")[0] * 60) + (+time.split(":")[1])) * 60 * 1000;
};

const LocationNewAdventurePage = () => {
    const { locationId } = useParams();
    const { location } = useLocation(+(locationId as string));
    const { users } = useUsers();
    const auth = React.useContext(AuthContext);

    const [pageOn, setPageOn] = useState(0);
    const [pageAllow, setPageAllow] = useState(1);
    const [adventure, setAdventure] = useState<NewAdventureRequest>({
        locationId: +(locationId as string),
        time: new Date(),
        description: "",
        members: [],
        isPrivate: false,
        rating: 0,
        comment: ""
    });
    const [userSearch, setUserSearch] = useState("");
    const [files, setFiles] = useState<PreviewFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();
    if (!auth) navigate("/login");

    const postAdventure = usePostAdventure();

    const handleBackButton = () => {
        if (pageOn === 0) navigate(`/location/${adventure.locationId}`);
        else setPageOn(pageOn-1);
    };
    const handleNextButton = () => {
        if (pageOn === 4) {
            setUploading(true);
            postAdventure(adventure, files)
                .then(res => {
                    navigate(`/location/${adventure.locationId}`);
                })
                .catch(err => console.log(err))
                .finally(() => setUploading(false));
        }
        else setPageOn(pageOn + 1);
    };

    return (
        <Div100vh>
            <PageArea>
                <BackgroundArea/>
                <MainArea hardLimitHeight={1}>
                    <FancyHeader center={1}>New Adventure!</FancyHeader>
                    <DottedDivider />
                    <Pagination pageOn={pageOn}>
                        {/* Date and Time */}
                        <ColumnLayout>
                            <SectionHeader>
                                What day was this adventure?
                            </SectionHeader>
                            <DatePicker
                                value={adventure.time}
                                clearIcon={null}
                                onChange={(d:Date) => setAdventure(
                                    {
                                        ...adventure,
                                        time: new Date(d.getTime() + msSinceMidnight(adventure.time))
                                    })
                                }/>
                            <SectionHeader>
                                What time?
                            </SectionHeader>
                            <TimePicker
                                value={adventure.time.toTimeString()}
                                clearIcon={null}
                                onChange={(t) => setAdventure(
                                    {
                                        ...adventure,
                                        time: new Date(getDateComponentMs(adventure.time) + timeStringToMs(t.toString()))
                                    })
                                }/>
                        </ColumnLayout>
                        {/* Description */}
                        <ColumnLayout>
                            <SectionHeader>
                                What did you do on your adventure?
                            </SectionHeader>
                            <TextArea
                                limitWidth={1}
                                rows={6}
                                value={adventure.description}
                                onChange={e => {
                                    setAdventure({...adventure, description:e.target.value});
                                    if (pageAllow < 2) setPageAllow(2);
                                }} />
                        </ColumnLayout>
                        {/* Rating and Comment */}
                        <ColumnLayout>
                            <SectionHeader>
                                How would you rate your experience?
                            </SectionHeader>
                            <RatingInput
                                rating={adventure.rating}
                                onChange={r => {
                                    setAdventure({...adventure, rating:r});
                                    if (pageAllow < 5) setPageAllow(5);
                                }} />
                            <SectionHeader>
                                Any comment?
                            </SectionHeader>
                            <TextArea
                                limitWidth={1}
                                rows={6}
                                value={adventure.comment}
                                onChange={e => {
                                    setAdventure({...adventure, comment:e.target.value});
                                }} />
                        </ColumnLayout>
                        {/* Upload images */}
                        <ColumnLayout>
                            <SectionHeader>
                                Add some images of your adventure.
                            </SectionHeader>
                            <ImageUploader files={files} setFiles={setFiles}/>
                        </ColumnLayout>
                        {/* Other Members */}
                        <ColumnLayout>
                            <SectionHeader>
                                Who else was with you?
                            </SectionHeader>
                            <SmallNote padding="0 32px" center={1}>
                                These people will be notified and asked to add their own reviews the next time they log in.
                            </SmallNote>
                            <TextInput 
                                limitWidth={1}
                                value={userSearch}
                                onChange={e => setUserSearch(e.target.value)}
                            />
                            {
                                userSearch !== "" &&
                                <SearchResultsPopupContainer>
                                    <SearchResultsPopupArea>
                                        {
                                            users.filter(u => auth?.userId !== u.userId
                                                && !adventure.members.find(m => m.userId === u.userId)
                                                && u.displayName.toLowerCase().search(userSearch.toLowerCase()) >= 0)
                                                .map(u => <SearchResultSuggestion
                                                    key={u.userId}
                                                    onClick={() => {
                                                        const newMembers = adventure.members;
                                                        newMembers.push(u);
                                                        setAdventure({...adventure, members:newMembers});
                                                        setUserSearch("");
                                                    }}>
                                                        <UserBadge user={u} />
                                                    </SearchResultSuggestion>)
                                        }
                                    </SearchResultsPopupArea>
                                </SearchResultsPopupContainer>
                            }
                            <CollectionLayout>
                                { adventure.members.map((m,i) => 
                                    <Chip key={i} onPressX={() => {
                                            setAdventure({ ...adventure, members:adventure.members.filter((_,fi)=>i!==fi) });
                                        }}>
                                        <UserBadge user={m}/>
                                    </Chip>
                                )}
                            </CollectionLayout>
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
                                    { pageOn === 4 ? "Submit" : "Next" }
                                </Button>
                            </RowLayout>
                    }
                </MainArea>
            </PageArea>
        </Div100vh>
    );
};

export default LocationNewAdventurePage;