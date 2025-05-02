import { useNavigate } from "react-router-dom";
import NotFoundIcon from "./NotFoundIcon";
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="wrapper-404">
      <NotFoundIcon />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa-regular fa-angle-left"></i>
        Go Back
      </button>
    </div>
  );
}

export default NotFoundPage;
