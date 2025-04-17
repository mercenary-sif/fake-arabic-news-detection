import { MdVerified, MdReportGmailerrorred, MdHelpOutline } from "react-icons/md";
const PredictionIcon = ({ type }) => {
  if (type === "Real") return <MdVerified  />;
  if (type === "Fake") return <MdReportGmailerrorred color="red" size={28} />;
  if (type === "Doubtful") return <MdHelpOutline color="orange" size={28} />;
};

export default PredictionIcon