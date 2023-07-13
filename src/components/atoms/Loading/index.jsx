import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return <FontAwesomeIcon icon={faSpinner} size="lg" spin />;
};

export default Loading;
