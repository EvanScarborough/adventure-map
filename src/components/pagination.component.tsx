import { PaginationArea, PaginationAreaInner, PaginationPage } from "./basic.styled";


interface PaginationProps {
    pageOn: number,
    children: any[]
};
const Pagination = ({ pageOn, children }: PaginationProps) => {
    return (
        <PaginationArea>
            <PaginationAreaInner pageCount={children.length} pageOn={pageOn}>
                {children.map((c,i) => <PaginationPage visible={pageOn == i ? 1 : 0}>{c}</PaginationPage>)}
            </PaginationAreaInner>
        </PaginationArea>
    );
}

export default Pagination;