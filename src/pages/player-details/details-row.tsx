interface Props {
  title: string;
  value: string;
  classes?: string;
}

function DetailsRow({ title, value, classes = "" }: Props) {
  return (
    <div className={`p-6 w-full  ${classes}`}>
      <div className="text-sm text-gray-500 text-normal py-1 mb-2 uppercase">
        {title}
      </div>
      <div className="font-bold">{value || "-"}</div>
    </div>
  );
}

export default DetailsRow;
