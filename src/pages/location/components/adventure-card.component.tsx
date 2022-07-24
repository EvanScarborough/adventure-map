import { CollectionLayout } from "../../../components/basic.styled";
import Rating from "../../../components/rating.component";
import { SectionHeader, SmallNote } from "../../../components/typography.styled";
import UserBadge from "../../../components/user-badge.component";
import { Adventure } from "../../../types/adventure";
import { AdventureCardArea, AdventureImageContainer, CenterAligner } from "../location.styled";
import AdventureMemberComment from "./adventure-member-comment.component";

interface AdventureCardProps {
    adventure: Adventure,
    openImageModal: (url: string) => void
};
const AdventureCard = ({ adventure, openImageModal }: AdventureCardProps) => {
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
        </AdventureCardArea>
    );
};

export default AdventureCard;