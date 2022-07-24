import Rating from "../../../components/rating.component";
import { BodyItalic } from "../../../components/typography.styled";
import UserBadge from "../../../components/user-badge.component";
import { AdventureMember } from "../../../types/adventure-member";
import { MemberCommentArea, MemberCommentDescriptionArea } from "../location.styled";


const AdventureMemberComment = ({ adventureMember }: { adventureMember: AdventureMember }) => {
    return (
        <MemberCommentArea>
            <UserBadge user={adventureMember.user} imageOnly/>
            <MemberCommentDescriptionArea>
                <Rating rating={adventureMember.rating} />
                {adventureMember.comment && <BodyItalic>{`"${adventureMember.comment}"`}</BodyItalic>}
            </MemberCommentDescriptionArea>
        </MemberCommentArea>
    );
};

export default AdventureMemberComment;