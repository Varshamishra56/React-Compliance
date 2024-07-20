const WelcomeMsg = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="welcomeMsg">There are no posts to display</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMsg;
