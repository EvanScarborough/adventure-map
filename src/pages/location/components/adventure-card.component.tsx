import { CollectionLayout } from "../../../components/basic.styled";
import Rating from "../../../components/rating.component";
import { SectionHeader, SmallNote } from "../../../components/typography.styled";
import UserBadge from "../../../components/user-badge.component";
import { Adventure } from "../../../types/adventure";
import { AdventureCardArea, CenterAligner } from "../location.styled";
import AdventureMemberComment from "./adventure-member-comment.component";


const AdventureCard = ({ adventure }: { adventure: Adventure }) => {
    const primaryMember = adventure.members.filter(m => m.isPrimary)[0];
    const otherMembers = adventure.members.filter(m => !m.isPrimary && m.isCompleted);
    const pendingMembers = adventure.members.filter(m => !m.isPrimary && !m.isCompleted);

    const dateLocale = 'en-US';

    return (
        <AdventureCardArea>
            <SectionHeader margin="0">{adventure.description}</SectionHeader>
            <CenterAligner>
                <SmallNote>
                    {new Date(adventure.time).toLocaleDateString(dateLocale,
                        { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                </SmallNote>
            </CenterAligner>
            <AdventureMemberComment adventureMember={primaryMember} />
            {otherMembers.map((m,i) => <AdventureMemberComment key={i} adventureMember={m} />)}
            <CollectionLayout left={1} spacing="4px">
                {pendingMembers.map((m,i) => <UserBadge key={i} user={m.user} small imageOnly />)}
            </CollectionLayout>
        </AdventureCardArea>
    );
};

export default AdventureCard;