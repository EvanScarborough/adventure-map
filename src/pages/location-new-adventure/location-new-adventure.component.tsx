import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackgroundArea, Button, CollectionLayout, ColumnLayout, DottedDivider, MainArea, PageArea, RowLayout } from "../../components/basic.styled";
import { TextArea } from "../../components/form.styled";
import Pagination from "../../components/pagination.component";
import RatingInput from "../../components/rating-input.component";
import { FancyHeader, SectionHeader, SmallNote } from "../../components/typography.styled";
import useLocation from "../../hooks/useLocation";
import {useDropzone} from 'react-dropzone';
import NewAdventureRequest from "../../types/requests/new-adventure-request";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Chip from "../../components/chip.component";
import UserBadge from "../../components/user-badge.component";

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

    const onDropImage = (acceptedFiles:any) => {

    };
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop:onDropImage});

    const [pageOn, setPageOn] = useState(0);
    const [pageAllow, setPageAllow] = useState(1);
    const [adventure, setAdventure] = useState<NewAdventureRequest>({
        locationId: +(locationId as string),
        time: new Date(),
        description: "",
        members: [{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"},{userId:1,displayName:"Evan"}],
        isPrivate: false,
        rating: 0,
        comment: ""
    });

    return (
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
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p>Drop image here!</p> :
                                <p>Drag and drop images here, or click to select files</p>
                            }
                        </div>
                    </ColumnLayout>
                    {/* Other Members */}
                    <ColumnLayout>
                        <SectionHeader>
                            Who else was with you?
                        </SectionHeader>
                        <SmallNote padding="0 32px" center={1}>
                            These people will be notified and asked to add their own reviews the next time they log in.
                        </SmallNote>
                        <CollectionLayout>
                            { adventure.members.map((m,i) => 
                                <Chip key={i} onPressX={() => {
                                        setAdventure({ ...adventure, members:adventure.members.splice(i,1) });
                                    }}>
                                    <UserBadge user={m}/>
                                </Chip>
                            )}
                        </CollectionLayout>
                    </ColumnLayout>
                </Pagination>
                <RowLayout>
                    <Button disabled={pageOn <= 0} onClick={()=>setPageOn(pageOn-1)}>Back</Button>
                    <Button disabled={pageAllow <= pageOn} onClick={()=>setPageOn(pageOn+1)}>
                        { pageOn === 4 ? "Submit" : "Next" }
                    </Button>
                </RowLayout>
            </MainArea>
        </PageArea>
    );
};

export default LocationNewAdventurePage;