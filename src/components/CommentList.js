import Comment from "./Comment";

function showCommentList(comment) {
  if (comment.replies.length) {
    return (
      <div className="ps-8 pe-4 border-l-2 border-black border-solid">
        <CommentList info={comment.replies} />
      </div>
    );
  }
}

const CommentList = (props) => {
  //console.log(props.info);
  return (
    <div className="flex flex-col gap-4">
      {props.info.map((comment, index) => (
        <div key={index}>
          <Comment info={comment} />
          {showCommentList(comment)}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
