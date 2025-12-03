import getAllReviews from "@/utils/getAllReviews"
import Review from "../UI/review"
import type { Review as Rev } from "@/interfaces/interfaces";

type Props = {
  reviews: Rev[]
};

function ReviewsFetchUI({reviews} : Props) {

  return (
    <>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </>
  )
}

export default async function CategoriesFetch() {
  const reviews : Rev[] = await getAllReviews();

  return <ReviewsFetchUI reviews={reviews} />;
}
