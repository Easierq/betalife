import helpers from "../helpers";

export default function AuthorAttribution({
  date,
}: {
  date?: string;
}): JSX.Element {
  return (
    <div className="flex space-x-1">
      <span>by</span>
      <p className="font-medium text-brand-navy">Ayomide Dare</p>
      <span>
        on May 30, 2023
        {/* on {helpers.stringToFriendlyDate(post.metadata.published_date)} */}
      </span>
    </div>
  );
}
