import { useContext } from "react";
import { CollectionLayout, LinkButton } from "../../../components/basic.styled";
import { SectionHeader, SmallNote } from "../../../components/typography.styled";
import UserBadge from "../../../components/user-badge.component";
import AuthContext from "../../../hooks/auth-context";
import { Adventure } from "../../../types/adventure";
import { AdventureCardArea, AdventureImageContainer } from "../location.styled";
import AdventureMemberComment from "./adventure-member-comment.component";

interface AdventureCardProps {
    adventure: Adventure,
    openImageModal: (url: string) => void
};
const AdventureCard = ({ adventure, openImageModal }: AdventureCardProps) => {
    const auth = useContext(AuthContext);
    const primaryMember = adventure.members.filter(m => m.isPrimary)[0];
    const otherMembers = adventure.members.filter(m => !m.isPrimary && m.isCompleted);
    const pendingMembers = adventure.members.filter(m => !m.isPrimary && !m.isCompleted);
    const images = adventure.members.map(m => m.imageUrls).flat();

    const dateLocale = 'en-US';

    return (
        <AdventureCardArea>
            <SectionHeader margin="0">{adventure.description}</SectionHeader>
            <SmallNote>
                {new Date(adventure.time).toLocaleDateString(dateLocale,
                    { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
            </SmallNote>
            <CollectionLayout>
                {
                    images.map((im,i) => <AdventureImageContainer key={i} imageUrl={im} onClick={() => openImageModal(im)}/>)
                }
            </CollectionLayout>
            <AdventureMemberComment adventureMember={primaryMember} />
            {otherMembers.map((m,i) => <AdventureMemberComment key={i} adventureMember={m} />)}
            <CollectionLayout left={1} spacing="4px">
                {pendingMembers.map((m,i) => <UserBadge key={i} user={m.user} small imageOnly />)}
            </CollectionLayout>
            { (auth && pendingMembers.find(m => m.user.userId === auth.userId)) &&
                <LinkButton width="150px" href={`/adventure/${adventure.adventureId}/review`} smallText={1}>Add My Review</LinkButton>}
        </AdventureCardArea>
    );
};

export default AdventureCard;