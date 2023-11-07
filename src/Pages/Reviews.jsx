

const Reviews = ({post}) => {
    console.log(post);
    const{userReview}=post||{};
    return (
        <div>
            
            <li>{userReview}</li>
        </div>
    );
};

export default Reviews;