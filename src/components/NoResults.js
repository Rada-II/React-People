import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const NoResults = () => {
  return (
    <div className="content">
      <SentimentNeutralIcon className="svg_icons" />
      <h3>We couldn't find any people matching your search</h3>
    </div>
  );
};

export default NoResults;
