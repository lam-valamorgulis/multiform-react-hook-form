type InformationDisplayProps = {
  information: {
    username: string;
    datePicker: string[];
    ReactSelection: string;
  };
};

const InformationDisplay: React.FC<InformationDisplayProps> = ({
  information,
}) => {
  return (
    <div className="flex justify-center m-6">
      <div className="text-left bg-gray-50 rounded-lg p-6 shadow-lg mx-auto max-w-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Information Received:
        </h2>
        <div className="px-2">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              <span className="font-medium text-indigo-600">Username:</span>{" "}
              {information.username}
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-medium text-indigo-600">Date Start:</span>{" "}
              {information.datePicker[0]}
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-medium text-indigo-600">Date End:</span>{" "}
              {information.datePicker[1]}
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-medium text-indigo-600">Select:</span>{" "}
              {information.ReactSelection}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationDisplay;
