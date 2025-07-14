import helpers from "../helpers";

export default function AuthorAttribution({
  date,
}: {
  date?: string;
}): JSX.Element {
  return (
    <div className="flex space-x-1">
      <span>by</span>
      <p className="font-semibold text-brand-purple">Ayomide Dare</p>
      <span>{helpers.stringToFriendlyDate(date)}</span>
    </div>
  );
}
