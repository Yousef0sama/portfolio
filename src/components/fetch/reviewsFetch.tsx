// imports

// components
import Review from "../UI/review"

// utils
import getAllReviews from "@/utils/getAllReviews"

// interfaces
import type { Review as ReviewType } from "@/interfaces/interfaces";

/**
 * UI component responsible for rendering a list of reviews.
 * @param {Object} props - Component props
 * @param {ReviewType[]} props.reviews - Array of review objects fetched from the server.
 * @returns {React.JSX.Element} Rendered list of review components.
 */
function ReviewsFetchUI({ reviews }: {reviews: ReviewType[]}): React.JSX.Element {

  return (
    <>
      {/* Iterate through reviews and render a Review component for each item */}
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </>
  );
}

/**
 * Server component that fetches all reviews then passes them to the UI renderer.
 * This component is async because it performs server-side data fetching.
 * @returns {Promise<React.JSX.Element>} ReviewsFetchUI with loaded review data.
 */
export default async function ReviewsFetch(): Promise<React.JSX.Element> {
  // Fetch all reviews from the API utility
  const reviews: ReviewType[] = await getAllReviews();

  // Pass fetched reviews to the UI component
  return <ReviewsFetchUI reviews={reviews} />;
}
